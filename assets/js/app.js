/* Willow Tree demo site: renders pages from window.SITE (content.js). */
(() => {
  "use strict";
  const SITE = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- helpers ---------- */
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isTbd = v => typeof v === "string" && /^TBD/i.test(v.trim());
  const txt = v => isTbd(v) ? `<span class="tbd">${esc(v)}</span>` : esc(v);
  const link = (href, inner, cls = "") =>
    href && !isTbd(href) ? `<a class="${cls}" href="${esc(href)}">${inner}</a>` : inner;

  /* ---------- components ---------- */
  const C = {
    hero: s => `
      <div class="hero">
        <div class="hero-copy">
          <h1>${txt(s.title)}</h1>
          ${s.text ? `<p class="lede">${txt(s.text)}</p>` : ""}
          ${actions(s.actions)}
        </div>
        <div class="hero-art" aria-hidden="true">${willow()}</div>
      </div>`,

    text: s => `<p class="lede">${txt(s.text)}</p>`,

    features: s => `
      <div class="features">
        ${(s.items || []).map(i => `
          <article class="feature">
            <h3>${link(i.href, txt(i.title))}</h3>
            <p>${txt(i.text)}</p>
          </article>`).join("")}
      </div>`,

    characters: s => `
      <ul class="shelf">
        ${(s.items || []).map(i => `
          <li class="spine spine-${esc(i.color || "leaf")}">
            <span class="spine-title">${txt(i.name)}</span>
            <span class="spine-blurb">${txt(i.blurb)}</span>
          </li>`).join("")}
      </ul>`,

    readAlong: s => {
      let offset = 0;
      const words = s.story.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) { offset += part.length; return part; }
        const span = `<span class="w" data-start="${offset}">${esc(part)}</span>`;
        offset += part.length;
        return span;
      }).join("");
      return `
        <div class="readalong" data-story="${esc(s.story)}">
          ${s.intro ? `<p class="muted">${txt(s.intro)}</p>` : ""}
          <p class="story">${words}</p>
          <div class="ra-controls">
            <button class="btn btn-primary" data-ra="play">Play story</button>
            <button class="btn" data-ra="stop" disabled>Stop</button>
            <label class="ra-rate">Speed
              <select data-ra="rate">
                <option value="0.8">Slow</option>
                <option value="0.95" selected>Normal</option>
                <option value="1.15">Fast</option>
              </select>
            </label>
          </div>
          <p class="ra-status muted" role="status"></p>
        </div>`;
    },

    media: s => {
      const src = s.src && !isTbd(s.src) ? s.src : "";
      const body = !src
        ? `<div class="frame-empty"><span>Media slot</span></div>`
        : /\.(mp3|wav|m4a|ogg)$/i.test(src)
          ? `<audio controls src="${esc(src)}"></audio>`
          : /youtube\.com|youtu\.be/.test(src)
            ? `<iframe src="${esc(src)}" title="${esc(s.heading || "Video")}" allowfullscreen></iframe>`
            : `<video controls src="${esc(src)}"></video>`;
      return `<figure class="media"><div class="frame">${body}</div>
        ${s.caption ? `<figcaption>${txt(s.caption)}</figcaption>` : ""}</figure>`;
    },

    tiers: s => `
      <div class="tiers">
        ${(s.items || []).map(i => `
          <article class="tier${i.featured ? " tier-featured" : ""}">
            <h3>${txt(i.name)}</h3>
            <p class="price">${txt(i.price)} <span>${txt(i.period)}</span></p>
            <ul>${(i.points || []).map(p => `<li>${txt(p)}</li>`).join("")}</ul>
            <button class="btn${i.featured ? " btn-primary" : ""}" data-demo-cta>${txt(s.cta || "Choose")}</button>
          </article>`).join("")}
      </div>`,

    stats: s => `
      <dl class="stats">
        ${(s.items || []).map(i => `
          <div class="stat"><dt>${txt(i.label)}</dt><dd>${txt(i.value)}</dd></div>`).join("")}
      </dl>
      ${s.source ? `<p class="source">${txt(s.source)}</p>` : ""}`,

    steps: s => `
      <ol class="steps">
        ${(s.items || []).map(i => `
          <li><h3>${txt(i.title)}</h3><p>${txt(i.text)}</p></li>`).join("")}
      </ol>`,

    placeholder: s => `<div class="frame-empty frame-text"><span>${txt(s.text || "TBD")}</span></div>`
  };

  function actions(list) {
    if (!list || !list.length) return "";
    return `<div class="actions">${list.map(a =>
      `<a class="btn${a.primary ? " btn-primary" : ""}" href="${esc(a.href)}">${esc(a.label)}</a>`).join("")}</div>`;
  }

  /* Hanging willow strands over an open book. Generated so it scales cleanly. */
  function willow() {
    const P0 = [20, 70], P1 = [200, -20], P2 = [380, 60];
    const q = t => [0, 1].map(k => (1 - t) ** 2 * P0[k] + 2 * (1 - t) * t * P1[k] + t ** 2 * P2[k]);
    let strands = "";
    const n = 15;
    for (let i = 0; i < n; i++) {
      const t = 0.04 + (i / (n - 1)) * 0.92;
      const [x, y] = q(t);
      const len = 150 + Math.sin(i * 1.7) * 40 + (1 - Math.abs(t - 0.5) * 2) * 60;
      const bend = (t - 0.5) * 30;
      let leaves = "";
      for (let j = 1; j <= 7; j++) {
        const f = j / 8;
        const lx = x + bend * f * f, ly = y + len * f;
        const side = j % 2 ? 1 : -1;
        leaves += `<ellipse cx="${(lx + side * 5).toFixed(1)}" cy="${ly.toFixed(1)}" rx="3.2" ry="9"
          transform="rotate(${side * 28} ${(lx + side * 5).toFixed(1)} ${ly.toFixed(1)})"/>`;
      }
      strands += `<g class="strand" style="--d:${(i * 0.37) % 3}s;transform-origin:${x.toFixed(1)}px ${y.toFixed(1)}px">
        <path d="M${x.toFixed(1)} ${y.toFixed(1)} q${(bend * 0.3).toFixed(1)} ${(len / 2).toFixed(1)} ${bend.toFixed(1)} ${len.toFixed(1)}"/>
        <g class="leaves">${leaves}</g></g>`;
    }
    return `<svg viewBox="0 0 400 330" role="img">
      <path class="bough" d="M${P0} Q${P1} ${P2}"/>
      ${strands}
      <g class="book">
        <path d="M200 318 C170 302 120 300 80 308 L80 284 C120 276 170 278 200 294 Z"/>
        <path d="M200 318 C230 302 280 300 320 308 L320 284 C280 276 230 278 200 294 Z"/>
      </g>
    </svg>`;
  }

  /* ---------- rendering ---------- */
  function renderSection(s, idx) {
    const draw = C[s.type];
    const body = draw ? draw(s) : `<div class="frame-empty"><span>Unknown section type "${esc(s.type)}"</span></div>`;
    const draft = s.draft ? " is-draft" : "";
    const note = s.note ? `
      <aside class="note" aria-label="Presenter note">
        <strong>${esc(s.note.pillar)}</strong>
        <span>${txt(s.note.text)}</span>
      </aside>` : "";
    return `<section class="block block-${esc(s.type)}${draft}" id="${esc(s.id || `s${idx}`)}">
      ${s.heading ? `<h2>${txt(s.heading)}</h2>` : ""}${body}${note}</section>`;
  }

  const pageIds = SITE.nav.map(n => n.id);
  const currentId = () => {
    const id = location.hash.replace(/^#\/?/, "") || "home";
    return SITE.pages[id] ? id : "home";
  };

  function render() {
    const id = currentId();
    const page = SITE.pages[id];
    stopReading();
    const main = $("#main");
    main.innerHTML = page.sections.map(renderSection).join("");
    document.title = `${page.title} · ${SITE.brand.name} demo`;
    $$(".nav a").forEach(a => a.setAttribute("aria-current", a.dataset.id === id ? "page" : "false"));
    $("#pager").textContent = `${pageIds.indexOf(id) + 1} / ${pageIds.length}`;
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    wireReadAlong(main);
    $$("[data-demo-cta]", main).forEach(b => b.addEventListener("click", () => toast("Demo only: checkout isn't connected.")));
  }

  function buildChrome() {
    $("#brand").innerHTML = `<a href="#/home"><span class="brand-name">${esc(SITE.brand.name)}</span>
      <span class="brand-sub">${esc(SITE.brand.sub)}</span></a>`;
    $("#nav").innerHTML = SITE.nav.map(n => `<a href="#/${esc(n.id)}" data-id="${esc(n.id)}">${esc(n.label)}</a>`).join("");
    $("#footer-text").textContent = SITE.brand.footer;
  }

  /* ---------- presenter mode ---------- */
  function setPresenting(on) {
    document.body.classList.toggle("presenting", on);
    $("#present-toggle").setAttribute("aria-pressed", String(on));
    $("#present-toggle").textContent = on ? "Hide notes" : "Presenter notes";
  }

  function go(delta) {
    const i = pageIds.indexOf(currentId());
    const next = pageIds[(i + delta + pageIds.length) % pageIds.length];
    location.hash = `#/${next}`;
  }

  document.addEventListener("keydown", e => {
    if (e.target.closest("input, select, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "p" || e.key === "P") setPresenting(!document.body.classList.contains("presenting"));
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  /* ---------- read-along (Web Speech API, with timed fallback) ---------- */
  let ra = null; // { root, timer }

  function stopReading() {
    if (!ra) return;
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    clearInterval(ra.timer);
    $$(".w", ra.root).forEach(w => w.classList.remove("on", "done"));
    $("[data-ra=play]", ra.root).disabled = false;
    $("[data-ra=stop]", ra.root).disabled = true;
    ra = null;
  }

  function wireReadAlong(scope) {
    $$(".readalong", scope).forEach(root => {
      const words = $$(".w", root);
      const status = $(".ra-status", root);
      const highlight = idx => words.forEach((w, i) => {
        w.classList.toggle("on", i === idx);
        w.classList.toggle("done", i < idx);
      });
      const finish = () => { stopReading(); status.textContent = "Finished. Press play to hear it again."; };

      $("[data-ra=stop]", root).addEventListener("click", () => { stopReading(); status.textContent = "Stopped."; });
      $("[data-ra=play]", root).addEventListener("click", () => {
        stopReading();
        ra = { root, timer: null };
        $("[data-ra=play]", root).disabled = true;
        $("[data-ra=stop]", root).disabled = false;
        const rate = parseFloat($("[data-ra=rate]", root).value);
        status.textContent = "Reading…";

        if ("speechSynthesis" in window) {
          const u = new SpeechSynthesisUtterance(root.dataset.story);
          u.rate = rate;
          const voice = speechSynthesis.getVoices().find(v => /^en(-|_)/i.test(v.lang));
          if (voice) u.voice = voice;
          let gotBoundary = false;
          u.onboundary = e => {
            if (e.name && e.name !== "word") return;
            gotBoundary = true;
            let idx = 0;
            words.forEach((w, i) => { if (+w.dataset.start <= e.charIndex) idx = i; });
            highlight(idx);
          };
          u.onstart = () => {
            // Some voices never fire boundary events; fall back to timed highlighting.
            setTimeout(() => { if (ra && !gotBoundary) timed(); }, 700);
          };
          u.onend = finish;
          u.onerror = () => { if (ra) timed(); };
          speechSynthesis.speak(u);
        } else {
          status.textContent = "Speech isn't available in this browser, showing timed highlighting.";
          timed();
        }

        function timed() {
          let i = 0;
          clearInterval(ra.timer);
          ra.timer = setInterval(() => {
            if (i >= words.length) { clearInterval(ra.timer); if (!("speechSynthesis" in window) || !speechSynthesis.speaking) finish(); return; }
            highlight(i++);
          }, 330 / rate);
        }
      });
    });
  }

  /* ---------- toast ---------- */
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove("show"), 2600);
  }

  /* ---------- boot ---------- */
  buildChrome();
  $("#present-toggle").addEventListener("click", () => setPresenting(!document.body.classList.contains("presenting")));
  window.addEventListener("hashchange", render);
  if ("speechSynthesis" in window) speechSynthesis.getVoices(); // warm up voice list
  render();
})();
