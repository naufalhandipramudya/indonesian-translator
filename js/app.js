import { contentEn } from "./content-en.js";
import { contentId } from "./content-id.js";

const STORAGE_THEME = "portfolio_theme";
const STORAGE_LANG = "portfolio_lang";

const NAV_SECTIONS = [
  { id: "showcase", key: "navShowcase" },
  { id: "features", key: "navFeatures" },
  { id: "problemSolution", key: "navImpact" },
  { id: "proof", key: "navProof" },
  { id: "otherWork", key: "navWork" },
  { id: "contact", key: "navContact" }
];

const ICONS = {
  domain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  survey: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M8 8h5M8 16h6"/></svg>',
  native: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>',
  speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  coverage: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  quality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  risk: `<svg class="riskScene" viewBox="0 0 240 118" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="riskFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.85"/>
      </linearGradient>
    </defs>
    <g class="riskSurveyGood">
      <rect x="6" y="10" width="68" height="52" rx="7" stroke="currentColor" stroke-width="1.2" opacity="0.35"/>
      <line x1="14" y1="22" x2="52" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="14" y1="30" x2="44" y2="30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
      <text x="14" y="44" fill="currentColor" opacity="0.45" font-size="7" font-family="system-ui,sans-serif" font-weight="600">EN · Scale</text>
      <rect class="riskScaleCell" x="14" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <rect class="riskScaleCell" x="26" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <rect class="riskScaleCell" x="38" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <rect class="riskScaleCell" x="50" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.3"/>
      <rect class="riskScaleCell riskScaleCellActive" x="62" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.2" opacity="0.55"/>
    </g>
    <path class="riskFlowPath" d="M78 36 H98" stroke="url(#riskFlowGrad)" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 4"/>
    <path class="riskFlowPath riskFlowPath2" d="M102 36 H122" stroke="url(#riskFlowGrad)" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 4" opacity="0.5"/>
    <g class="riskWarnBadge">
      <circle cx="112" cy="36" r="11" class="riskWarnCircle"/>
      <path class="riskWarnMark" d="M112 30v5M112 39v1" stroke-width="2" stroke-linecap="round"/>
    </g>
    <g class="riskSurveyBad">
      <rect x="128" y="10" width="68" height="52" rx="7" class="riskBadDoc" stroke-width="1.2"/>
      <line class="riskBadLine riskBadLine1" x1="136" y1="22" x2="168" y2="24" stroke-width="1.5" stroke-linecap="round"/>
      <line class="riskBadLine riskBadLine2" x1="136" y1="30" x2="160" y2="28" stroke-width="1.5" stroke-linecap="round"/>
      <text x="136" y="44" fill="currentColor" opacity="0.45" font-size="7" font-family="system-ui,sans-serif" font-weight="600">ID · Skala</text>
      <rect class="riskScaleCell riskScaleError" x="136" y="48" width="9" height="9" rx="2" stroke-width="1.2"/>
      <rect class="riskScaleCell" x="148" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.25"/>
      <rect class="riskScaleCell" x="160" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.25"/>
      <rect class="riskScaleCell riskScaleError" x="172" y="48" width="9" height="9" rx="2" stroke-width="1.2"/>
      <rect class="riskScaleCell" x="184" y="48" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1" opacity="0.25"/>
    </g>
    <g class="riskDataBlock">
      <text x="6" y="78" fill="currentColor" opacity="0.4" font-size="6.5" font-family="system-ui,sans-serif" font-weight="600">EXPECTED DATA</text>
      <text x="130" y="78" fill="currentColor" opacity="0.4" font-size="6.5" font-family="system-ui,sans-serif" font-weight="600">CORRUPTED OUTPUT</text>
      <g class="riskBarsExpected" opacity="0.35">
        <rect x="6" y="84" width="10" height="22" rx="2" fill="currentColor"/>
        <rect x="20" y="90" width="10" height="16" rx="2" fill="currentColor"/>
        <rect x="34" y="86" width="10" height="20" rx="2" fill="currentColor"/>
        <rect x="48" y="88" width="10" height="18" rx="2" fill="currentColor"/>
        <rect x="62" y="85" width="10" height="21" rx="2" fill="currentColor"/>
        <rect x="76" y="89" width="10" height="17" rx="2" fill="currentColor"/>
      </g>
      <g class="riskBarsCorrupt">
        <rect class="riskCorruptBar riskCorruptBar1" x="130" y="84" width="10" height="22" rx="2"/>
        <rect class="riskCorruptBar riskCorruptBar2" x="144" y="90" width="10" height="16" rx="2"/>
        <rect class="riskCorruptBar riskCorruptBar3" x="158" y="86" width="10" height="20" rx="2"/>
        <rect class="riskCorruptBar riskCorruptBar4" x="172" y="88" width="10" height="18" rx="2"/>
        <rect class="riskCorruptBar riskCorruptBar5" x="186" y="85" width="10" height="21" rx="2"/>
        <rect class="riskCorruptBar riskCorruptBar6" x="200" y="89" width="10" height="17" rx="2"/>
      </g>
      <path class="riskNoiseLine" d="M128 108 Q148 100 168 110 T208 102" stroke-width="1.5" stroke-linecap="round"/>
    </g>
  </svg>`,
  market: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  validity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  voice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>',
  tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  retail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>',
  edu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-6 10 6-10 6z"/><path d="M6 12v5c0 2 2.7 3 6 3s6-1 6-3v-5"/></svg>',
  game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/></svg>',
  fintech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20M6 14h2M10 14h4"/></svg>',
  travel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4c-1 0-2 1-3.5 2.5L12 10 3.8 8.2c-.5-.1-.9.1-1.1.5l-.1.4c-.2.5.1 1 .6 1.1L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.1.5.6.8 1.1.6l.4-.1c.4-.2.6-.6.5-1.1z"/></svg>'
};

let currentLang = "en";
let currentTheme = "light";
let content = contentEn;
let navObserver = null;
let revealObserver = null;
let counterObserver = null;

const el = {
  app: document.getElementById("app"),
  siteNavList: document.getElementById("siteNavList"),
  siteNav: document.getElementById("siteNav"),
  themeBtn: document.getElementById("themeBtn"),
  langEn: document.getElementById("langEn"),
  langId: document.getElementById("langId"),
  menuBtn: document.getElementById("menuBtn"),
  menuBtnLabel: document.getElementById("menuBtnLabel"),
  contactBar: document.getElementById("contactBar"),
  contactBarEmail: document.getElementById("contactBarEmail"),
  contactBarLinkedin: document.getElementById("contactBarLinkedin"),
  toast: document.getElementById("toast"),
  skipLink: document.querySelector(".skipLink")
};

function getContent(lang) {
  return lang === "id" ? contentId : contentEn;
}

function icon(name) {
  const span = document.createElement("span");
  span.className = "iconWrap";
  span.innerHTML = ICONS[name] || ICONS.domain;
  return span;
}

function revealWrap(className) {
  const div = document.createElement("div");
  div.className = `reveal ${className || ""}`.trim();
  return div;
}

function sectionShell(id, label, title, subtitle) {
  const section = document.createElement("section");
  section.className = "section";
  section.id = id;
  section.setAttribute("data-section", id);

  const wrap = document.createElement("div");
  wrap.className = "pageWrap";

  const inner = revealWrap("revealGroup");
  if (label) {
    const lbl = document.createElement("p");
    lbl.className = "sectionLabel";
    lbl.textContent = label;
    inner.appendChild(lbl);
  }
  const h2 = document.createElement("h2");
  h2.className = "sectionTitle";
  h2.textContent = title;
  inner.appendChild(h2);
  if (subtitle) {
    const sub = document.createElement("p");
    sub.className = "sectionLead";
    sub.textContent = subtitle;
    inner.appendChild(sub);
  }
  wrap.appendChild(inner);
  section.appendChild(wrap);
  return { section, wrap, inner };
}

function renderNav() {
  el.siteNavList.innerHTML = "";
  NAV_SECTIONS.forEach(({ id, key }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "siteNavLink";
    a.href = `#${id}`;
    a.dataset.nav = id;
    a.textContent = content.ui[key];
    a.addEventListener("click", () => {
      el.siteNav.classList.remove("isOpen");
      el.menuBtn.setAttribute("aria-expanded", "false");
    });
    li.appendChild(a);
    el.siteNavList.appendChild(li);
  });
}

function renderHero() {
  const { hero, ui } = content;
  const section = document.createElement("section");
  section.className = "hero";
  section.id = "hero";
  section.setAttribute("data-section", "hero");

  const mesh = document.createElement("div");
  mesh.className = "heroMesh";
  mesh.setAttribute("aria-hidden", "true");
  section.appendChild(mesh);

  const wrap = document.createElement("div");
  wrap.className = "pageWrap heroInner";

  const grid = revealWrap("heroGrid reveal");
  const copy = document.createElement("div");
  copy.className = "heroCopy";

  const role = document.createElement("p");
  role.className = "heroRole";
  role.textContent = hero.role;

  const h1 = document.createElement("h1");
  h1.className = "heroHeadline";
  h1.textContent = hero.headline;

  const sub = document.createElement("p");
  sub.className = "heroSub";
  sub.textContent = hero.subheadline;

  const avail = document.createElement("p");
  avail.className = "heroAvail";
  avail.textContent = `🌏 ${hero.availability}`;

  const actions = document.createElement("div");
  actions.className = "heroActions";
  const primary = document.createElement("a");
  primary.className = "btn btnPrimary btnGlow";
  primary.href = `mailto:${hero.email}`;
  primary.textContent = hero.ctaPrimary;
  const secondary = document.createElement("a");
  secondary.className = "btn btnSecondary";
  secondary.href = "#showcase";
  secondary.textContent = hero.ctaSecondary;
  actions.appendChild(primary);
  actions.appendChild(secondary);

  copy.appendChild(role);
  const nameEl = document.createElement("p");
  nameEl.className = "heroName";
  nameEl.textContent = hero.name;
  copy.appendChild(nameEl);
  copy.appendChild(h1);
  copy.appendChild(sub);
  copy.appendChild(avail);
  copy.appendChild(actions);

  const card = document.createElement("div");
  card.className = "heroCard glass";
  card.innerHTML = `
    <p class="heroCardLabel">${ui.emailMe}</p>
    <a class="heroCardEmail" href="mailto:${hero.email}">${hero.email}</a>
    <button type="button" class="copyBtn" data-copy="${hero.email}">${ui.copyEmail}</button>
    <div class="heroCardLinks">
      <a href="${hero.linkedin}" target="_blank" rel="noopener noreferrer">${ui.linkedIn}</a>
      <a href="https://wa.me/${hero.phone.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer">${ui.whatsApp}</a>
      <a href="assets/Naufal_Handi_Pramudya_CV.pdf" download="Naufal_Handi_Pramudya_CV.pdf">${ui.downloadCV}</a>
      </div>
  `;
  card.querySelector(".copyBtn").addEventListener("click", () => copyEmail(hero.email));

  grid.appendChild(copy);
  grid.appendChild(card);
  wrap.appendChild(grid);
  section.appendChild(wrap);
  return section;
}

function renderStatBand() {
  const { stats, ui } = content;
  const band = document.createElement("div");
  band.className = "statBand pageWrap reveal";

  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "statCard glass";
    const val = document.createElement("div");
    val.className = "statValue";
    if (stat.isText) {
      val.textContent = ui[stat.displayKey];
    } else if (stat.animate) {
      val.dataset.counter = stat.value;
      val.dataset.suffix = stat.suffix || "+";
      val.textContent = "0";
    } else {
      val.textContent = `${stat.value}${stat.suffix || ""}`;
    }
    const lbl = document.createElement("div");
    lbl.className = "statLabel";
    lbl.textContent = ui[stat.labelKey];
    card.appendChild(val);
    card.appendChild(lbl);
    band.appendChild(card);
  });

  return band;
}

function renderFeatures() {
  const f = content.features;
  const { section, inner } = sectionShell("features", f.label, f.title, f.subtitle);

  const grid = document.createElement("div");
  grid.className = "featureGrid";

  f.items.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "featureCard glass reveal";
    card.style.transitionDelay = `${i * 0.08}s`;
    card.appendChild(icon(item.icon));
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    const p = document.createElement("p");
    p.textContent = item.text;
    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);
  });

  inner.appendChild(grid);
  return section;
}

function renderRiskVisual() {
  const visual = document.createElement("div");
  visual.className = "psRiskVisual";
  visual.setAttribute("aria-hidden", "true");
  const wrap = document.createElement("span");
  wrap.className = "iconWrap psRiskIcon";
  wrap.innerHTML = ICONS.risk;
  visual.appendChild(wrap);
  return visual;
}

function renderProblemSolution() {
  const ps = content.problemSolution;
  const { section, inner } = sectionShell("problemSolution", ps.label, ps.title);

  const layout = document.createElement("div");
  layout.className = "psLayout";

  const problem = document.createElement("div");
  problem.className = "psProblem glass reveal";
  problem.appendChild(renderRiskVisual());

  const problemBody = document.createElement("div");
  problemBody.className = "psProblemBody";
  const pt = document.createElement("h3");
  pt.textContent = ps.problemTitle;
  const pp = document.createElement("p");
  pp.textContent = ps.problemText;
  problemBody.appendChild(pt);
  problemBody.appendChild(pp);
  problem.appendChild(problemBody);

  layout.appendChild(problem);

  ps.solutions.forEach((sol, i) => {
    const card = document.createElement("article");
    card.className = "psCard glass reveal";
    card.style.transitionDelay = `${i * 0.06}s`;
    card.appendChild(icon(sol.icon));
    const h3 = document.createElement("h3");
    h3.textContent = sol.title;
    const p = document.createElement("p");
    p.textContent = sol.text;
    card.appendChild(h3);
    card.appendChild(p);
    layout.appendChild(card);
  });

  inner.appendChild(layout);
  return section;
}

function renderShowcase() {
  const sc = content.showcase;
  const { section, inner } = sectionShell("showcase", sc.label, sc.title, sc.subtitle);

  const clients = document.createElement("p");
  clients.className = "clientStrip";
  clients.textContent = sc.clients;
  inner.appendChild(clients);

  const showcase = document.createElement("div");
  showcase.className = "showcase glass reveal";

  const tabs = document.createElement("div");
  tabs.className = "showcaseTabs";
  tabs.setAttribute("role", "tablist");

  const panel = document.createElement("div");
  panel.className = "showcasePanel";

  sc.tabs.forEach((tab, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `showcaseTab${i === 0 ? " isActive" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.dataset.tab = tab.id;
    btn.innerHTML = `<span class="showcaseTabTitle">${tab.title}</span><span class="showcaseTabMeta">${tab.meta}</span>`;
    btn.addEventListener("click", () => activateTab(sc.tabs, tab.id, tabs, panel));
    tabs.appendChild(btn);
  });

  panel.appendChild(renderTabPanel(sc.tabs[0]));
  showcase.appendChild(tabs);
  showcase.appendChild(panel);
  inner.appendChild(showcase);

  const indWrap = document.createElement("div");
  indWrap.className = "industryCloud reveal";
  sc.industries.forEach((ind) => {
    const pill = document.createElement("span");
    pill.className = "industryPill";
    pill.textContent = ind;
    indWrap.appendChild(pill);
  });
  inner.appendChild(indWrap);

  return section;
}

function renderTabPanel(tab) {
  const panel = document.createElement("div");
  panel.className = "showcaseContent";
  panel.dataset.panel = tab.id;
  const summary = document.createElement("p");
  summary.className = "showcaseSummary";
  summary.textContent = tab.summary;
  panel.appendChild(summary);
  if (tab.bullets) {
    const ul = document.createElement("ul");
    ul.className = "showcaseBullets";
    tab.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    panel.appendChild(ul);
  }
  const detail = document.createElement("p");
  detail.className = "showcaseDetail";
  detail.textContent = tab.detail;
  panel.appendChild(detail);
  return panel;
}

function activateTab(tabs, id, tabsEl, panelEl) {
  const tab = tabs.find((t) => t.id === id);
  if (!tab) return;

  tabsEl.querySelectorAll(".showcaseTab").forEach((btn) => {
    const active = btn.dataset.tab === id;
    btn.classList.toggle("isActive", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  panelEl.innerHTML = "";
  const contentEl = renderTabPanel(tab);
  contentEl.classList.add("isEntering");
  panelEl.appendChild(contentEl);
  requestAnimationFrame(() => contentEl.classList.remove("isEntering"));
}

function renderProof() {
  const proof = content.proof;
  const { section, inner } = sectionShell("proof", proof.label, proof.title);

  const grid = document.createElement("div");
  grid.className = "proofGrid reveal";

  const tools = document.createElement("div");
  tools.className = "proofBlock glass";
  const tt = document.createElement("h3");
  tt.textContent = proof.toolsTitle;
  tools.appendChild(tt);
  const toolList = document.createElement("div");
  toolList.className = "proofTags";
  proof.tools.forEach((t) => {
    const span = document.createElement("span");
    span.className = "proofTag";
    span.textContent = t;
    toolList.appendChild(span);
  });
  tools.appendChild(toolList);

  const formats = document.createElement("div");
  formats.className = "proofBlock glass";
  const ft = document.createElement("h3");
  ft.textContent = proof.formatsTitle;
  formats.appendChild(ft);
  const formatList = document.createElement("div");
  formatList.className = "proofTags";
  proof.formats.forEach((f) => {
    const span = document.createElement("span");
    span.className = "proofTag";
    span.textContent = f;
    formatList.appendChild(span);
  });
  formats.appendChild(formatList);

  grid.appendChild(tools);
  grid.appendChild(formats);

  const note = document.createElement("p");
  note.className = "proofNote";
  note.textContent = proof.audiences;

  inner.appendChild(grid);
  inner.appendChild(note);

  const skills = content.skills;
  const tagWrap = document.createElement("div");
  tagWrap.className = "tagGrid reveal";
  skills.keywords.forEach((kw) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = kw;
    tagWrap.appendChild(tag);
  });
  inner.appendChild(tagWrap);

  return section;
}

function renderOtherWork() {
  const ow = content.otherWork;
  const { section, inner } = sectionShell("otherWork", ow.label, ow.title);

  const grid = document.createElement("div");
  grid.className = "workGrid";

  ow.items.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "workCard glass reveal";
    card.style.transitionDelay = `${i * 0.05}s`;
    card.appendChild(icon(item.icon));
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    const p = document.createElement("p");
    p.textContent = item.summary;
    const tags = document.createElement("div");
    tags.className = "workTags";
    item.tags.forEach((t) => {
      const span = document.createElement("span");
      span.textContent = t;
      tags.appendChild(span);
    });
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(tags);
    grid.appendChild(card);
  });

  inner.appendChild(grid);
  return section;
}

function renderContact() {
  const { cta, ui } = content;
  const section = document.createElement("section");
  section.className = "section sectionCta";
  section.id = "contact";
  section.setAttribute("data-section", "contact");

  const wrap = document.createElement("div");
  wrap.className = "pageWrap";

  const box = document.createElement("div");
  box.className = "ctaBox glass reveal";

  const h2 = document.createElement("h2");
  h2.textContent = cta.title;
  const sub = document.createElement("p");
  sub.className = "ctaSub";
  sub.textContent = cta.sub;

  const links = document.createElement("div");
  links.className = "ctaLinks";
  links.innerHTML = `
    <a href="mailto:${cta.email}">${cta.email}</a>
    <button type="button" class="copyBtn" data-copy="${cta.email}">${ui.copyEmail}</button>
    <a href="https://wa.me/${cta.phone.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer">${cta.phone}</a>
    <a href="${cta.linkedin}" target="_blank" rel="noopener noreferrer">${ui.linkedIn}</a>
    <a href="assets/Naufal_Handi_Pramudya_CV.pdf" download="Naufal_Handi_Pramudya_CV.pdf">${ui.downloadCV}</a>
  `;
  links.querySelector(".copyBtn").addEventListener("click", () => copyEmail(cta.email));

  const avail = document.createElement("p");
  avail.className = "ctaAvail";
  avail.textContent = `🌏 ${cta.availability}`;

  const actions = document.createElement("div");
  actions.className = "heroActions";
  const btn = document.createElement("a");
  btn.className = "btn btnPrimary btnGlow";
  btn.href = `mailto:${cta.email}`;
  btn.textContent = cta.ctaPrimary;
  actions.appendChild(btn);

  box.appendChild(h2);
  box.appendChild(sub);
  box.appendChild(links);
  box.appendChild(avail);
  box.appendChild(actions);
  wrap.appendChild(box);
  section.appendChild(wrap);
  return section;
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "siteFooter";
  const wrap = document.createElement("div");
  wrap.className = "pageWrap";
  const p = document.createElement("p");
  p.textContent = content.footer.line;
  wrap.appendChild(p);
  footer.appendChild(wrap);
  return footer;
}

function renderPage() {
  content = getContent(currentLang);
  el.app.innerHTML = "";

  el.app.appendChild(renderHero());
  el.app.appendChild(renderStatBand());
  el.app.appendChild(renderShowcase());
  el.app.appendChild(renderFeatures());
  el.app.appendChild(renderProblemSolution());
  el.app.appendChild(renderProof());
  el.app.appendChild(renderOtherWork());
  el.app.appendChild(renderContact());
  el.app.appendChild(renderFooter());

  renderNav();
  updateMeta();
  updateChromeLabels();
  setupNavObserver();
  setupRevealObserver();
  setupCounters();
  setupContactBar();
  setupParallax();
}

function updateMeta() {
  document.title = content.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", content.meta.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", content.meta.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", content.meta.description);
  document.documentElement.lang = currentLang === "id" ? "id" : "en";
  const ogLocale = document.getElementById("ogLocale");
  if (ogLocale) ogLocale.setAttribute("content", currentLang === "id" ? "id_ID" : "en_US");
}

function updateChromeLabels() {
  el.skipLink.textContent = content.ui.skipToContent;
  el.menuBtnLabel.textContent = content.ui.menu;
  el.themeBtn.setAttribute(
    "aria-label",
    currentTheme === "light" ? content.ui.themeDark : content.ui.themeLight
  );
  el.contactBarEmail.href = `mailto:${content.hero.email}`;
  el.contactBarEmail.textContent = content.hero.email;
  el.contactBarLinkedin.href = content.hero.linkedin;
  el.contactBarLinkedin.textContent = content.ui.linkedIn;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_LANG, lang);
  el.langEn.classList.toggle("isActive", lang === "en");
  el.langId.classList.toggle("isActive", lang === "id");
  el.langEn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  el.langId.setAttribute("aria-pressed", lang === "id" ? "true" : "false");
  renderPage();
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_THEME, theme);
  updateChromeLabels();
}

function toggleTheme() {
  setTheme(currentTheme === "light" ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_THEME);
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
    return;
  }
  setTheme("light");
}

function initLang() {
  const saved = localStorage.getItem(STORAGE_LANG);
  if (saved === "en" || saved === "id") {
    currentLang = saved;
  } else {
    currentLang = "en";
  }
  el.langEn.classList.toggle("isActive", currentLang === "en");
  el.langId.classList.toggle("isActive", currentLang === "id");
  el.langEn.setAttribute("aria-pressed", currentLang === "en" ? "true" : "false");
  el.langId.setAttribute("aria-pressed", currentLang === "id" ? "true" : "false");
}

function setupNavObserver() {
  if (navObserver) navObserver.disconnect();
  const links = document.querySelectorAll(".siteNavLink");
  const sections = document.querySelectorAll("[data-section]");

  navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-section");
          links.forEach((link) => link.classList.toggle("isActive", link.dataset.nav === id));
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );
  sections.forEach((s) => navObserver.observe(s));
}

function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

function setupCounters() {
  if (counterObserver) counterObserver.disconnect();
  const counters = document.querySelectorAll("[data-counter]");

  counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));
}

function setupParallax() {
  const mesh = document.querySelector(".heroMesh");
  if (!mesh || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mesh.style.transform = `translate(${x}px, ${y}px)`;
    },
    { passive: true }
  );
}

function setupContactBar() {
  const hero = document.getElementById("hero");
  if (!hero) return;

  const showBar = () => {
    const past = hero.getBoundingClientRect().bottom < 0;
    el.contactBar.hidden = !past;
    el.contactBar.classList.toggle("isVisible", past);
    document.body.classList.toggle("hasContactBar", past);
  };

  window.addEventListener("scroll", showBar, { passive: true });
  showBar();
}

let toastTimeout = null;

function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    el.toast.textContent = content.ui.emailCopied;
    el.toast.hidden = false;
    el.toast.classList.add("isShown");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      el.toast.classList.remove("isShown");
      setTimeout(() => { el.toast.hidden = true; }, 300);
    }, 2000);
  });
}

function bindEvents() {
  el.themeBtn.addEventListener("click", toggleTheme);
  el.langEn.addEventListener("click", () => setLang("en"));
  el.langId.addEventListener("click", () => setLang("id"));
  el.menuBtn.addEventListener("click", () => {
    const open = el.siteNav.classList.toggle("isOpen");
    el.menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.addEventListener("click", (e) => {
    if (
      !el.siteNav.contains(e.target) &&
      !el.menuBtn.contains(e.target) &&
      el.siteNav.classList.contains("isOpen")
    ) {
      el.siteNav.classList.remove("isOpen");
      el.menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

initTheme();
initLang();
bindEvents();
renderPage();
