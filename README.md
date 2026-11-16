# Kent Jym Katigbak — Industrial Engineering Portfolio
HTML + CSS + Vanilla JS. No frameworks, build step or external images. Free to reuse (MIT).
Theme: smart-factory / blueprint (cyan on midnight navy). All content comes from the resume only.

## Structure
```
portfolio/
├── index.html      # hero drawing, profile, section shells, contact
├── css/style.css   # theme colors are CSS variables at the top
├── js/script.js    # CONTENT DATA at the top + all interactions
└── assets/
    ├── resume.pdf  # replace with your preferred PDF (keep the name)
    ├── resume.docx
    ├── images/     # your project images
    └── icons/
```

## Run locally
Double-click `index.html`, or run `python3 -m http.server 8000` inside the folder and open http://localhost:8000.
Host free on GitHub Pages, Netlify or Cloudflare Pages.

## Edit content (js/script.js, top of file)
`ROLES` (career + network), `SKILLS` + `ORDER` + `LINKS` (skill network), `PROJECTS` (cards and case studies),
`TOOLS`, `METHODS`, `KPIS`, `TRAIN`, `DOTS` (timeline chart), `LOOP` (DMAIC), `CONFIG.email`.
Text marked `[EDIT]` is a highlighted placeholder for details your resume does not give. Fill or delete it.
Hero text, spec sheet and contact details are in `index.html`.

## Notes
- The MTTR charts use an index (Jan = 100, Dec ≈ 31) derived from your documented 69% reduction. Replace with real values if you wish.
- The Metric Lab uses sample inputs and is labeled as such.
- GitHub: none in your resume. Add `<a href="https://github.com/YOU">GitHub ↗</a>` in the hero `.social` block.
- Project images: replace the mini-blueprint in `THUMB` / `thumb()` with `<img src="assets/images/file.jpg" alt="...">`.
- Contact form: no backend. It opens the visitor's email app via `mailto:`. For real submissions, post the form to Formspree or Web3Forms.
- Fonts load from Google Fonts; system fonts are used offline.
