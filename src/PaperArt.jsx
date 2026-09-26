// Theme-aware paper thumbnails. Each drawing summarises the paper's method,
// using the site palette through CSS custom properties (see .paper-thumb in styles.css).
// To use a real figure instead, set `image: '/assets/papers/<file>.png'` on the publication.

const Arrow = ({ x1, y1, x2, y2 }) => (
  <g className="pa-arrow">
    <line x1={x1} y1={y1} x2={x2 - 2} y2={y2} />
    <path d={`M${x2 - 7} ${y2 - 5} L${x2} ${y2} L${x2 - 7} ${y2 + 5}`} />
  </g>
);

// G-MORDA: video frames -> graph over visual tokens -> a few locally distinct tokens -> VideoLLM.
function GMorda() {
  const nodes = [[150, 62, 0], [186, 48, 1], [206, 88, 0], [168, 102, 1], [140, 136, 0], [184, 146, 0], [214, 128, 1]];
  const edges = [[0, 1], [0, 3], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [2, 6], [4, 5]];
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Video frames are compressed through a token graph into a few distinct tokens for a VideoLLM">
      <g transform="translate(0 14)">
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${22 + i * 10} ${48 + i * 12})`}>
          <rect className="pa-card" width="66" height="46" rx="6" />
          {i === 3 && <>
            <circle className="pa-gold" cx="48" cy="14" r="6" />
            <path className="pa-soft" d="M6 40 L24 20 L36 32 L44 25 L60 40 Z" />
          </>}
        </g>
      ))}
      <Arrow x1={106} y1={98} x2={128} y2={98} />
      {edges.map(([a, b]) => <line key={`${a}-${b}`} className="pa-edge" x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
      {nodes.map(([x, y, keep], i) => <circle key={i} cx={x} cy={y} r={keep ? 8 : 6} className={keep ? 'pa-accent' : 'pa-node'} />)}
      <Arrow x1={228} y1={98} x2={250} y2={98} />
      {[0, 1, 2].map(i => <rect key={i} className="pa-accent" x="258" y={72 + i * 19} width="14" height="14" rx="3" />)}
      <rect className="pa-frame" x="282" y="58" width="22" height="80" rx="6" />
      <text className="pa-label" x="293" y="98" transform="rotate(90 293 98)" textAnchor="middle" dominantBaseline="middle">LLM</text>
      </g>
    </svg>
  );
}

// KWordinaryVQA: a dish photo, keyword chips extracted from the question, and a generated answer.
function KWordinaryVQA() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="A food image, keyword chips and a generated answer">
      <g transform="translate(0 14)">
      <rect className="pa-card" x="22" y="40" width="120" height="120" rx="10" />
      <circle className="pa-plate" cx="82" cy="100" r="40" />
      <circle className="pa-card" cx="82" cy="100" r="29" />
      <circle className="pa-gold" cx="72" cy="92" r="8" />
      <circle className="pa-red" cx="92" cy="104" r="7" />
      <ellipse className="pa-leaf" cx="76" cy="112" rx="9" ry="4.5" transform="rotate(-25 76 112)" />
      <circle className="pa-accent" cx="94" cy="88" r="4" />
      <rect className="pa-bubble" x="160" y="36" width="138" height="34" rx="12" />
      <text className="pa-label strong" x="174" y="57">Q</text>
      <rect className="pa-soft" x="190" y="49" width="94" height="8" rx="4" />
      <rect className="pa-chip hot" x="160" y="82" width="54" height="22" rx="11" />
      <rect className="pa-chip" x="220" y="82" width="42" height="22" rx="11" />
      <rect className="pa-chip" x="268" y="82" width="30" height="22" rx="11" />
      <rect className="pa-bubble answer" x="160" y="116" width="138" height="46" rx="12" />
      <text className="pa-label strong on-accent" x="174" y="143">A</text>
      <rect className="pa-onaccent" x="190" y="129" width="94" height="7" rx="3.5" />
      <rect className="pa-onaccent" x="190" y="143" width="66" height="7" rx="3.5" />
      </g>
    </svg>
  );
}

// Flame Reavers@ALQAC: legal documents -> learned rankers + LLM reasoning -> ranked results, winning entry first.
function FlameReavers() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="Legal documents are ranked, with the top result highlighted">
      <g transform="translate(0 14)">
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${26 + i * 12} ${46 + i * 12})`}>
          <rect className="pa-card" width="62" height="80" rx="6" />
          {i === 2 && <>
            <text className="pa-label section" x="31" y="30" textAnchor="middle">§</text>
            <rect className="pa-soft" x="12" y="44" width="38" height="5" rx="2.5" />
            <rect className="pa-soft" x="12" y="55" width="30" height="5" rx="2.5" />
          </>}
        </g>
      ))}
      <Arrow x1={112} y1={100} x2={134} y2={100} />
      <g transform="translate(140 72)">
        <rect className="pa-frame" width="44" height="56" rx="8" />
        <circle className="pa-accent-ring" cx="20" cy="24" r="10" />
        <line className="pa-accent-line" x1="27" y1="31" x2="34" y2="38" />
      </g>
      <Arrow x1={190} y1={100} x2={210} y2={100} />
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(216 ${46 + i * 28})`}>
          <rect className={i === 0 ? 'pa-rank top' : 'pa-rank'} width="84" height="22" rx="6" />
          <text className={i === 0 ? 'pa-label strong gold-ink' : 'pa-label'} x="12" y="15" textAnchor="middle">{i + 1}</text>
          <rect className={i === 0 ? 'pa-gold' : 'pa-soft'} x="24" y="8" width={52 - i * 10} height="6" rx="3" />
        </g>
      ))}
      </g>
    </svg>
  );
}

const art = { gmorda: GMorda, kwordinaryvqa: KWordinaryVQA, flamereavers: FlameReavers };

// Thumbnail order of preference: real figure (`image`) > drawn method sketch (`art`) > designed placeholder.
export function PaperThumb({ paper, icon }) {
  const Art = art[paper.art];
  const kind = paper.image ? 'is-image' : Art ? 'is-art' : 'is-placeholder';
  return (
    <div className={`paper-thumb ${kind}`}>
      {paper.image ? <img src={paper.image} alt="" loading="lazy" /> : Art ? <Art /> : (
        <div className="thumb-placeholder" aria-hidden="true">
          {icon && <span className="thumb-icon">{icon}</span>}
          <span className="thumb-caption">{paper.badge || paper.organization}</span>
        </div>
      )}
      {paper.badge && <span className="paper-badge">{paper.badge}</span>}
    </div>
  );
}
