/* Willow Tree demo site: renders pages from window.SITE (content.js), art from window.ART (art.js). */
(() => {
  "use strict";
  const SITE = window.SITE;
  const ART = window.ART;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- helpers ---------- */
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isTbd = v => typeof v === "string" && /^TBD/i.test(v.trim());
  const txt = v => isTbd(v) ? `<span class="tbd">${esc(v)}</span>` : esc(v);
  const link = (href, inner, cls = "") =>
    href && !isTbd(href) ? `<a class="${cls}" href="${esc(href)}">${inner}</a>` : inner;
  const money = n => `$${Number(n).toFixed(2)}`;
  const CATALOG = SITE.catalog || [];
  const BOOK = Object.fromEntries(CATALOG.map(b => [b.id, b]));
  const CHARS = SITE.characters || [];
  const PARTNERS = SITE.partners || [];
  const pick = (all, ids, key = "id") => ids === "all" || !ids ? all : ids.map(id => all.find(x => x[key] === id)).filter(Boolean);

  /* A photo from SITE.photos, with an offline fallback handled in wireImages(). */
  function photo(key, cls = "") {
    const p = (SITE.photos || {})[key];
    if (!p) return `<div class="img-fallback ${cls}"><span>${txt(`TBD: photo "${key}"`)}</span></div>`;
    const pos = p.position ? ` style="object-position:${esc(p.position)}"` : "";
    return `<img class="${cls}" src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"${pos}
      title="Photo: ${esc(p.credit)}, ${esc(p.license)}">`;
  }
  /* Art key from content: "char:wren" or a scene name ("box", "librarycard", ...). */
  function art(key) {
    if (!key) return "";
    if (key.startsWith("char:")) {
      const c = CHARS.find(x => x.id === key.slice(5));
      return ART.character(key.slice(5), c ? c.color : "leaf");
    }
    return ART.scene(key);
  }
  const visual = s => s.photo ? photo(s.photo) : art(s.art);

  function actions(list) {
    if (!list || !list.length) return "";
    return `<div class="actions">${list.map(a => a.href
      ? `<a class="btn${a.primary ? " btn-primary" : ""}" href="${esc(a.href)}">${esc(a.label)}</a>`
      : `<button class="btn${a.primary ? " btn-primary" : ""}" data-toast="${esc(a.demo || "Demo only.")}">${esc(a.label)}</button>`).join("")}</div>`;
  }

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

    /* Photo cards; the whole card is the link. */
    cards: s => `
      <div class="cards">
        ${(s.items || []).map(i => `
          <a class="card" href="${esc(i.href || "#")}">
            <div class="card-img">${i.photo ? photo(i.photo) : art(i.art)}</div>
            <h3>${txt(i.title)}</h3>
            <p>${txt(i.text)}</p>
          </a>`).join("")}
      </div>`,

    /* Book spines on a shelf; spines with href are links. */
    characters: s => `
      <ul class="shelf">
        ${(s.items || []).map(i => `
          <li class="spine spine-${esc(i.color || "leaf")}">
            ${i.href ? `<a class="spine-link" href="${esc(i.href)}" aria-label="${esc(i.name)}"></a>` : ""}
            <span class="spine-title">${txt(i.name)}</span>
            <span class="spine-blurb">${txt(i.blurb)}</span>
          </li>`).join("")}
      </ul>`,

    /* Character cards from SITE.characters. compact: round portraits that link to s.href. */
    cast: s => {
      const list = pick(CHARS, s.items);
      if (s.compact) return `
        <ul class="cast-row">
          ${list.map(c => `<li><a href="${esc(s.href || "#/kids/characters")}">
            <span class="cast-art">${ART.character(c.id, c.color)}</span>
            <span class="cast-name">${esc(c.name)}</span>
            ${c.isNew ? `<span class="pill pill-new">New</span>` : ""}
          </a></li>`).join("")}
        </ul>`;
      return `
        <div class="cast">
          ${list.map(c => `
            <article class="char">
              <div class="char-art">${ART.character(c.id, c.color)}</div>
              <div class="char-body">
                <h3>${esc(c.name)} ${c.isNew ? `<span class="pill pill-new">New</span>` : ""}</h3>
                <p class="char-kind">${esc(c.kind)}, ${c.isNew ? `arriving ${c.since}` : `since ${c.since}`}</p>
                <p>${txt(c.blurb)}</p>
                <ul class="tags">${(c.tags || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
                <a class="text-link" href="#/shop/${esc(c.id)}">Shop ${esc(c.name)} books</a>
              </div>
            </article>`).join("")}
        </div>`;
    },

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

    /* Video, audio or YouTube. With no src, a poster photo (or a hatched slot) stands in. */
    media: s => {
      const src = s.src && !isTbd(s.src) ? s.src : "";
      let body;
      if (src) {
        body = /\.(mp3|wav|m4a|ogg)$/i.test(src)
          ? `<audio controls src="${esc(src)}"></audio>`
          : /youtube\.com|youtu\.be/.test(src)
            ? `<iframe src="${esc(src)}" title="${esc(s.heading || "Video")}" allowfullscreen></iframe>`
            : `<video controls src="${esc(src)}"${s.poster ? ` poster="${esc(SITE.photos[s.poster]?.src || "")}"` : ""}></video>`;
      } else if (s.poster) {
        body = `<button class="poster" data-toast="Demo only: the pilot video hasn't been uploaded yet.">
          ${photo(s.poster)}
          <span class="poster-copy">
            <span class="poster-play" aria-hidden="true"></span>
            <span class="poster-title">${txt(s.posterTitle || "")}</span>
            ${s.posterSub ? `<span class="poster-sub">${txt(s.posterSub)}</span>` : ""}
          </span>
        </button>`;
      } else {
        body = `<div class="frame-empty"><span>Media slot</span></div>`;
      }
      return `<figure class="media"><div class="frame">${body}</div>
        ${s.caption ? `<figcaption>${txt(s.caption)}</figcaption>` : ""}</figure>`;
    },

    videos: s => `
      <ul class="videos">
        ${(s.items || []).map(v => {
          const inner = `<span class="video-thumb">${ART.thumb(v)}<span class="video-time">${esc(v.duration)}</span></span>
            <span class="video-title">${esc(v.title)}</span><span class="video-kind">${esc(v.kind)}</span>`;
          return `<li>${v.href
            ? `<a class="video" href="${esc(v.href)}">${inner}</a>`
            : `<button class="video" data-toast="Demo only: episodes play on the Willow Tree Kids channel.">${inner}</button>`}</li>`;
        }).join("")}
      </ul>`,

    /* Photo or art beside text, with optional host, points and actions. */
    spotlight: s => `
      <div class="spotlight${s.reverse ? " is-reverse" : ""}">
        <div class="spot-visual${s.photo ? " is-photo" : ""}">${visual(s)}</div>
        <div class="spot-copy">
          ${s.text ? `<p class="spot-text">${txt(s.text)}</p>` : ""}
          ${s.person ? `<div class="person">${ART.person(s.person.avatar)}<div><strong>${esc(s.person.name)}</strong><span>${esc(s.person.role)}</span></div></div>` : ""}
          ${s.points ? `<ul class="points">${s.points.map(p => `<li>${txt(p)}</li>`).join("")}</ul>` : ""}
          ${actions(s.actions)}
        </div>
      </div>`,

    /* A promotional band. Uses its own title (h2) so it can sit without a section heading. */
    banner: s => `
      <div class="banner${s.photo || s.art ? "" : " is-plain"}">
        <div class="banner-copy">
          <h2>${txt(s.title)}</h2>
          ${s.text ? `<p>${txt(s.text)}</p>` : ""}
          ${actions(s.actions)}
        </div>
        ${s.photo || s.art ? `<div class="banner-visual${s.photo ? " is-photo" : ""}">${visual(s)}</div>` : ""}
      </div>`,

    /* Books from SITE.catalog. filters: genre and character chips. link: covers link there. */
    books: s => {
      const list = s.items === "all" ? CATALOG : pick(CATALOG, s.items);
      const chips = s.filters ? `
        <div class="chips" role="toolbar" aria-label="Filter books">
          <button class="chip" data-filter="all" aria-pressed="true">All books</button>
          ${(SITE.genres || []).map(g => `<button class="chip" data-filter="${esc(g.id)}" aria-pressed="false">${esc(g.label)}</button>`).join("")}
        </div>
        <p class="filter-status muted" role="status"></p>` : "";
      return `${chips}
        <ul class="books">
          ${list.map(b => `
            <li class="book" data-genre="${esc(b.genre)}" data-series="${esc(b.series || "")}">
              ${link(s.link, `<span class="book-cover">${ART.cover(b)}</span>`, "book-cover-link") }
              ${b.badge ? `<span class="pill">${esc(b.badge)}</span>` : ""}
              <h3>${esc(b.title)}</h3>
              <p class="book-meta">${esc(b.author)}<br>${esc(b.format)}, ${esc(b.age)}</p>
              <div class="book-buy">
                <span class="book-price">${money(b.price)}</span>
                <button class="btn btn-small" data-add="${esc(b.id)}">${b.badge === "Pre-order" ? "Pre-order" : "Add to bag"}</button>
              </div>
            </li>`).join("")}
        </ul>`;
    },

    tiers: s => `
      ${s.billing ? `<div class="billing" role="group" aria-label="Billing period">
        <button class="chip" data-billing="monthly" aria-pressed="true">Pay as you go</button>
        <button class="chip" data-billing="annual" aria-pressed="false">Pay yearly, save about 17%</button>
      </div>` : ""}
      <div class="tiers">
        ${(s.items || []).map(i => `
          <article class="tier${i.featured ? " tier-featured" : ""}">
            ${i.badge ? `<span class="pill">${esc(i.badge)}</span>` : ""}
            <h3>${txt(i.name)}</h3>
            ${i.desc ? `<p class="tier-desc">${txt(i.desc)}</p>` : ""}
            <p class="price price-m">${txt(i.price)} <span>${txt(i.period)}</span></p>
            <p class="price price-a">${txt(i.annual || i.price)} <span>${txt(i.annualPeriod || i.period)}</span></p>
            <ul>${(i.points || []).map(p => `<li>${txt(p)}</li>`).join("")}</ul>
            ${i.save ? `<p class="tier-save">${txt(i.save)}</p>` : ""}
            <button class="btn${i.featured ? " btn-primary" : ""}" data-toast="Demo only: checkout isn't connected.">${txt(s.cta || "Choose")}</button>
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

    timeline: s => `
      <ol class="timeline">
        ${(s.items || []).map(i => `<li><span class="year">${esc(i.year)}</span><p>${txt(i.text)}</p></li>`).join("")}
      </ol>`,

    logos: s => `
      <ul class="logos">
        ${pick(PARTNERS, s.items).map(p => `<li>${link(s.href, `${ART.logo(p)}<span class="logo-type">${esc(p.type)}</span>`, "logo-link")}</li>`).join("")}
      </ul>`,

    faq: s => `
      <div class="faq">
        ${(s.items || []).map(i => `<details><summary>${txt(i.q)}</summary><p>${txt(i.a)}</p></details>`).join("")}
      </div>`,

    subnav: s => `
      <nav class="subnav" aria-label="On this page">
        ${(s.items || []).map(i => `<a class="chip" href="${esc(i.href)}">${esc(i.label)}</a>`).join("")}
      </nav>`,

    credits: () => {
      const photos = Object.values(SITE.photos || {});
      return `
        <h3>Made by</h3>
        <p class="team-names">${(SITE.team || []).map(esc).join(", ")}</p>
        <h3>Photos</h3>
        <p class="muted">Hotlinked from Wikimedia Commons. Real people pictured have no connection to this project.</p>
        <ul class="credit-list">
          ${photos.map(p => `<li><strong>${esc(p.alt)}</strong><span>${esc(p.credit)}, ${esc(p.license)}, <a href="${esc(p.page)}" target="_blank" rel="noopener">source</a></span></li>`).join("")}
        </ul>`;
    },

    placeholder: s => `<div class="frame-empty frame-text"><span>${txt(s.text || "TBD")}</span></div>`
  };

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
    const more = s.more ? `<p class="more"><a href="${esc(s.more.href)}">${esc(s.more.label)}</a></p>` : "";
    return `<section class="block block-${esc(s.type)}${draft}" id="${esc(s.id || `s${idx}`)}">
      ${s.heading ? `<h2>${txt(s.heading)}</h2>` : ""}
      ${s.intro && s.type !== "credits" ? `<p class="section-intro">${txt(s.intro)}</p>` : ""}
      ${s.type === "credits" && s.intro ? `<p class="lede">${txt(s.intro)}</p>` : ""}
      ${body}${more}${note}</section>`;
  }

  const pageIds = SITE.nav.map(n => n.id);
  const route = () => {
    const [id, sub] = location.hash.replace(/^#\/?/, "").split("/");
    return SITE.pages[id] ? { id, sub } : { id: "home", sub: "" };
  };
  let rendered = null;

  function render() {
    const { id, sub } = route();
    if (id !== rendered) {
      const page = SITE.pages[id];
      stopReading();
      const main = $("#main");
      main.innerHTML = page.sections.map(renderSection).join("");
      document.title = `${page.title} · ${SITE.brand.name} demo`;
      $$(".nav a").forEach(a => a.setAttribute("aria-current", a.dataset.id === id ? "page" : "false"));
      const n = pageIds.indexOf(id);
      $("#pager").textContent = n >= 0 ? `${n + 1} / ${pageIds.length}` : "";
      main.focus({ preventScroll: true });
      rendered = id;
      wireReadAlong(main);
      wireImages(main);
      if (!sub) window.scrollTo(0, 0);
    }
    else if (!sub) { // same page, bare link: back to the top and clear any filter
      if ($("[data-filter]")) applyFilter("all");
      window.scrollTo(0, 0);
    }
    if (sub) goToSub(sub);
  }

  /* "#/shop/cookbooks" filters the shop; "#/kids/pilot" scrolls to that section. */
  function goToSub(sub) {
    const isFilter = $("[data-filter]") && (sub === "all" || (SITE.genres || []).some(g => g.id === sub) || CHARS.some(c => c.id === sub));
    const target = isFilter ? $(".block-books .chips")?.closest(".block") : document.getElementById(sub);
    if (isFilter) applyFilter(sub);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
  }

  function applyFilter(key) {
    const items = $$(".book[data-genre]", $(".chips")?.closest(".block") || document);
    let shown = 0;
    items.forEach(li => {
      const on = key === "all" || li.dataset.genre === key || li.dataset.series === key;
      li.hidden = !on;
      if (on) shown++;
    });
    $$("[data-filter]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === key)));
    const genre = (SITE.genres || []).find(g => g.id === key);
    const char = CHARS.find(c => c.id === key);
    const status = $(".filter-status");
    if (status) status.textContent = key === "all" ? `${shown} books` : `${shown} ${shown === 1 ? "book" : "books"} in ${genre ? genre.label.toLowerCase() : char ? `the ${char.name} series` : key}`;
  }

  function buildChrome() {
    $("#brand").innerHTML = `<a href="#/home"><span class="brand-name">${esc(SITE.brand.name)}</span>
      <span class="brand-sub">${esc(SITE.brand.sub)}</span></a>`;
    $("#nav").innerHTML = SITE.nav.map(n => `<a href="#/${esc(n.id)}" data-id="${esc(n.id)}">${esc(n.label)}</a>`).join("");
    const team = SITE.team || [];
    const names = team.length > 1 ? `${team.slice(0, -1).join(", ")} and ${team[team.length - 1]}` : team.join("");
    $("#footer-text").innerHTML = `${names ? `<strong class="made-by">Made by ${esc(names)}.</strong> ` : ""}${esc(SITE.brand.footer)} <a href="#/credits">Credits</a>`;
  }

  /* ---------- images: swap in a labelled placeholder if a photo can't load ---------- */
  function wireImages(scope) {
    $$("img", scope).forEach(img => {
      const fail = () => {
        const div = document.createElement("div");
        div.className = `img-fallback ${img.className}`;
        div.innerHTML = `<span>${esc(img.alt)}</span>`;
        img.replaceWith(div);
      };
      if (img.complete && img.naturalWidth === 0 && img.src) fail();
      else img.addEventListener("error", fail, { once: true });
    });
  }

  /* ---------- bag (in memory only) ---------- */
  const bag = new Map();
  const FREE_SHIP = 35;
  function addToBag(id) {
    bag.set(id, (bag.get(id) || 0) + 1);
    updateBag();
    toast(`Added ${BOOK[id].title} to your bag.`);
  }
  function updateBag() {
    const count = [...bag.values()].reduce((a, b) => a + b, 0);
    $("#bag-count").textContent = count;
    $("#bag-toggle").setAttribute("aria-label", `Bag, ${count} ${count === 1 ? "item" : "items"}`);
    const total = [...bag].reduce((sum, [id, q]) => sum + BOOK[id].price * q, 0);
    const list = $("#bag-items");
    list.innerHTML = bag.size ? [...bag].map(([id, q]) => {
      const b = BOOK[id];
      return `<li><span class="bag-cover">${ART.cover(b)}</span>
        <span class="bag-info"><strong>${esc(b.title)}</strong><span>${esc(b.format)}, ${money(b.price)}</span>
          <span class="qty"><button class="btn btn-small" data-qty="-1" data-id="${esc(id)}" aria-label="Remove one">−</button>
          <span>${q}</span>
          <button class="btn btn-small" data-qty="1" data-id="${esc(id)}" aria-label="Add one">+</button></span></span>
        <span class="bag-line">${money(b.price * q)}</span></li>`;
    }).join("") : `<li class="bag-empty">Your bag is empty. <a href="#/shop" data-close>Browse the shop</a> to add a book.</li>`;
    $("#bag-total").textContent = money(total);
    $("#bag-ship").textContent = !bag.size ? "" : total >= FREE_SHIP
      ? "Free US shipping on this order."
      : `Add ${money(FREE_SHIP - total)} more for free US shipping.`;
    $("#bag-checkout").disabled = !bag.size;
  }

  /* ---------- presenter mode ---------- */
  function setPresenting(on) {
    document.body.classList.toggle("presenting", on);
    $("#present-toggle").setAttribute("aria-pressed", String(on));
    $("#present-toggle").textContent = on ? "Hide notes" : "Presenter notes";
  }

  function go(delta) {
    const i = pageIds.indexOf(route().id);
    const next = pageIds[(Math.max(i, 0) + delta + pageIds.length) % pageIds.length];
    location.hash = `#/${next}`;
  }

  document.addEventListener("keydown", e => {
    if (e.target.closest("input, select, textarea, dialog") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "p" || e.key === "P") setPresenting(!document.body.classList.contains("presenting"));
    else if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  });

  /* One delegated click handler for every interactive component. */
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-add], [data-filter], [data-billing], [data-toast], [data-qty], [data-close], #bag-toggle, #bag-checkout");
    if (!t) return;
    if (t.dataset.add) addToBag(t.dataset.add);
    else if (t.dataset.filter) {
      const key = t.dataset.filter;
      history.replaceState(null, "", `#/${route().id}${key === "all" ? "" : `/${key}`}`);
      applyFilter(key);
    } else if (t.dataset.billing) {
      // One choice applies to every price on the page.
      const annual = t.dataset.billing === "annual";
      $$(".block-tiers").forEach(b => b.classList.toggle("is-annual", annual));
      $$("[data-billing]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.billing === t.dataset.billing)));
    } else if (t.dataset.qty) {
      const q = (bag.get(t.dataset.id) || 0) + Number(t.dataset.qty);
      q > 0 ? bag.set(t.dataset.id, q) : bag.delete(t.dataset.id);
      updateBag();
    } else if (t.hasAttribute("data-close")) $("#bag").close();
    else if (t.id === "bag-toggle") $("#bag").showModal();
    else if (t.id === "bag-checkout") toast("Demo only: checkout isn't connected.");
    else if (t.dataset.toast) toast(t.dataset.toast);
  });
  $("#bag").addEventListener("click", e => { if (e.target === $("#bag")) $("#bag").close(); });

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
  updateBag();
  $("#present-toggle").addEventListener("click", () => setPresenting(!document.body.classList.contains("presenting")));
  window.addEventListener("hashchange", render);
  if ("speechSynthesis" in window) speechSynthesis.getVoices(); // warm up voice list
  render();
})();
