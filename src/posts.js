// Blog & Notes posts live as Markdown files in /content/posts, edited through Pages CMS (.pages.yml)
// or any text editor. Each file: YAML-style front matter + Markdown (or HTML) body.
const files = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    data[kv[1]] = value === 'true' ? true : value === 'false' ? false : value;
  }
  return { data, body: match[2] };
}

const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const safeUrl = url => (/^(https?:|mailto:|\/|#|\.)/i.test(url.trim()) ? url.trim() : '#');

function inline(text) {
  return escapeHtml(text)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => `<img src="${safeUrl(src)}" alt="${alt}" loading="lazy">`)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => `<a href="${safeUrl(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

// Small Markdown renderer: headings, paragraphs, lists, quotes, images, links, emphasis, rules.
export function renderMarkdown(md) {
  const blocks = md.replace(/\r\n/g, '\n').trim().split(/\n{2,}/);
  return blocks.map(block => {
    const lines = block.split('\n');
    const heading = block.match(/^(#{1,4})\s+(.*)$/);
    if (heading && lines.length === 1) { const level = Math.min(heading[1].length + 1, 4); return `<h${level}>${inline(heading[2])}</h${level}>`; }
    if (/^(-{3,}|\*{3,})$/.test(block.trim())) return '<hr>';
    if (lines.every(l => /^\s*[-*]\s+/.test(l))) return `<ul>${lines.map(l => `<li>${inline(l.replace(/^\s*[-*]\s+/, ''))}</li>`).join('')}</ul>`;
    if (lines.every(l => /^\s*\d+\.\s+/.test(l))) return `<ol>${lines.map(l => `<li>${inline(l.replace(/^\s*\d+\.\s+/, ''))}</li>`).join('')}</ol>`;
    if (lines.every(l => l.startsWith('>'))) return `<blockquote><p>${lines.map(l => inline(l.replace(/^>\s?/, ''))).join('<br>')}</p></blockquote>`;
    const only = block.trim().match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (only) return `<figure><img src="${safeUrl(only[2])}" alt="${escapeHtml(only[1])}" loading="lazy">${only[1] ? `<figcaption>${escapeHtml(only[1])}</figcaption>` : ''}</figure>`;
    return `<p>${lines.map(inline).join('<br>')}</p>`;
  }).join('\n');
}

// The rich-text editor may save HTML; the owner is the only author, so HTML bodies are used as written.
const toHtml = body => (/^\s*</.test(body) ? body : renderMarkdown(body));

export const LANGS = ['vi', 'en', 'zh'];
const normLang = l => (l === 'zh-CN' || l === 'zh-Hans' || l === 'cn' ? 'zh' : LANGS.includes(l) ? l : 'vi');

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontMatter(raw);
    const file = path.split('/').pop().replace(/\.md$/, '');
    const language = normLang(data.language || (file.match(/\.(vi|en|zh)$/) || [])[1] || 'vi');
    // All language versions of one post share `key` (Post ID); default is the file name without a language suffix.
    const key = (data.key || file.replace(/\.(vi|en|zh)$/, '')).trim();
    return {
      key, slug: key, language,
      title: data.title || key,
      date: data.date || '',
      category: data.category || 'Blog',
      excerpt: data.excerpt || '',
      cover: data.cover || '',
      draft: data.draft === true,
      html: body.trim() ? toHtml(body) : '',
    };
  })
  .filter(post => !post.draft);

// One entry per post, holding each available language version.
export const postGroups = Object.values(posts.reduce((acc, p) => {
  (acc[p.key] ||= { key: p.key, versions: {} }).versions[p.language] = p;
  return acc;
}, {})).map(g => {
  const any = g.versions.vi || g.versions.en || g.versions.zh;
  return { ...g, date: Object.values(g.versions).map(v => v.date).sort().pop() || '', cover: any.cover };
}).sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.key.localeCompare(b.key));

// Pick the requested language, otherwise fall back in a fixed order.
export const pickVersion = (group, lang) => group.versions[lang] || group.versions.vi || group.versions.en || group.versions.zh;
