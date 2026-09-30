import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUpRight, GithubLogo, MapPin, ArrowLeft, ArrowRight, List, X, Trophy, LinkedinLogo, EnvelopeSimple, Bank, GraduationCap, Database, ForkKnife, ChalkboardTeacher, Scroll, House, GameController } from '@phosphor-icons/react';
import { PaperThumb } from './PaperArt';
import { profile } from './content';
import { posts } from './posts';
import { DynamicBackground } from './Motion';

const sections = [['About', 'about'], ['News', 'news'], ['Publications', 'publications'], ['Work Experience', 'experience'], ['Awards', 'awards']];
const journalUrl = '/?view=journal';
const entries = posts;
const external = { target: '_blank', rel: 'noopener noreferrer' };

function ThemePicker({theme, setTheme}) {
  return <div className="theme-picker" role="group" aria-label="Color theme">{['mono','dark'].map(t => <button key={t} aria-label={`${t} theme`} aria-pressed={theme === t} onClick={() => setTheme(t)} className={`swatch ${t}`}><span /></button>)}</div>;
}
function Authors({text}) {
  return text.split(/(Thanh Thai Nguyen|Thanh-Thai Nguyen|Thai Nguyen)/g).map((part,i) => /^(Thanh Thai Nguyen|Thanh-Thai Nguyen|Thai Nguyen)$/.test(part) ? <span className="author-self" key={i}>{part}</span> : part);
}
const projectIcons = { database: <Database size={22} weight="duotone"/>, food: <ForkKnife size={22} weight="duotone"/>, learning: <ChalkboardTeacher size={22} weight="duotone"/>, scroll: <Scroll size={22} weight="duotone"/>, game: <GameController size={22} weight="duotone"/> };
function Empty({children}) { return <p className="empty">{children}</p>; }
function Profile() {
  return <div className="profile-layout">
    <aside className="identity">
      <img className="portrait" src="/assets/thomas-ng-portrait.jpg" alt="Nguyen Thanh Thai"/>
      <h2>Nguyen Thanh Thai</h2><p className="alias">Thomas NG</p>
      <p className="identity-description">Research Assistant at the <span className="nowrap">VinUni-Illinois Smart Health Center</span> (VISHC).</p>
      <div className="identity-links">
        <p className="location" title="Hometown"><House size={16} weight="fill" aria-hidden="true"/><span>Cao Lanh, Dong Thap, Vietnam</span></p>
        <a className="social" href="#experience"><Bank size={16} weight="fill" aria-hidden="true"/><span>VinUni · VISHC</span></a>
        <a className="social" href="#cv"><GraduationCap size={16} weight="fill" aria-hidden="true"/><span>University of Science, VNU-HCM</span></a>
        <a className="social" href="mailto:nguyenthanhthai115327@gmail.com"><EnvelopeSimple size={16} weight="fill" aria-hidden="true"/><span>Email</span></a>
        <a className="social" href="https://github.com/Banhmikepthit0105" {...external}><GithubLogo size={16} weight="fill" aria-hidden="true"/><span>GitHub</span></a>
        <a className="social" href="https://www.linkedin.com/in/thomasng015" {...external}><LinkedinLogo size={16} weight="fill" aria-hidden="true"/><span>LinkedIn</span></a>
      </div>
    </aside>
    <div className="academic-content">
      <section id="about"><h1>About Me</h1><p>I am a Research Assistant at the <span className="nowrap">VinUni-Illinois Smart Health Center</span> (VISHC), working with Prof. Kok-Seng Wong on LoRA adaptation for vision-language-action (VLA) models and robot learning. My academic background is in <strong>Information Technology, specializing in Data Science</strong>, at the University of Science, Vietnam National University Ho Chi Minh City.</p><p>My research interests include <strong>vision-language models, video understanding, and information retrieval</strong>. My work includes dental CBCT retrieval at MICCAIW 2026 (ODIN Workshop), efficient video reasoning with G-MORDA (accepted at KES 2026), culinary visual question answering at PACLIC 2025, and legal retrieval at KSE 2025.</p><p>This is a home for my research, work, and writing.</p></section>
      <section id="news"><h2>News</h2>{profile.news.length ? <ul className="news-list">{profile.news.map((n,i) => <li key={i}><time>[{n.date}]</time> {n.url ? <a href={n.url} {...external}>{n.text}</a> : <span className={n.highlight ? "news-highlight" : undefined}>{n.text}</span>}</li>)}</ul> : <Empty>No updates to share just yet.</Empty>}</section>
      <section id="publications"><h2>Publications</h2><ul className="papers">{profile.publications.map(p=><li key={p.title} className="paper-card"><PaperThumb paper={p}/><div className="paper-body">{p.topic && <p className="paper-topic">{p.topic}</p>}{p.url ? <a className="paper-title-link" href={p.url} {...external}>{p.title}</a> : <span className="paper-title">{p.title}</span>}{p.authors && <p className="paper-authors"><Authors text={p.authors}/></p>}<p className="paper-venue">{p.venue}</p>{p.distinction && <p className="paper-distinction"><Trophy size={16} weight="fill" aria-hidden="true"/> {p.distinction}</p>}</div></li>)}</ul></section>
      <section id="experience"><h2>Work Experience</h2>{profile.experience.length ? profile.experience.map(e=><article className="work-row" key={e.role+e.organization}>{e.period && <time>{e.period}</time>}<div><h3>{e.role}</h3><p>{e.organization}</p>{e.arrangement && <p className="work-arrangement">{e.arrangement}</p>}{e.description && <p>{e.description}</p>}</div></article>) : <Empty>Professional experience will be added here.</Empty>}</section>
      <section id="awards"><h2><Trophy size={24} weight="duotone" aria-hidden="true"/> Awards</h2>{profile.awards.length ? <ul className="awards-list">{profile.awards.map(a=><li key={a.title} className={a.featured ? "featured-award" : undefined}><div className="award-head"><strong className="award-name">{a.url ? <a href={a.url} {...external}>{a.title}</a> : a.title}</strong>{a.date && <time className="award-date">{a.date}</time>}</div>{a.issuer && <p className="award-issuer">{a.issuer}</p>}{a.rounds ? <ol className="award-rounds">{a.rounds.map(r=><li key={r.date}><div className="award-head"><span className="round-stage">{r.stage}</span><time className="award-date">{r.date}</time></div><p className="award-description">{r.description}</p></li>)}</ol> : <p className="award-description">{a.description}</p>}</li>)}</ul> : <Empty>Awards and recognitions will be added here.</Empty>}</section>
      <section id="cv"><h2>Education</h2>{profile.education.map(e=><article className="education-row" key={e.institution}><time>{e.period}</time><h3>{e.institution}</h3><p>{e.degree}</p>{e.details.length>0 && <ul>{e.details.map(detail=><li key={detail}>{detail}</li>)}</ul>}</article>)}</section>
      <section id="projects"><h2>Selected Projects</h2><ul className="papers projects">{profile.projects.map(p=><li className="paper-card" key={p.role}><PaperThumb paper={p} icon={projectIcons[p.icon]}/><div className="paper-body"><p className="paper-topic">{p.organization}</p>{p.url ? <a className="paper-title-link" href={p.url} {...external}>{p.role}</a> : <span className="paper-title">{p.role}</span>}<p className="project-meta">{p.period}</p><p className="project-description">{p.description}</p></div></li>)}</ul></section>
      <section id="languages"><h2>Languages</h2><dl className="language-list">{profile.languages.map(l=><div key={l.name}><dt>{l.name}</dt><dd>{l.level}</dd></div>)}</dl></section>
      
    </div>

  </div>;
}
const formatDate = d => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d || ''); return m ? `${m[3]}/${m[2]}/${m[1]}` : d; };
function Journal() {
  const slug = new URLSearchParams(location.search).get('post');
  const post = entries.find(p => p.slug === slug);
  useEffect(() => { document.title = `${post ? post.title : 'Blog & Notes'} · Thomas NG`; }, [post]);
  if (slug) return <article className="reading" lang={post?.language || 'vi'}><a href={journalUrl} className="back"><ArrowLeft size={18}/> Blog & Notes</a>{post ? <><header className="article-header"><p className="eyebrow">{post.category}</p><h1>{post.title}</h1>{post.excerpt && <p className="standfirst">{post.excerpt}</p>}<p className="article-byline">Nguyen Thanh Thai <span>Thomas NG</span>{post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}</p></header>{post.cover && <figure className="article-cover"><img src={post.cover} alt=""/></figure>}{post.html && <div className="reading-body" dangerouslySetInnerHTML={{__html: post.html}}/>}</> : <><h1>Không tìm thấy bài viết.</h1><p>Bài viết này không tồn tại.</p></>}</article>;
  return <div className="journal-page" lang="vi"><div className="journal-intro"><div><p className="eyebrow">THOMAS NG</p><h1>Blog <i>&</i> Notes</h1><p>Bài viết và những ghi chép cá nhân.</p></div></div><div className="article-list">{entries.map(p=><a className={`article-list-entry${p.cover ? ' has-cover' : ''}`} href={`${journalUrl}&post=${p.slug}`} key={p.slug}>{p.cover && <img className="article-list-cover" src={p.cover} alt="" loading="lazy"/>}<div><p className="eyebrow">{p.category}{p.date && <> · {formatDate(p.date)}</>}</p><h2>{p.title}</h2>{p.excerpt && <p>{p.excerpt}</p>}</div><ArrowRight size={26} aria-hidden="true"/></a>)}</div></div>;
}
export function App() {
  const journal = new URLSearchParams(location.search).get('view') === 'journal';
  const [theme,setTheme]=useState(['mono','dark'].includes(document.documentElement.dataset.theme) ? document.documentElement.dataset.theme : 'mono');
  const [open,setOpen]=useState(false);
  const navRef=useRef(null);
  const [hovered,setHovered]=useState(null);
  const [marker,setMarker]=useState({opacity:0});
  const [active,setActive]=useState(location.hash.slice(1)||'about');
  useLayoutEffect(()=>{
    const nav=navRef.current;
    const update=()=>{
      const link=nav?.querySelector(hovered ? `[href="${hovered}"]` : '.is-active');
      if(!link || !nav.offsetWidth){setMarker({opacity:0});return;}
      const stacked=getComputedStyle(nav).flexDirection==='column';
      setMarker({opacity:1,width:stacked?24:link.offsetWidth,transform:`translate(${link.offsetLeft}px, ${link.offsetTop+link.offsetHeight-(stacked?3:15)}px)`});
    };
    update();
    const observer=new ResizeObserver(update);
    if(nav)observer.observe(nav);
    return()=>observer.disconnect();
  },[active,hovered,open,journal]);
  const navigateSection=(event,id)=>{
    event.preventDefault();
    setOpen(false);
    setActive(id);
    history.pushState(null,'',`#${id}`);
    document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  };
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('thomas-theme',theme);}catch{} document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='mono'?'#ffffff':'#07131b');},[theme]);
  useEffect(()=>{const sync=e=>{if(e.key==='thomas-theme'&&['mono','dark'].includes(e.newValue))setTheme(e.newValue);};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
  useEffect(()=>{if(journal)return;const update=()=>{let current='about';for(const [,id] of sections){if(document.getElementById(id)?.getBoundingClientRect().top<=150)current=id;}setActive(current);};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update);},[journal]);
  return <><a className="skip-link" href="#main-content">Skip to content</a>{!journal && theme==='dark' && <DynamicBackground theme={theme}/>}<header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a className="brand" href="/">Thomas NG<span className="brand-dot">.</span></a><button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<List/>}</button><div ref={navRef} onMouseLeave={()=>setHovered(null)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setHovered(null);}} className={`nav-links ${open?'is-open':''}`}>{journal ? <><a href="/">Research profile</a><a href={journalUrl} className="is-active">Blog & Notes</a></> : sections.map(([label,id])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined} className={active===id?'is-active':''} onMouseEnter={()=>setHovered(`#${id}`)} onFocus={()=>setHovered(`#${id}`)} onClick={event=>navigateSection(event,id)}>{label}</a>)}<span className="nav-indicator" style={marker} aria-hidden="true"/></div><ThemePicker theme={theme} setTheme={setTheme}/>{!journal && <a className="header-blog-button" href={journalUrl} {...external}>Blog & Notes <ArrowUpRight size={16} aria-hidden="true"/></a>}</nav></header><main id="main-content">{journal?<Journal/>:<Profile/>}</main></>;
}

