/* ===== EDIT YOUR CONTENT HERE — all facts come from the resume; [EDIT] = placeholder to complete ===== */
const CONFIG = { email: "kentkatigbak1221@gmail.com" };
const P = "[EDIT] Add detail here";

const ROLES = [
  {
    id: "r1",
    s: "INTERN '21",
    d: "Jun – Dec 2021",
    t: "Inventory Management Intern",
    o: "Batangas State University",
    b: ["Inventory tracking and asset management"],
    sk: ["Inventory Management"],
  },
  {
    id: "r2",
    s: "PROCESS '23",
    d: "Feb 2023 – Mar 2025",
    t: "Process Engineering Staff",
    o: "Furukawa Automotive Systems",
    b: [
      "Facilitated FMEA and NPRA for mass production and new product preparation",
      "Developed the Defect Failure Analysis flow",
      "Joined Lean Six Sigma, Kaizen and quality initiatives with cross-functional teams",
    ],
    sk: ["Process Engineering", "FMEA", "NPRA", "Kaizen", "Lean Six Sigma"],
  },
  {
    id: "r3",
    s: "EQUIP '25",
    d: "Apr 2025 – Present",
    t: "Equipment Engineering Supervisor",
    o: "Furukawa Automotive Systems (delegated Apr–Oct 2025, actual from Oct 2025)",
    b: [
      "MTTR, MTBF, JPH and Quality dashboards with 100% report-ready data availability",
      "69% downtime reduction (Jan vs Dec 2025 MTTR)",
      "Low spare-part inventory cost with no lack of spare parts",
    ],
    sk: [
      "Equipment Engineering",
      "Data Analytics",
      "Reporting",
      "Leadership",
      "Inventory Management",
    ],
  },
  {
    id: "r4",
    s: "SYSTEMS '26",
    d: "Sep 2026 – Present",
    t: "Systems Engineering Supervisor",
    o: "Furukawa Automotive Systems",
    b: [
      "Supervise systems engineers developing internal web applications to reduce cost and improve quality and efficiency",
    ],
    sk: ["Leadership"],
  },
];
const SKILLS = {
  "Equipment Engineering":
    "Equipment Engineering Supervisor: MTTR/MTBF/JPH/Quality dashboards and a 69% downtime reduction.",
  "Data Analytics":
    "Python, Excel and Tableau are listed in my resume; DAP Data Analytics programs (2023).",
  Reporting: "Report-ready dashboard data kept available 100% of the time.",
  Leadership:
    "Supervising engineers; trainings: Strategic Planning (2026), Train the Trainers (2024), Planning Management Fundamentals (2022).",
  "Inventory Management":
    "2021 internship (tracking, asset management) and spare-parts inventory efficiency.",
  "Process Engineering": "Process Engineering Staff, Feb 2023 – Mar 2025.",
  FMEA: "Facilitated FMEA for mass production and new product preparation.",
  NPRA: "Facilitated NPRA for new product preparation.",
  Kaizen: "Kaizen initiatives with cross-functional teams.",
  "Lean Six Sigma":
    "Green Belt (2024), Yellow Belt (2021); quality and improvement initiatives.",
  DMAIC:
    "Define-Measure-Analyze-Improve-Control, listed in core skills and part of Lean Six Sigma.",
  DMADV: "Design-for-Six-Sigma methodology listed in core skills.",
  DOE: "Design of Experiments training (2024).",
  RCA: "Root cause analysis, listed in core skills.",
};
const LINKS = [
  ["Lean Six Sigma", "DMAIC"],
  ["Lean Six Sigma", "DMADV"],
  ["Lean Six Sigma", "DOE"],
  ["Lean Six Sigma", "RCA"],
  ["Data Analytics", "Reporting"],
];
const ORDER = [
  "Equipment Engineering",
  "Data Analytics",
  "Reporting",
  "Leadership",
  "Inventory Management",
  "Process Engineering",
  "FMEA",
  "NPRA",
  "Kaizen",
  "Lean Six Sigma",
  "DMAIC",
  "DMADV",
  "DOE",
  "RCA",
];

const CATS = [
  "Data Analytics",
  "Equipment Engineering",
  "Inventory Management",
  "Process Engineering",
  "Systems Engineering",
  "Continuous Improvement",
];
const PROJECTS = [
  {
    id: "dash",
    n: "01",
    t: "MTTR · MTBF · JPH · Quality Dashboards",
    c: "Data Analytics",
    type: "Professional",
    tools: ["Python", "Excel", "Dashboards"],
    desc: "Dashboards for four core equipment and quality metrics, with report-ready data available 100% of the time.",
    problem:
      "Equipment performance and quality needed dependable, always-ready data for decisions.",
    method: "Developed dashboards for MTTR, MTBF, JPH and Quality.",
    result: "100% report-ready data availability.",
    overview:
      "Role: Equipment Engineering Supervisor, Furukawa Automotive Systems (Apr 2025 – present).",
    objectives: [
      "Make equipment and quality data report-ready at all times",
      "Support data-driven decisions",
    ],
    analysis: "Four tracked metrics. " + P + " (data sources, refresh method).",
    solution:
      "A standardized dashboard set covering MTTR, MTBF, JPH and Quality.",
    recs: P,
    viz: "tiles",
  },
  {
    id: "down",
    n: "02",
    t: "Downtime Reduction through MTTR",
    c: "Equipment Engineering",
    type: "Professional",
    tools: ["MTTR", "Data analytics"],
    desc: "Data-driven actions that helped reduce downtime by 69% (January vs December 2025 MTTR).",
    problem: "Equipment downtime limited output and flow.",
    method:
      "Monitored MTTR through dashboards and applied data-driven actions.",
    result: "69% downtime reduction (Jan vs Dec 2025 MTTR).",
    overview:
      "Role: Equipment Engineering Supervisor. Improvement achieved with the team through data-driven actions.",
    objectives: [
      "Reduce mean time to repair",
      "Sustain the gain through monitoring",
    ],
    analysis: "Comparison of January and December 2025 MTTR.",
    solution: P + " (specific actions taken).",
    recs: P + " (sustainment plan).",
    viz: "mttr",
  },
  {
    id: "inv",
    n: "03",
    t: "Spare-Parts Inventory Efficiency",
    c: "Inventory Management",
    type: "Professional",
    tools: ["Inventory control", "Excel"],
    desc: "Kept spare-part inventory cost low while avoiding any shortage of parts.",
    problem:
      "Balance low inventory cost against the risk of lacking spare parts.",
    method: "Improved spare-parts inventory efficiency and monitoring.",
    result:
      "Low inventory cost and no lack of spare parts. " + P + " (figures).",
    overview: "Role: Equipment Engineering Supervisor.",
    objectives: ["Minimize spare-part inventory cost", "Avoid part shortages"],
    analysis: P,
    solution: P + " (levels, review cycle).",
    recs: P,
  },
  {
    id: "dfa",
    n: "04",
    t: "Defect Failure Analysis Flow",
    c: "Process Engineering",
    type: "Professional",
    tools: ["Defect analysis", "Process flow"],
    desc: "A structured flow for analyzing and documenting defect failures.",
    problem: "Defect analysis needed a consistent, documented path.",
    method:
      "Developed the Defect Failure Analysis flow as Process Engineering Staff.",
    result: P + " (adoption / outcome).",
    overview: "Role: Process Engineering Staff (Feb 2023 – Mar 2025).",
    objectives: ["Standardize defect failure analysis"],
    analysis: P,
    solution: "The Defect Failure Analysis flow.",
    recs: P,
  },
  {
    id: "fmea",
    n: "05",
    t: "FMEA & NPRA Facilitation",
    c: "Process Engineering",
    type: "Professional",
    tools: ["FMEA", "NPRA"],
    desc: "Facilitated FMEA and NPRA for mass production and new product preparation.",
    problem: "New and running products needed structured risk review.",
    method: "Facilitated FMEA and NPRA sessions with cross-functional teams.",
    result: P + " (documented outcomes).",
    overview: "Role: Process Engineering Staff.",
    objectives: ["Identify process risks before and during production"],
    analysis: P,
    solution: P,
    recs: P,
  },
  {
    id: "lss",
    n: "06",
    t: "Lean Six Sigma & Kaizen Initiatives",
    c: "Continuous Improvement",
    type: "Professional",
    tools: ["Lean Six Sigma", "Kaizen", "DMAIC"],
    desc: "Quality and improvement initiatives with cross-functional teams; Green Belt certified (2024).",
    problem: P,
    method: "Joined Lean Six Sigma, Kaizen and quality initiatives.",
    result: P + " (documented outcomes).",
    overview: "Role: Process Engineering Staff.",
    objectives: ["Improve quality and efficiency"],
    analysis: P,
    solution: P,
    recs: P,
  },
  {
    id: "web",
    n: "07",
    t: "Internal Web Applications Program",
    c: "Systems Engineering",
    type: "Professional · team leadership",
    tools: ["Team supervision", "Web applications"],
    desc: "Supervising systems engineers building internal web applications that reduce cost and improve quality and efficiency.",
    problem: P,
    method:
      "Lead a team of systems engineers developing internal applications.",
    result: P + " (not yet documented).",
    overview:
      "Role: Systems Engineering Supervisor (Sep 2026 – present). Team supervision.",
    objectives: ["Reduce cost", "Improve quality and efficiency"],
    analysis: P,
    solution: "Internal web applications.",
    recs: P,
  },
  {
    id: "trk",
    n: "08",
    t: "Inventory Tracking & Asset Management",
    c: "Inventory Management",
    type: "Internship",
    tools: ["Inventory tracking", "Asset management"],
    desc: "Internship supporting inventory tracking and asset management (2021).",
    problem: P,
    method: "Supported inventory tracking and asset management.",
    result: P,
    overview:
      "Role: Inventory Management Intern, Batangas State University (Jun – Dec 2021).",
    objectives: [P],
    analysis: P,
    solution: P,
    recs: P,
  },
];
const TOOLS = [
  ["Python", "Data analytics. Training: Computing in Python (DAP, 2023)."],
  ["Microsoft Excel", "Listed among my data analytics tools."],
  ["Tableau", "Listed among my data analytics tools."],
  ["MS Office Apps", "Documentation and reporting."],
  ["Google Workspace Apps", "Collaboration and reporting."],
  ["AI Utilization", "Listed in my resume as a core skill."],
];
const METHODS = [
  "Lean Six Sigma",
  "DMAIC",
  "DMADV",
  "RCA",
  "FMEA",
  "NPRA",
  "Kaizen",
  "DOE",
  "MSA",
  "Equipment Engineering",
  "Process Engineering",
  "Inventory Management",
];
const KPIS = [
  [8, "", "Featured projects"],
  [69, "%", "Downtime reduction (MTTR)"],
  [4, "", "Dashboards: MTTR, MTBF, JPH, Quality"],
  [100, "%", "Report-ready data availability"],
  [9, "", "Training & certification entries"],
  [3, "+", "Years in manufacturing (since 2023)"],
  [4, "", "Roles held (incl. internship)"],
  [14, "", "Skills mapped"],
];
const TRAIN = {
  EDUCATION: [
    [
      "2023",
      "BS Industrial Engineering, Batangas State University – TNEU (GWA 1.7417)",
    ],
    ["2021", "Inventory Management Internship"],
  ],
  "CONTINUOUS IMPROVEMENT": [
    ["2026", "Measurement System Analysis"],
    ["2024", "Lean Six Sigma Green Belt"],
    ["2024", "Design of Experiments"],
    ["2021", "Lean Six Sigma Yellow Belt"],
  ],
  LEADERSHIP: [
    ["2026", "Strategic Planning"],
    ["2024", "Train the Trainers"],
    ["2022", "Planning Management Fundamentals"],
  ],
  "DATA ANALYTICS · DAP 2023": [
    [
      "2023",
      "Analytics Manager Pathway · Operational Analytics · Data Visualization · Dashboards & Drill-down · Storytelling Using Data · Computing in Python",
    ],
  ],
  SAFETY: [
    ["—", "Safety Officer III trainings · DOLE Accredited Safety Officer II"],
  ],
};
const DOTS = [
  [2021.4, "LSS YB"],
  [2022.3, "PMF"],
  [2023.5, "DAP"],
  [2024.3, "LSS GB"],
  [2024.5, "DOE"],
  [2024.7, "Train Trainers"],
  [2026.2, "Strategic Plan"],
  [2026.5, "MSA"],
];
const LOOP = [
  ["D", "Define", "Frame the problem and the goal."],
  ["M", "Measure", "Quantify current performance with data."],
  ["A", "Analyze", "Find the root causes behind the numbers."],
  ["I", "Improve", "Develop and implement solutions."],
  ["C", "Control", "Sustain the gain with monitoring."],
];

/* ===== CODE ===== */
const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = "http://www.w3.org/2000/svg",
  esc = (s) =>
    String(s).replace(
      /[&<>"]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
    );
const ph = (s) => esc(s).replace(/\[EDIT\]/g, '<span class="ph">[EDIT]</span>');
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const el = (t, a = {}, p) => {
  const e = document.createElementNS(NS, t);
  for (const k in a) e.setAttribute(k, a[k]);
  p && p.appendChild(e);
  return e;
};

// career route
$("#route").innerHTML = [...ROLES]
  .reverse()
  .map(
    (r) =>
      `<li><time>${r.d}</time><h3>${r.t}</h3><p>${r.o}</p><ul>${r.b.map((x) => `<li>${x}</li>`).join("")}</ul></li>`,
  )
  .join("");

// project thumbnails (mini blueprints)
const S = 'stroke="#00E5FF" fill="none" stroke-width="1.4"',
  A = 'stroke="#00FFD1" fill="none" stroke-width="1.6"';
const THUMB = {
  dash: `<g ${S}><rect x="20" y="62" width="16" height="34"/><rect x="44" y="42" width="16" height="54"/><rect x="68" y="52" width="16" height="44"/><path d="M110 90a28 28 0 0 1 56 0"/></g><path ${A} d="M138 90l16-22"/><text x="20" y="108" font-size="8" fill="#A8BBC5">MTTR MTBF JPH QA</text>`,
  down: `<path ${S} d="M20 100V20M20 100h160"/><path ${A} d="M30 30L160 84"/><circle cx="30" cy="30" r="4" ${S}/><circle cx="160" cy="84" r="4" ${A}/><text x="120" y="40" font-size="16" fill="#00FFD1" font-weight="700">−69%</text>`,
  inv: `<g ${S}><rect x="24" y="64" width="34" height="30"/><rect x="62" y="64" width="34" height="30"/><rect x="43" y="32" width="34" height="30"/><rect x="110" y="64" width="34" height="30"/></g><path ${A} d="M150 40h28M150 50h20M150 60h24"/>`,
  dfa: `<g ${S}><rect x="12" y="42" width="40" height="26"/><path d="M96 28l26 27-26 27-26-27z"/><rect x="146" y="42" width="40" height="26"/></g><path ${A} d="M52 55h18M122 55h24M96 82v18"/>`,
  fmea: `<g ${S}><rect x="24" y="20" width="150" height="80"/><path d="M24 40h150M24 60h150M24 80h150M74 20v80M124 20v80"/></g><rect x="76" y="62" width="46" height="17" fill="rgba(0,255,209,.35)"/>`,
  lss: `<circle cx="100" cy="60" r="36" ${S}/><g fill="#00FFD1"><circle cx="100" cy="24" r="4"/><circle cx="134" cy="49" r="4"/><circle cx="121" cy="89" r="4"/><circle cx="79" cy="89" r="4"/><circle cx="66" cy="49" r="4"/></g><text x="82" y="64" font-size="11" fill="#EAF4F7">DMAIC</text>`,
  web: `<g ${S}><rect x="24" y="14" width="152" height="92"/><path d="M24 30h152"/><rect x="34" y="40" width="50" height="56"/><rect x="92" y="40" width="74" height="22"/></g><path ${A} d="M92 76h74M92 88h50"/>`,
  trk: `<g ${S}><rect x="30" y="40" width="50" height="40"/><path d="M30 55h50"/></g><path ${A} d="M110 40v40M118 40v40M124 40v40M134 40v40M140 40v40M152 40v40"/>`,
};
const thumb = (p) =>
  `<svg viewBox="0 0 200 120" aria-hidden="true">${THUMB[p.id]}</svg>`;
$("#filters").innerHTML = ["All", ...CATS]
  .map(
    (c, i) =>
      `<button class="${i ? "" : "on"}" data-f="${c}" aria-pressed="${!i}">${c}</button>`,
  )
  .join("");
$("#projectGrid").innerHTML = PROJECTS.map(
  (p) =>
/*    `<article class="card reveal" data-c="${p.c}"><div class="thumb">${thumb(p)}<em>DWG-${p.n}</em></div><span class="mono" style="color:var(--turq)">${p.c.toUpperCase()} · ${p.type.toUpperCase()}</span><h3>${p.t}</h3><p>${esc(p.desc)}</p><h4>PROBLEM</h4><p>${ph(p.problem)}</p><h4>METHOD</h4><p>${esc(p.method)}</p><h4>RESULT</h4><p>${ph(p.result)}</p><div class="tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div><button class="btn" data-id="${p.id}">View Case Study</button></article>`,
).join("");*/
    `<article class="card reveal" data-c="${p.c}"><div class="thumb">${thumb(p)}<em>DWG-${p.n}</em></div><span class="mono" style="color:var(--turq)">${p.c.toUpperCase()} · ${p.type.toUpperCase()}</span><h3>${p.t}</h3><p>${esc(p.desc)}</p><h4>PROBLEM</h4><p>${ph(p.problem)}</p><h4>METHOD</h4><p>${esc(p.method)}</p><h4>RESULT</h4><p>${ph(p.result)}</p><div class="tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div><button class="btn" data-id="${p.id}"></button></article>`,
).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("#filters button").forEach((x) => {
    x.classList.toggle("on", x === b);
    x.setAttribute("aria-pressed", x === b);
  });
  $$("#projectGrid .card").forEach((c) =>
    c.classList.toggle(
      "hide",
      b.dataset.f !== "All" && c.dataset.c !== b.dataset.f,
    ),
  );
});

// tools, kpis, training
$("#toolGrid").innerHTML = TOOLS.map(
  ([n, d]) =>
    `<article class="card reveal"><span class="mono" style="color:var(--teal)"><i class="led"></i>LISTED IN RESUME</span><h3>${n}</h3><p>${d}</p></article>`,
).join("");
$("#methodTags").innerHTML = METHODS.map((m) => `<span>${m}</span>`).join("");
$("#kpiGrid").innerHTML = KPIS.map(
  (k) =>
    `<div class="glass kpi reveal"><b class="count" data-to="${k[0]}" data-suffix="${k[1]}">0</b><span>${k[2]}</span></div>`,
).join("");
$("#train").innerHTML = Object.entries(TRAIN)
  .map(
    ([h, l]) =>
      `<div class="glass reveal"><h3>${h}</h3><ul>${l.map(([y, t]) => `<li><b>${y}</b><span>${t}</span></li>`).join("")}</ul></div>`,
  )
  .join("");

// case-study modal
const modal = $("#modal");
let lastFocus;
const vizMTTR = () =>
  `<svg viewBox="0 0 420 200" role="img" aria-label="MTTR indexed Jan 100 to Dec 31"><path d="M50 20V170H390M50 70H390" stroke="#A8BBC5" stroke-width=".6" fill="none"/><path d="M80 50L350 140" stroke="#00E5FF" stroke-width="3" fill="none"/><circle cx="80" cy="50" r="6" fill="#061522" stroke="#00E5FF" stroke-width="2"/><circle cx="350" cy="140" r="6" fill="#061522" stroke="#00FFD1" stroke-width="2"/><g font-family="monospace" font-size="11" fill="#EAF4F7"><text x="64" y="38">JAN = 100</text><text x="296" y="165" fill="#00FFD1">DEC ≈ 31</text><text x="150" y="190" fill="#A8BBC5">Indexed from the documented 69% reduction</text></g></svg>`;
const vizTiles = () =>
  `<div class="tiles"><div><b>MTTR</b>Mean time to repair: repair time ÷ failures.</div><div><b>MTBF</b>Mean time between failures: uptime ÷ failures.</div><div><b>JPH</b>Jobs per hour: output rate.</div><div><b>Quality</b>Quality performance tracked on the dashboard.</div></div>`;
function openCase(id) {
  const p = PROJECTS.find((x) => x.id === id);
  lastFocus = document.activeElement;
  const sec = (h, b) => `<section><h4>${h}</h4>${b}</section>`;
  $("#mBody").innerHTML =
    `<p class="mono" style="color:var(--turq)">DWG-${p.n} · ${p.c.toUpperCase()} · ${p.type.toUpperCase()}</p><h3 id="mTitle">${p.t}</h3>` +
    sec("PROJECT OVERVIEW", `<p>${ph(p.overview)}</p>`) +
    sec("PROBLEM IDENTIFICATION", `<p>${ph(p.problem)}</p>`) +
    sec(
      "OBJECTIVES",
      `<ul>${p.objectives.map((o) => `<li>${ph(o)}</li>`).join("")}</ul>`,
    ) +
    sec(
      "METHODOLOGY",
      `<p>${ph(p.method)}</p><div class="tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div>`,
    ) +
    sec(
      "DATA ANALYSIS",
      `<p>${ph(p.analysis)}</p>` +
        (p.viz === "mttr" ? vizMTTR() : p.viz === "tiles" ? vizTiles() : ""),
    ) +
    sec("PROPOSED SOLUTION", `<p>${ph(p.solution)}</p>`) +
    sec(
      "RESULTS & RECOMMENDATIONS",
      `<p><strong>Result:</strong> ${ph(p.result)}</p><p><strong>Recommendations:</strong> ${ph(p.recs)}</p>`,
    );
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  $("#mClose").focus();
}
const closeCase = () => {
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocus && lastFocus.focus();
};
$("#projectGrid").addEventListener("click", (e) => {
  const b = e.target.closest("[data-id]");
  b && openCase(b.dataset.id);
});
$("#mClose").onclick = closeCase;
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeCase();
});
addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeCase();
  if (e.key === "Tab") {
    const f = $$("button", modal),
      a = f[0],
      z = f[f.length - 1];
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === a) {
      e.preventDefault();
      z.focus();
    } else if (!e.shiftKey && document.activeElement === z) {
      e.preventDefault();
      a.focus();
    }
  }
});

// skill & experience network
(function () {
  const g = $("#graph"),
    cx = 450,
    cy = 290,
    nodes = {},
    edges = [],
    N = ORDER.length;
  let pinned = null,
    hov = null;
  const ang = (i) => (i / N) * Math.PI * 2 - Math.PI / 2;
  ORDER.forEach(
    (k, i) =>
      (nodes[k] = {
        k,
        role: 0,
        bx: cx + 370 * Math.cos(ang(i)),
        by: cy + 215 * Math.sin(ang(i)),
        cs: Math.cos(ang(i)),
        sn: Math.sin(ang(i)),
        ph: i,
        txt: `${k}: ${SKILLS[k]}`,
      }),
  );
  const RA = { r3: -55, r4: -10, r1: 30, r2: 112 };
  ROLES.forEach((r) => {
    const a = (RA[r.id] * Math.PI) / 180;
    nodes[r.id] = {
      k: r.id,
      role: 1,
      r,
      bx: cx + 200 * Math.cos(a),
      by: cy + 112 * Math.sin(a),
      ph: 9 + r.id.length,
      txt: `${r.t} · ${r.d}. ${r.b[0]}.`,
    };
    r.sk.forEach((s) => edges.push([r.id, s]));
  });
  LINKS.forEach((l) => edges.push(l));
  const eg = edges.map(([a, b]) => ({
    a: nodes[a],
    b: nodes[b],
    e: el("line", { class: "dim-el" }, g),
  }));
  Object.values(nodes).forEach((n) => {
    const gr = el(
      "g",
      {
        class: "n dim-el" + (n.role ? " role" : ""),
        tabindex: 0,
        role: "button",
        "aria-label": n.k,
      },
      g,
    );
    n.g = gr;
    el("circle", { r: n.role ? 22 : 8 }, gr);
    if (n.role) {
      const t = el("text", { class: "rt", y: 4 }, gr);
      t.textContent = n.k.toUpperCase();
      const l = el("text", { y: 38, "text-anchor": "middle" }, gr);
      l.textContent = n.r.s;
    } else {
      const t = el(
        "text",
        {
          x: n.cs * 16,
          y: n.sn * 18 + 4,
          "text-anchor":
            n.cs > 0.25 ? "start" : n.cs < -0.25 ? "end" : "middle",
        },
        gr,
      );
      t.textContent = n.k;
    }
    n.nb = new Set([n.k]);
    gr.addEventListener("mouseenter", () => {
      hov = n;
      apply();
    });
    gr.addEventListener("focus", () => {
      hov = n;
      apply();
    });
    gr.addEventListener("mouseleave", () => {
      hov = null;
      apply();
    });
    gr.addEventListener("blur", () => {
      hov = null;
      apply();
    });
    gr.addEventListener("click", (e) => {
      e.stopPropagation();
      pinned = pinned === n ? null : n;
      apply();
    });
    gr.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        pinned = pinned === n ? null : n;
        apply();
      }
    });
  });
  eg.forEach((x) => {
    x.a.nb.add(x.b.k);
    x.b.nb.add(x.a.k);
  });
  g.addEventListener("click", () => {
    pinned = null;
    apply();
  });
  function apply() {
    const n = pinned || hov;
    g.classList.toggle("f", !!n);
    Object.values(nodes).forEach((x) => {
      x.g.classList.toggle("dim-el", !!n && !n.nb.has(x.k));
      x.g.classList.toggle("sel", n === x);
    });
    eg.forEach((x) =>
      x.e.classList.toggle("hi", !!n && (x.a === n || x.b === n)),
    );
    $("#gInfo").textContent = n ? n.txt : "Select a node.";
  }
  let on = true,
    run = false;
  new IntersectionObserver((e) => {
    on = e[0].isIntersecting;
    on && !reduce && !run && requestAnimationFrame(tick);
  }).observe(g);
  function tick(t) {
    run = true;
    Object.values(nodes).forEach((n) => {
      n.x = n.bx + (reduce ? 0 : Math.sin(t / 1100 + n.ph) * 5);
      n.y = n.by + (reduce ? 0 : Math.cos(t / 1300 + n.ph) * 5);
      n.g.setAttribute(
        "transform",
        `translate(${n.x.toFixed(1)},${n.y.toFixed(1)})`,
      );
    });
    eg.forEach((x) => {
      x.e.setAttribute("x1", x.a.x);
      x.e.setAttribute("y1", x.a.y);
      x.e.setAttribute("x2", x.b.x);
      x.e.setAttribute("y2", x.b.y);
    });
    if (on && !reduce) requestAnimationFrame(tick);
    else run = false;
  }
  tick(0);
})();

// career/training chart
(function () {
  const g = $("#gantt"),
    X = (t) => 60 + (t - 2021) * (800 / 6),
    NOW = 2026.87;
  let h = "";
  for (let y = 2021; y <= 2027; y++)
    h += `<path d="M${X(y)} 20V236" stroke="rgba(0,229,255,.15)"/><text x="${X(y)}" y="252" text-anchor="middle">${y}</text>`;
  const bars = [
    [2021.42, 2021.92, 28, "Intern", "#00C8D7", 1],
    [2023.08, 2025.25, 60, "Process Engineering Staff", "#00E5FF", 1],
    [
      2025.25,
      2025.75,
      92,
      "Equipment Eng. Supervisor (delegated)",
      "#00C8D7",
      0.5,
    ],
    [2025.75, NOW, 92, "", "#00E5FF", 1],
    [2026.67, NOW, 124, "Systems Eng. Supervisor", "#00FFD1", 1],
  ];
  bars.forEach(([a, b, y, l, c, o]) => {
    h += `<g class="bar"><rect x="${X(a)}" y="${y}" width="${X(b) - X(a)}" height="22" rx="3" fill="${c}" opacity="${o}"/><title>${l || "Equipment Eng. Supervisor (actual from Oct 2025)"}</title></g>${l ? `<text x="${X(a) > 600 ? X(a) - 6 : X(b) + 6}" y="${y + 15}" text-anchor="${X(a) > 600 ? "end" : "start"}">${l}</text>` : ""}`;
  });
  h += `<path d="M${X(2023)} 160l8 8-8 8-8-8z" fill="#00FFD1"/><text x="${X(2023) + 14}" y="172">BSIE · 2023</text>`;
  const used = {};
  DOTS.forEach(([t, l]) => {
    const k = Math.floor(t),
      i = (used[k] = (used[k] ?? -1) + 1);
    h += `<circle cx="${X(t)}" cy="${192 + i * 14}" r="4" fill="#00FFD1"/><text x="${X(t) + 8}" y="${195 + i * 14}">${l}</text>`;
  });
  h += `<path d="M${X(NOW)} 16V236" stroke="#00FFD1" stroke-dasharray="4 3"/><text x="${X(NOW) - 4}" y="14" text-anchor="end" fill="#00FFD1">NOW</text>`;
  g.innerHTML = h;
})();

// DMAIC loop
(function () {
  const s = $("#loop"),
    arcs = [];
  const pt = (a, r) => [200 + r * Math.cos(a), 200 + r * Math.sin(a)];
  LOOP.forEach(([k], i) => {
    const a0 = ((i * 72 - 90 + 5) * Math.PI) / 180,
      a1 = (((i + 1) * 72 - 90 - 5) * Math.PI) / 180,
      [x0, y0] = pt(a0, 140),
      [x1, y1] = pt(a1, 140),
      [tx, ty] = pt((a0 + a1) / 2, 178);
    arcs.push(
      el(
        "path",
        { class: "arc", d: `M${x0} ${y0}A140 140 0 0 1 ${x1} ${y1}` },
        s,
      ),
    );
    const t = el("text", { x: tx, y: ty + 7 }, s);
    t.textContent = k;
  });
  const c = el("text", { x: 200, y: 208 }, s);
  c.textContent = "DMAIC";
  c.style.fontSize = "26px";
  $("#loopList").innerHTML = LOOP.map(
    ([k, n, d]) => `<li><b>${n}</b>${d}</li>`,
  ).join("");
  const li = $$("#loopList li");
  let i = 0;
  const set = (n) => {
    i = n;
    arcs.forEach((a, j) => a.classList.toggle("on", j === n));
    li.forEach((l, j) => l.classList.toggle("on", j === n));
  };
  li.forEach((l, j) => l.addEventListener("click", () => set(j)));
  set(0);
  if (!reduce) setInterval(() => set((i + 1) % 5), 2200);
})();

// reveal + counters
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target;
      t.classList.add("in");
      $$(".count", t).forEach(count);
      io.unobserve(t);
    }),
  { threshold: 0.15 },
);
$$(".reveal").forEach((x) => io.observe(x));
function count(c) {
  const to = +c.dataset.to,
    suf = c.dataset.suffix || "";
  if (reduce) {
    c.textContent = to + suf;
    return;
  }
  const t0 = performance.now();
  (function f(t) {
    const k = Math.min((t - t0) / 1400, 1);
    c.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
    k < 1 && requestAnimationFrame(f);
  })(t0);
}

// nav, progress, to-top, cursor readout, form
const links = $$("#menu a:not(.cta-nav)"),
  ind = $("#navInd");
const moveInd = (a) => {
  if (!a || innerWidth <= 760) return;
  const r = a.getBoundingClientRect();
  ind.style.left = r.left + "px";
  ind.style.width = r.width + "px";
};
const so = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((l) => {
          const on = l.hash === "#" + e.target.id;
          l.classList.toggle("on", on);
          on && moveInd(l);
        });
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
["about", "network", "projects", "lab", "tools", "record"].forEach((i) =>
  so.observe(document.getElementById(i)),
);
$("#burger").onclick = (e) => {
  const o = $("#menu").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", o);
};
$$("#menu a").forEach((a) =>
  a.addEventListener("click", () => {
    $("#menu").classList.remove("open");
    $("#burger").setAttribute("aria-expanded", false);
  }),
);
const topB = $("#toTop"),
  prog = $("#prog");
addEventListener(
  "scroll",
  () => {
    topB.classList.toggle("show", scrollY > 700);
    prog.style.width =
      (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100 +
      "%";
  },
  { passive: true },
);
topB.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
$("#yr").textContent = new Date().getFullYear();
const xy = $("#xy");
if (matchMedia("(pointer:fine)").matches)
  addEventListener(
    "pointermove",
    (e) => {
      xy.style.left = Math.round(e.clientX) + "px";
      xy.style.top = e.clientY + "px";
      xy.textContent = `X ${String(Math.round(e.clientX)).padStart(4, "0")}  Y ${String(Math.round(e.clientY + scrollY)).padStart(4, "0")}`;
    },
    { passive: true },
  );
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target,
    m = $("#formMsg");
  if (!f.checkValidity()) {
    m.textContent = "Please complete all fields with a valid email.";
    f.reportValidity();
    return;
  }
  const d = new FormData(f);
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(d.get("subject"))}&body=${encodeURIComponent(d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")")}`;
  m.textContent =
    "Your email app should open. If not, email " + CONFIG.email + " directly.";
});

// hero node-network canvas (reacts to cursor)
(function () {
  const c = $("#net"),
    x = c.getContext("2d");
  let w,
    h,
    ps = [],
    m = { x: -999, y: -999 },
    on = true,
    run = false;
  function size() {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;
    ps = Array.from({ length: Math.min(80, ((w * h) / 16000) | 0) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }
  function draw() {
    run = true;
    x.clearRect(0, 0, w, h);
    ps.forEach((p, i) => {
      p.x = (p.x + p.vx + w) % w;
      p.y = (p.y + p.vy + h) % h;
      for (let j = i + 1; j < ps.length; j++) {
        const q = ps[j],
          d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) {
          x.strokeStyle = `rgba(0,229,255,${0.28 * (1 - d / 130)})`;
          x.beginPath();
          x.moveTo(p.x, p.y);
          x.lineTo(q.x, q.y);
          x.stroke();
        }
      }
      const dm = Math.hypot(p.x - m.x, p.y - m.y);
      if (dm < 170) {
        x.strokeStyle = `rgba(0,255,209,${0.6 * (1 - dm / 170)})`;
        x.beginPath();
        x.moveTo(p.x, p.y);
        x.lineTo(m.x, m.y);
        x.stroke();
      }
      x.fillStyle = "rgba(0,229,255,.8)";
      x.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
    });
    if (on && !reduce) requestAnimationFrame(draw);
    else run = false;
  }
  size();
  addEventListener("resize", size);
  c.parentElement.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    m = { x: e.clientX - r.left, y: e.clientY - r.top };
  });
  new IntersectionObserver((e) => {
    on = e[0].isIntersecting;
    on && !run && requestAnimationFrame(draw);
  }).observe(c);
  draw();
})();
