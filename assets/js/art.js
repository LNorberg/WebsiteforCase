/*
  Willow Tree artwork, drawn as inline SVG so it works offline and scales cleanly.
  Character and cover colours are fixed (like the book spines), so they look the same
  in light and dark mode. Logos use currentColor so they follow the theme.

  Content refers to art by key, e.g. art: "char:wren", "box", "librarycard".
*/
window.ART = (() => {
  "use strict";
  const INK = "#1C2433";
  const SERIF = "Young Serif, Georgia, serif";
  const SANS = "Instrument Sans, system-ui, sans-serif";
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const BG = { leaf: "#DCE8C6", sun: "#FBE3A6", sky: "#D6EAF0", berry: "#F4D2DC" };

  /* ---------- characters (viewBox 0 0 200 200, no background) ---------- */
  const CHAR = {
    wren: () => `
      <path d="M62 116 L22 72 L36 66 L72 104Z" fill="#7A5232"/>
      <ellipse cx="100" cy="122" rx="52" ry="42" fill="#9B6B43"/>
      <ellipse cx="110" cy="134" rx="34" ry="25" fill="#E8CFA6"/>
      <path d="M68 112 Q92 94 120 114 Q96 132 68 112Z" fill="#7A5232"/>
      <circle cx="136" cy="88" r="30" fill="#9B6B43"/>
      <path d="M118 78 Q136 68 157 76" stroke="#F3E3C3" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="143" cy="88" r="5.5" fill="${INK}"/><circle cx="144.8" cy="86.2" r="1.8" fill="#fff"/>
      <path d="M164 88 L186 94 L164 99Z" fill="#F2B630"/>
      <circle cx="150" cy="102" r="5" fill="#E9A6B9" opacity=".85"/>
      <path d="M92 162 v14 M112 162 v14" stroke="#7A5232" stroke-width="4" stroke-linecap="round"/>
      <g transform="rotate(-8 58 158)">
        <rect x="30" y="144" width="54" height="26" rx="3" fill="#fff" stroke="${INK}" stroke-width="2"/>
        <text x="57" y="162" font-family="${SERIF}" font-size="14" text-anchor="middle" fill="${INK}">hello</text>
      </g>`,

    badger: () => `
      <circle cx="56" cy="60" r="17" fill="#5C5F66"/><circle cx="144" cy="60" r="17" fill="#5C5F66"/>
      <circle cx="56" cy="60" r="8" fill="#E9A6B9"/><circle cx="144" cy="60" r="8" fill="#E9A6B9"/>
      <path d="M100 38 C152 38 172 92 162 132 C152 170 124 182 100 182 C76 182 48 170 38 132 C28 92 48 38 100 38Z" fill="#EDEAE3"/>
      <path d="M74 44 C62 78 64 120 88 152 L96 148 C82 116 82 80 88 46Z" fill="#2A2D33"/>
      <path d="M126 44 C138 78 136 120 112 152 L104 148 C118 116 118 80 112 46Z" fill="#2A2D33"/>
      <circle cx="82" cy="106" r="4.5" fill="#fff"/><circle cx="118" cy="106" r="4.5" fill="#fff"/>
      <circle cx="82" cy="106" r="15" fill="none" stroke="#C8962F" stroke-width="3"/>
      <circle cx="118" cy="106" r="15" fill="none" stroke="#C8962F" stroke-width="3"/>
      <path d="M97 106 h6" stroke="#C8962F" stroke-width="3"/>
      <ellipse cx="100" cy="148" rx="12" ry="8" fill="${INK}"/>
      <path d="M90 162 Q100 170 110 162" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M100 186 L78 174 V196Z M100 186 L122 174 V196Z" fill="#B84A6A"/>
      <circle cx="100" cy="186" r="5" fill="#8E3450"/>`,

    otters: () => {
      const otter = (cx, cy, scarf) => `
        <ellipse cx="${cx}" cy="${cy + 66}" rx="31" ry="40" fill="#8A5A3B"/>
        <ellipse cx="${cx}" cy="${cy + 74}" rx="18" ry="26" fill="#C9A27A"/>
        <circle cx="${cx - 26}" cy="${cy - 22}" r="8" fill="#6E4630"/><circle cx="${cx + 26}" cy="${cy - 22}" r="8" fill="#6E4630"/>
        <circle cx="${cx}" cy="${cy}" r="33" fill="#8A5A3B"/>
        <ellipse cx="${cx}" cy="${cy + 13}" rx="22" ry="15" fill="#E3C29B"/>
        <circle cx="${cx - 12}" cy="${cy - 6}" r="4.5" fill="${INK}"/><circle cx="${cx + 12}" cy="${cy - 6}" r="4.5" fill="${INK}"/>
        <ellipse cx="${cx}" cy="${cy + 6}" rx="6.5" ry="4.5" fill="${INK}"/>
        <path d="M${cx - 8} ${cy + 14} l-20 -3 M${cx - 8} ${cy + 18} l-20 3 M${cx + 8} ${cy + 14} l20 -3 M${cx + 8} ${cy + 18} l20 3" stroke="${INK}" stroke-width="1.4" stroke-linecap="round"/>
        <rect x="${cx - 30}" y="${cy + 28}" width="60" height="13" rx="6.5" fill="${scarf}"/>`;
      return otter(66, 84, "#F2B630") + otter(136, 94, "#5F7F2E");
    },

    mole: () => `
      <ellipse cx="100" cy="124" rx="58" ry="52" fill="#5B5470"/>
      <path d="M64 78 Q68 40 100 40 Q132 40 136 78Z" fill="#F2B630"/>
      <rect x="66" y="64" width="68" height="10" fill="#B84A6A"/>
      <ellipse cx="100" cy="78" rx="56" ry="10" fill="#F2B630"/>
      <path d="M78 110 q7 -6 14 0 M108 110 q7 -6 14 0" stroke="#F3EEF7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="74" cy="126" r="6" fill="#E9A6B9" opacity=".7"/><circle cx="126" cy="126" r="6" fill="#E9A6B9" opacity=".7"/>
      <ellipse cx="100" cy="128" rx="13" ry="9.5" fill="#E9A6B9"/>
      <path d="M92 142 Q100 149 108 142" stroke="#F3EEF7" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M150 134 L178 180 L160 140Z" fill="#E8873A"/>
      <path d="M150 134 l-6 -16 M152 134 l2 -18 M154 136 l10 -12" stroke="#5F7F2E" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="56" cy="158" rx="17" ry="12" fill="#E9A6B9"/>
      <ellipse cx="148" cy="146" rx="15" ry="11" fill="#E9A6B9"/>`,

    amara: () => `
      <path d="M150 18 L174 42 L150 66 L126 42Z" fill="#B84A6A"/>
      <path d="M150 18 V66 M126 42 H174" stroke="#fff" stroke-width="2"/>
      <path d="M150 66 q-8 12 0 20 q8 8 -2 18" stroke="#B84A6A" stroke-width="2" fill="none"/>
      <path d="M150 104 Q154 128 156 150" stroke="${INK}" stroke-width="1.5" fill="none"/>
      <circle cx="66" cy="66" r="24" fill="#2B1D16"/><circle cx="134" cy="66" r="24" fill="#2B1D16"/>
      <circle cx="100" cy="92" r="44" fill="#2B1D16"/>
      <path d="M48 200 Q52 148 100 140 Q148 148 152 200Z" fill="#F2B630"/>
      <path d="M82 142 L100 162 L118 142" fill="#E0A21F"/>
      <circle cx="100" cy="180" r="4" fill="#fff"/><circle cx="100" cy="194" r="4" fill="#fff"/>
      <circle cx="100" cy="104" r="36" fill="#8D5A3B"/>
      <path d="M66 90 Q100 58 134 90 Q120 74 100 74 Q80 74 66 90Z" fill="#2B1D16"/>
      <circle cx="87" cy="104" r="4.5" fill="${INK}"/><circle cx="113" cy="104" r="4.5" fill="${INK}"/>
      <circle cx="80" cy="118" r="6" fill="#C9705A" opacity=".6"/><circle cx="120" cy="118" r="6" fill="#C9705A" opacity=".6"/>
      <path d="M89 122 Q100 132 111 122" stroke="${INK}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="156" cy="152" r="9" fill="#8D5A3B"/>`
  };

  const character = (id, bg = "leaf") => `<svg viewBox="0 0 200 200" role="img" aria-hidden="true" class="art-char">
    <circle cx="100" cy="100" r="98" fill="${BG[bg] || bg}"/>${(CHAR[id] || CHAR.wren)()}</svg>`;

  /* ---------- people (fictional hosts and authors) ---------- */
  function person(p = {}) {
    const skin = p.skin || "#C68B67", hair = p.hair || "#3B2A20", top = p.top || "#5F7F2E";
    const back = {
      long: `<path d="M34 54 Q34 22 60 22 Q86 22 86 54 L90 96 L30 96Z" fill="${hair}"/>`,
      curly: [[40, 40], [50, 26], [66, 22], [80, 32], [84, 48], [36, 56], [86, 60]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="${hair}"/>`).join(""),
      bun: `<circle cx="60" cy="20" r="11" fill="${hair}"/>`
    }[p.style] || "";
    const front = {
      short: `<path d="M38 48 Q38 26 60 26 Q82 26 82 48 Q72 36 60 38 Q46 38 38 48Z" fill="${hair}"/>`,
      long: `<path d="M38 50 Q40 28 60 28 Q80 28 82 50 Q70 36 52 40 Q44 42 38 50Z" fill="${hair}"/>`,
      bun: `<path d="M38 50 Q38 28 60 28 Q82 28 82 50 Q74 38 60 38 Q46 38 38 50Z" fill="${hair}"/>`,
      curly: "",
      bald: ""
    }[p.style || "short"];
    const glasses = p.glasses ? `<circle cx="51" cy="52" r="7" fill="none" stroke="${INK}" stroke-width="2"/>
      <circle cx="69" cy="52" r="7" fill="none" stroke="${INK}" stroke-width="2"/><path d="M58 52h4" stroke="${INK}" stroke-width="2"/>` : "";
    return `<svg viewBox="0 0 120 120" role="img" aria-hidden="true" class="art-person">
      <circle cx="60" cy="60" r="60" fill="${BG[p.bg] || BG.sky}"/>
      ${back}
      <path d="M16 120 Q20 84 60 80 Q100 84 104 120Z" fill="${top}"/>
      <rect x="52" y="66" width="16" height="16" rx="6" fill="${skin}"/>
      <circle cx="60" cy="52" r="22" fill="${skin}"/>
      ${front}
      <circle cx="51" cy="53" r="2.4" fill="${INK}"/><circle cx="69" cy="53" r="2.4" fill="${INK}"/>
      <path d="M53 63 Q60 68 67 63" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/>
      ${glasses}
    </svg>`;
  }

  /* ---------- book covers (viewBox 0 0 200 300) ---------- */
  function wrap(text, max) {
    const lines = [];
    let line = "";
    String(text).split(/\s+/).forEach(w => {
      if ((line + " " + w).trim().length > max && line) { lines.push(line); line = w; }
      else line = (line + " " + w).trim();
    });
    if (line) lines.push(line);
    return lines;
  }
  const textLines = (lines, x, y, size, fill, anchor = "middle", family = SERIF, lh = 1.12) =>
    `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" fill="${fill}" text-anchor="${anchor}">${
      lines.map((l, i) => `<tspan x="${x}" dy="${i ? size * lh : 0}">${esc(l)}</tspan>`).join("")}</text>`;

  const MOTIF = {
    willow: c => [30, 60, 90, 120, 150, 175].map((x, i) =>
      `<path d="M${x} 0 q${6 - i * 2} 70 ${4 - i} ${110 + (i % 3) * 22}" stroke="${c}" stroke-width="2" fill="none" opacity=".55"/>`).join(""),
    moon: c => `<circle cx="140" cy="80" r="34" fill="${c}" opacity=".85"/>`,
    mill: c => `<path d="M40 190 V120 L80 96 L120 120 V190Z" fill="none" stroke="${c}" stroke-width="3"/>
      <circle cx="140" cy="150" r="30" fill="none" stroke="${c}" stroke-width="3"/>
      ${[0, 45, 90, 135].map(a => `<path d="M140 150 l${(30 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(30 * Math.sin(a * Math.PI / 180)).toFixed(1)} M140 150 l${(-30 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(-30 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="${c}" stroke-width="2"/>`).join("")}
      <path d="M0 200 Q50 186 100 200 T200 200" stroke="${c}" stroke-width="3" fill="none"/>`,
    lanterns: c => [[50, 70], [100, 50], [150, 80], [75, 120], [130, 130]].map(([x, y]) =>
      `<path d="M${x} 0 V${y - 14}" stroke="${c}" stroke-width="1.5" opacity=".6"/><ellipse cx="${x}" cy="${y}" rx="13" ry="16" fill="${c}"/>`).join(""),
    clock: c => `<circle cx="100" cy="120" r="56" fill="none" stroke="${c}" stroke-width="4"/>
      <path d="M100 120 V82 M100 120 L128 134" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
      <path d="M0 214 Q50 196 100 214 T200 214" stroke="${c}" stroke-width="3" fill="none"/>`,
    plate: c => `<circle cx="100" cy="128" r="58" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="100" cy="128" r="40" fill="none" stroke="${c}" stroke-width="1.5"/>
      <circle cx="88" cy="120" r="10" fill="#E8873A"/><circle cx="110" cy="132" r="9" fill="#5F7F2E"/><circle cx="104" cy="112" r="7" fill="#B84A6A"/>
      <path d="M28 82 v70 M22 82 v24 M34 82 v24 M172 82 q12 20 0 40 v30" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    bowl: c => `<path d="M44 120 h112 q-6 60 -56 60 q-50 0 -56 -60Z" fill="${c}"/>
      <path d="M80 104 q6 -12 0 -24 M100 104 q6 -12 0 -24 M120 104 q6 -12 0 -24" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`,
    hanger: c => `<path d="M100 70 q0 -18 14 -18 q12 0 12 12 q0 10 -26 22 L40 130 H160Z" fill="none" stroke="${c}" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M62 130 L50 220 H150 L138 130" fill="${c}" opacity=".85"/>`,
    stitch: c => `<path d="M30 180 Q100 60 170 180" stroke="${c}" stroke-width="3" fill="none" stroke-dasharray="8 7"/>
      <circle cx="100" cy="120" r="20" fill="${c}"/><path d="M92 112 l16 16 M108 112 l-16 16" stroke="#fff" stroke-width="3"/>`,
    star: c => `<path d="M100 70 l14 30 32 4 -24 22 7 32 -29 -16 -29 16 7 -32 -24 -22 32 -4Z" fill="${c}"/>`
  };

  function cover(b) {
    const bg = b.bg || "#A9C77A", ink = b.ink || INK, accent = b.accent || "#fff";
    const lower = b.kind === "novel" || b.kind === "fashion";
    const lines = wrap(b.title, lower ? 13 : 15);
    const size = lines.length > 2 ? 18 : 22;
    let title, body = "";
    if (lower) {
      // Motif fills the top; the title sits on a solid band at the bottom.
      const y = 300 - 30 - (lines.length - 1) * size * 1.12;
      body = (b.art && MOTIF[b.art] ? MOTIF[b.art](accent) : "") +
        `<rect y="${y - size - 14}" width="200" height="${300 - y + size + 14}" fill="${bg}"/>`;
      title = textLines(lines, 100, y, size, ink);
    } else {
      // Title at the top; the art circle sits below it, however many lines it takes.
      const bottom = 40 + (lines.length - 1) * size * 1.12;
      const r = lines.length > 2 ? 56 : 64;
      const cy = Math.max(150, bottom + 14 + r);
      if (b.art && b.art.startsWith("char:")) {
        const id = b.art.slice(5), d = r * 2;
        body = `<circle cx="100" cy="${cy}" r="${r}" fill="${accent}" opacity=".9"/>
          <svg x="${100 - r}" y="${cy - r}" width="${d}" height="${d}" viewBox="0 0 200 200">${(CHAR[id] || CHAR.wren)()}</svg>`;
      } else if (b.art && MOTIF[b.art]) {
        body = `<g transform="translate(0 ${Math.max(0, bottom - 64)})">${MOTIF[b.art](accent)}</g>`;
      }
      title = textLines(lines, 100, 40, size, ink);
    }
    const author = `<text x="100" y="${lower ? 30 : 284}" font-family="${SANS}" font-size="11" font-weight="600" fill="${ink}" text-anchor="middle" letter-spacing=".5">${esc(b.author)}</text>`;
    const board = b.format === "Board book";
    const audio = b.format === "Audiobook";
    const phones = audio ? `
      <path d="M40 300 V258 a60 60 0 0 1 120 0 V300" fill="none" stroke="${INK}" stroke-width="7" opacity=".85"/>
      <rect x="28" y="258" width="22" height="38" rx="8" fill="${INK}"/><rect x="150" y="258" width="22" height="38" rx="8" fill="${INK}"/>` : "";
    const leaf = `<ellipse cx="182" cy="${lower ? 24 : 282}" rx="4" ry="9" transform="rotate(28 182 ${lower ? 24 : 282})" fill="${ink}" opacity=".55"/>`;
    return `<svg viewBox="0 0 200 300" role="img" aria-label="${esc(b.title)} cover" class="art-cover${board ? " is-board" : ""}">
      <rect width="200" height="300" fill="${bg}"/>
      ${body}${title}${audio && !lower ? "" : author}${audio ? "" : leaf}${phones}
      <rect width="10" height="300" fill="#000" opacity=".08"/>
    </svg>`;
  }

  /* ---------- video thumbnails (viewBox 0 0 320 180) ---------- */
  function thumb(v) {
    const bg = BG[v.bg] || v.bg || BG.leaf;
    const art = v.art && v.art.startsWith("char:")
      ? `<svg x="170" y="18" width="150" height="150" viewBox="0 0 200 200">${(CHAR[v.art.slice(5)] || CHAR.wren)()}</svg>`
      : v.art && MOTIF[v.art] ? `<g transform="translate(150 -30) scale(.9)">${MOTIF[v.art]("#5F7F2E")}</g>` : "";
    return `<svg viewBox="0 0 320 180" role="img" aria-hidden="true" class="art-thumb">
      <rect width="320" height="180" fill="${bg}"/>${art}
      ${textLines(wrap(v.title, 13), 20, 44, 19, INK, "start")}
      <circle cx="44" cy="144" r="18" fill="${INK}" opacity=".9"/><path d="M38 134 L54 144 L38 154Z" fill="#fff"/>
    </svg>`;
  }

  /* ---------- placeholder partner logos (fictional organisations) ---------- */
  const MARK = {
    arch: `<path d="M8 56 V34 a24 24 0 0 1 48 0 V56" fill="none" stroke="currentColor" stroke-width="5"/><path d="M20 56 V36 a12 12 0 0 1 24 0 V56" fill="none" stroke="currentColor" stroke-width="5"/>`,
    reel: `<circle cx="32" cy="34" r="24" fill="none" stroke="currentColor" stroke-width="5"/>${[0, 72, 144, 216, 288].map(a =>
      `<circle cx="${(32 + 12 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(34 + 12 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="4.5" fill="currentColor"/>`).join("")}`,
    school: `<path d="M6 30 L32 10 L58 30" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><rect x="14" y="30" width="36" height="26" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="40" width="10" height="16" fill="currentColor"/>`,
    book: `<path d="M32 18 C24 12 12 12 4 16 V54 C12 50 24 50 32 56 C40 50 52 50 60 54 V16 C52 12 40 12 32 18Z M32 18 V56" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round"/>`,
    star: `<path d="M32 6 l7 17 18 2 -14 12 4 18 -15 -9 -15 9 4 -18 -14 -12 18 -2Z" fill="currentColor"/>`,
    wave: `<path d="M4 26 q7 -10 14 0 t14 0 t14 0 t14 0 M4 42 q7 -10 14 0 t14 0 t14 0 t14 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>`,
    bear: `<circle cx="16" cy="16" r="9" fill="currentColor"/><circle cx="48" cy="16" r="9" fill="currentColor"/><circle cx="32" cy="36" r="22" fill="currentColor"/><circle cx="25" cy="32" r="3" fill="var(--paper)"/><circle cx="39" cy="32" r="3" fill="var(--paper)"/><ellipse cx="32" cy="44" rx="7" ry="5" fill="var(--paper)"/>`,
    knot: `<circle cx="22" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="42" cy="24" r="14" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="32" cy="42" r="14" fill="none" stroke="currentColor" stroke-width="5"/>`,
    globe: `<circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="5"/><path d="M8 32 H56 M32 8 C20 20 20 44 32 56 C44 44 44 20 32 8" fill="none" stroke="currentColor" stroke-width="3.5"/>`,
    leaf: `<path d="M10 54 C10 24 30 8 56 8 C56 36 40 54 10 54Z M10 54 L40 24" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>`
  };
  function logo(p) {
    const lines = wrap(p.name, 17);
    const y = lines.length > 1 ? 29 : 40;
    return `<svg viewBox="0 0 240 64" role="img" aria-label="${esc(p.name)} placeholder logo" class="art-logo">
      <g transform="translate(4 2)">${MARK[p.mark] || MARK.leaf}</g>
      ${textLines(lines, 78, y, 16, "currentColor", "start", p.serif ? SERIF : SANS, 1.15)}
    </svg>`;
  }

  /* ---------- scenes ---------- */
  const SCENE = {
    box: () => `<svg viewBox="0 0 320 240" role="img" aria-label="An open Story Club box with three books" class="art-scene">
      <ellipse cx="160" cy="222" rx="130" ry="10" fill="#000" opacity=".08"/>
      <rect x="92" y="34" width="34" height="120" rx="3" fill="#A9C77A" transform="rotate(-8 109 94)"/>
      <rect x="132" y="22" width="40" height="132" rx="3" fill="#F2B630"/>
      <rect x="178" y="40" width="34" height="116" rx="3" fill="#E9A6B9" transform="rotate(7 195 98)"/>
      <path d="M140 40 v100 M186 54 v90" stroke="${INK}" stroke-width="1.5" opacity=".25"/>
      <path d="M60 96 L40 70 L120 70 L140 96Z" fill="#B88752"/>
      <path d="M260 96 L280 70 L200 70 L180 96Z" fill="#B88752"/>
      <rect x="60" y="96" width="200" height="120" fill="#C99A63"/>
      <path d="M60 96 H260" stroke="#9E7341" stroke-width="3"/>
      <rect x="118" y="132" width="84" height="44" rx="22" fill="#FBFBF7"/>
      <text x="160" y="160" font-family="${SERIF}" font-size="15" text-anchor="middle" fill="#3E5A1E">Story Club</text>
    </svg>`,

    librarycard: () => `<svg viewBox="0 0 340 214" role="img" aria-label="A library card featuring Wren Willowby" class="art-scene art-card">
      <rect x="2" y="2" width="336" height="210" rx="16" fill="#D6EAF0" stroke="${INK}" stroke-width="2"/>
      <rect x="2" y="2" width="336" height="44" rx="16" fill="#3E5A1E"/><rect x="2" y="30" width="336" height="16" fill="#3E5A1E"/>
      <text x="22" y="31" font-family="${SERIF}" font-size="17" fill="#FBFBF7">Riverbend Public Library</text>
      <text x="22" y="78" font-family="${SANS}" font-size="12" fill="${INK}">Library card</text>
      <text x="22" y="100" font-family="${SERIF}" font-size="19" fill="${INK}">Willow Tree edition</text>
      <svg x="206" y="60" width="118" height="118" viewBox="0 0 200 200"><circle cx="100" cy="100" r="98" fill="#FBE3A6"/>${CHAR.wren()}</svg>
      ${Array.from({ length: 34 }, (_, i) => `<rect x="${22 + i * 5}" y="150" width="${i % 3 ? 2 : 3.5}" height="34" fill="${INK}"/>`).join("")}
      <text x="22" y="200" font-family="${SANS}" font-size="10" fill="${INK}">2 9786 0001 4521</text>
    </svg>`,

    globe: () => `<svg viewBox="0 0 320 240" role="img" aria-label="A globe resting on an open book" class="art-scene">
      <circle cx="160" cy="104" r="78" fill="#BFDCE5"/>
      <path d="M118 62 q22 -10 34 6 q10 14 -6 24 q-16 8 -10 26 q4 14 -14 14 q-18 -4 -22 -26 q-2 -26 18 -44Z" fill="#A9C77A"/>
      <path d="M182 120 q18 -8 30 6 q8 16 -8 30 q-16 10 -28 -4 q-8 -16 6 -32Z" fill="#A9C77A"/>
      <path d="M176 48 q16 2 22 16 q-12 6 -24 -2Z" fill="#A9C77A"/>
      <circle cx="160" cy="104" r="78" fill="none" stroke="${INK}" stroke-width="2"/>
      <path d="M160 228 C130 212 80 210 40 218 L40 192 C80 184 130 186 160 202 Z" fill="#F2B630" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M160 228 C190 212 240 210 280 218 L280 192 C240 184 190 186 160 202 Z" fill="#F2B630" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
      <rect x="150" y="182" width="20" height="16" fill="${INK}" opacity=".8"/>
      <text x="96" y="208" font-family="${SERIF}" font-size="13" fill="${INK}" text-anchor="middle">hej</text>
      <text x="224" y="208" font-family="${SERIF}" font-size="13" fill="${INK}" text-anchor="middle">hello</text>
    </svg>`,

    listen: () => `<svg viewBox="0 0 320 240" role="img" aria-label="Headphones resting on a stack of books" class="art-scene">
      <rect x="70" y="176" width="180" height="26" rx="3" fill="#3E5A1E"/>
      <rect x="84" y="150" width="156" height="26" rx="3" fill="#F2B630"/>
      <rect x="62" y="124" width="170" height="26" rx="3" fill="#E9A6B9"/>
      <path d="M100 124 V96 a60 60 0 0 1 120 0 V124" fill="none" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
      <rect x="84" y="94" width="30" height="44" rx="12" fill="${INK}"/><rect x="206" y="94" width="30" height="44" rx="12" fill="${INK}"/>
      <path d="M250 70 q12 12 0 24 M262 60 q22 22 0 44" stroke="#5F7F2E" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`,

    studio: () => `<svg viewBox="0 0 320 240" role="img" aria-label="A film clapperboard beside Juniper and Moss" class="art-scene">
      <rect x="30" y="96" width="140" height="100" rx="6" fill="${INK}"/>
      <path d="M30 72 L166 50 L170 74 L34 96Z" fill="${INK}"/>
      ${[0, 1, 2, 3].map(i => `<path d="M${52 + i * 30} 68 L${70 + i * 30} 64 L${58 + i * 30} 90 L${40 + i * 30} 93Z" fill="#FBFBF7"/>`).join("")}
      <text x="46" y="134" font-family="${SANS}" font-size="13" fill="#FBFBF7">Juniper and Moss</text>
      <text x="46" y="158" font-family="${SANS}" font-size="12" fill="#A9B3A6">Series one, scene 4</text>
      <svg x="160" y="50" width="170" height="170" viewBox="0 0 200 200"><circle cx="100" cy="100" r="98" fill="#D6EAF0"/>${CHAR.otters()}</svg>
    </svg>`
  };

  return {
    character, person, cover, thumb, logo,
    scene: key => (SCENE[key] ? SCENE[key]() : ""),
    has: key => !!SCENE[key]
  };
})();
