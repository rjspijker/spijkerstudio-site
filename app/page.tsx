import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spijkerstudio — Apps that do the tedious part",
  description:
    "Spijkerstudio builds focused AI-powered applications that eliminate manual, repetitive work. Real tools. Real problems. Built by doing.",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }

        span[data-tk-editable]:not([class*="icon"]):not([class*="badge"]) {
          display: inline-block; min-height: 1em; min-width: 4px;
        }

        /* ── NAV ── */
        nav {
          position: sticky; top: 0; z-index: 100;
          background: var(--eclipse);
          padding: 0 40px;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
          border-bottom: 2px solid var(--coral);
        }

        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }

        .nav-logo-mark {
          width: 32px; height: 32px;
          background: var(--coral);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }

        .nav-logo-mark svg { width: 18px; height: 18px; fill: white; }

        .nav-logo-name {
          font-size: 16px; font-weight: 700; letter-spacing: -0.3px;
          color: var(--desert);
        }

        .nav-links {
          display: flex; align-items: center; gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-size: 14px; font-weight: 500; color: rgba(248,247,240,0.65);
          text-decoration: none; transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--desert); }

        .nav-cta {
          font-size: 13px; font-weight: 600;
          padding: 8px 20px; border-radius: 6px;
          background: var(--coral); color: white !important;
          text-decoration: none; transition: opacity 0.2s;
        }

        .nav-cta:hover { opacity: 0.88; }

        /* ── HERO ── */
        .hero {
          padding: 96px 40px 80px;
          max-width: 900px; margin: 0 auto;
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; color: var(--coral);
          margin-bottom: 24px;
        }

        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--coral);
        }

        .hero-headline {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -2px; color: var(--eclipse);
          margin-bottom: 28px;
        }

        .hero-headline em {
          font-style: normal; color: var(--coral);
        }

        .hero-body {
          font-size: 19px; font-weight: 400; color: var(--mid);
          max-width: 580px; line-height: 1.65;
          margin-bottom: 20px;
        }

        .hero-body-2 {
          font-size: 16px; font-weight: 400; color: var(--mid);
          max-width: 560px; line-height: 1.65;
        }

        /* ── DIVIDER ── */
        .divider {
          height: 1px; background: var(--border);
          margin: 0 40px;
        }

        /* ── PHILOSOPHY ── */
        .philosophy {
          padding: 72px 40px;
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center;
        }

        .philosophy-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--coral);
          margin-bottom: 16px;
        }

        .philosophy-headline {
          font-size: 32px; font-weight: 800; letter-spacing: -0.8px;
          line-height: 1.15; margin-bottom: 20px;
        }

        .philosophy-body {
          font-size: 16px; color: var(--mid); line-height: 1.7;
          margin-bottom: 16px;
        }

        .philosophy-right {
          display: flex; flex-direction: column; gap: 20px;
        }

        .philosophy-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
        }

        .philosophy-card-title {
          font-size: 20px; font-weight: 800; color: var(--eclipse);
          letter-spacing: -0.3px; margin-bottom: 8px;
        }

        .philosophy-card-body {
          font-size: 14px; color: var(--mid); line-height: 1.6;
        }

        /* ── TOOLS ── */
        .tools-section {
          background: var(--eclipse);
          padding: 80px 40px;
        }

        .tools-inner {
          max-width: 900px; margin: 0 auto;
        }

        .tools-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--coral);
          margin-bottom: 12px;
        }

        .tools-headline {
          font-size: 36px; font-weight: 800; letter-spacing: -0.8px;
          color: var(--desert); margin-bottom: 8px;
        }

        .tools-sub {
          font-size: 16px; color: rgba(248,247,240,0.55);
          margin-bottom: 48px;
        }

        .tools-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .tool-card {
          background: rgba(248,247,240,0.06);
          border: 1px solid rgba(248,247,240,0.1);
          border-radius: 16px;
          padding: 32px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          display: block;
        }

        .tool-card:hover {
          background: rgba(248,247,240,0.1);
          border-color: rgba(248,247,240,0.2);
        }

        .tool-badge {
          display: inline-flex; align-items: center;
          font-size: 11px; font-weight: 700; letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 4px 10px; border-radius: 20px;
          margin-bottom: 20px;
        }

        .badge-pulse  { background: rgba(255,215,53,0.15);  color: var(--butter); }
        .badge-redline { background: rgba(255,80,53,0.15);   color: var(--coral);  }
        .badge-relay  { background: rgba(248,247,240,0.12); color: rgba(248,247,240,0.7); }

        .tool-name {
          font-size: 24px; font-weight: 800; letter-spacing: -0.5px;
          color: var(--desert); margin-bottom: 10px;
        }

        .tool-tagline {
          font-size: 14px; color: rgba(248,247,240,0.5);
          line-height: 1.6; margin-bottom: 24px;
        }

        .tool-link {
          font-size: 13px; font-weight: 600;
          color: var(--coral); text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
        }

        .tool-link::after { content: '→'; }

        /* ── APPROACH ── */
        .approach {
          padding: 80px 40px;
          max-width: 900px; margin: 0 auto;
        }

        .approach-label {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--coral);
          margin-bottom: 12px;
        }

        .approach-headline {
          font-size: 36px; font-weight: 800; letter-spacing: -0.8px;
          margin-bottom: 16px;
        }

        .approach-body {
          font-size: 16px; color: var(--mid); line-height: 1.7;
          max-width: 580px; margin-bottom: 48px;
        }

        .approach-steps {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; background: var(--border); border-radius: 16px;
          overflow: hidden; border: 1px solid var(--border);
        }

        .approach-step {
          background: white; padding: 32px;
        }

        .step-num {
          font-size: 11px; font-weight: 700; letter-spacing: 1.2px;
          text-transform: uppercase; color: var(--coral);
          margin-bottom: 12px;
        }

        .step-title {
          font-size: 17px; font-weight: 700; margin-bottom: 8px;
        }

        .step-body {
          font-size: 14px; color: var(--mid); line-height: 1.6;
        }

        /* ── FOOTER ── */
        footer {
          background: var(--eclipse);
          padding: 48px 40px;
          border-top: 2px solid var(--coral);
        }

        .footer-inner {
          max-width: 900px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
        }

        .footer-brand {
          font-size: 18px; font-weight: 800; color: var(--desert);
          letter-spacing: -0.3px;
        }

        .footer-tagline {
          font-size: 13px; color: rgba(248,247,240,0.4);
          margin-top: 4px;
        }

        .footer-contact {
          font-size: 14px; color: rgba(248,247,240,0.6);
        }

        .footer-contact a {
          color: var(--coral); text-decoration: none;
        }

        .footer-contact a:hover { text-decoration: underline; }

        .footer-copy {
          font-size: 12px; color: rgba(248,247,240,0.3);
          margin-top: 32px; padding-top: 24px;
          border-top: 1px solid rgba(248,247,240,0.08);
          max-width: 900px; margin: 32px auto 0;
        }

        @media (max-width: 768px) {
          nav { padding: 0 20px; }
          .hero { padding: 60px 20px 48px; }
          .hero-headline { letter-spacing: -1px; }
          .philosophy { grid-template-columns: 1fr; gap: 40px; padding: 48px 20px; }
          .tools-section { padding: 60px 20px; }
          .tools-grid { grid-template-columns: 1fr; }
          .approach { padding: 60px 20px; }
          .approach-steps { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; gap: 24px; text-align: center; }
          .divider { margin: 0 20px; }
        }
      `}</style>

      <nav data-tk-block="nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-mark">
            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="6" height="6" rx="1.5" />
              <rect x="10" y="2" width="6" height="6" rx="1.5" />
              <rect x="2" y="10" width="6" height="6" rx="1.5" />
              <rect x="10" y="10" width="6" height="6" rx="1.5" opacity="0.4" />
            </svg>
          </div>
          <span className="nav-logo-name" data-tk-editable="nav-logo-name">Spijkerstudio</span>
        </Link>
        <ul className="nav-links">
          <li><a href="#tools" data-tk-editable="nav-link-tools">Tools</a></li>
          <li><a href="#approach" data-tk-editable="nav-link-approach">Approach</a></li>
          <li><a href="mailto:robert@spijkerdigital.com" className="nav-cta" data-tk-editable="nav-link-contact">Get in touch</a></li>
        </ul>
      </nav>

      <section className="hero" data-tk-block="hero">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-dot"></div>
          <span data-tk-editable="hero-eyebrow-label">AI-powered productivity tools</span>
        </div>
        <h1 className="hero-headline">
          <span data-tk-editable="hero-headline-line1">Apps that do</span><br />
          <em><span data-tk-editable="hero-headline-em">the tedious part.</span></em>
        </h1>
        <p className="hero-body">
          <span data-tk-editable="hero-body-main">Spijkerstudio builds focused, practical applications that eliminate the manual, repetitive work that slows down small teams. Each tool solves one problem — and solves it well.</span>
        </p>
        <p className="hero-body-2">
          <span data-tk-editable="hero-body-sub">Built with AI. Refined through real use. Constantly improving.</span>
        </p>
      </section>

      <div className="divider"></div>

      <section className="philosophy" data-tk-block="philosophy">
        <div data-tk-block="philosophy-left">
          <p className="philosophy-label" data-tk-editable="philosophy-label">Our philosophy</p>
          <h2 className="philosophy-headline">
            <span data-tk-editable="philosophy-headline">Learn by building. Ship by doing.</span>
          </h2>
          <p className="philosophy-body">
            <span data-tk-editable="philosophy-body-1">Every tool at Spijkerstudio starts as a real problem someone on the team actually has. We don&#39;t build hypothetically — we build because the alternative (doing it manually) is worse.</span>
          </p>
          <p className="philosophy-body">
            <span data-tk-editable="philosophy-body-2">AI accelerates every part of this: ideation, design, development, and refinement. The result is a small studio that punches above its weight — producing production-grade tools fast, and improving them continuously.</span>
          </p>
        </div>
        <div className="philosophy-right" data-tk-block="philosophy-right">
          <div className="philosophy-card" data-tk-block="philosophy-card-1">
            <div className="philosophy-card-title" data-tk-editable="philosophy-card-1-title">One tool, one job</div>
            <div className="philosophy-card-body" data-tk-editable="philosophy-card-1-body">Each application is scoped tightly. No feature creep. No kitchen-sink dashboards. A tool that does one thing well is more valuable than one that does ten things poorly.</div>
          </div>
          <div className="philosophy-card" data-tk-block="philosophy-card-2">
            <div className="philosophy-card-title" data-tk-editable="philosophy-card-2-title">Real problems only</div>
            <div className="philosophy-card-body" data-tk-editable="philosophy-card-2-body">Every tool started as a genuine pain point. We build because the manual alternative was slow, error-prone, or just annoying. That keeps the scope honest and the solution grounded.</div>
          </div>
          <div className="philosophy-card" data-tk-block="philosophy-card-3">
            <div className="philosophy-card-title" data-tk-editable="philosophy-card-3-title">Ship, learn, improve</div>
            <div className="philosophy-card-body" data-tk-editable="philosophy-card-3-body">Tools ship early and improve with use. Real workflows reveal what matters. We iterate based on what&#39;s actually painful, not what looks good in a planning document.</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="tools-section" id="tools" data-tk-block="tools">
        <div className="tools-inner">
          <p className="tools-label" data-tk-editable="tools-label">The tools</p>
          <h2 className="tools-headline" data-tk-editable="tools-headline">Three tools. Three problems solved.</h2>
          <p className="tools-sub" data-tk-editable="tools-sub">Each built for a specific workflow. Each available to try.</p>
          <div className="tools-grid" data-tk-block="tools-grid">

            <a href="https://pulse.spijkerstudio.com" className="tool-card" data-tk-block="tool-card-pulse">
              <span className="tool-badge badge-pulse" data-tk-editable="tool-badge-pulse">Task management</span>
              <div className="tool-name" data-tk-editable="tool-name-pulse">Pulse</div>
              <p className="tool-tagline" data-tk-editable="tool-tagline-pulse">A personal command center for people who manage work across multiple projects. Fast triage, clear priorities, nothing slips.</p>
              <span className="tool-link" data-tk-editable="tool-link-pulse">Open Pulse</span>
            </a>

            <a href="https://redline.spijkerstudio.com" className="tool-card" data-tk-block="tool-card-redline">
              <span className="tool-badge badge-redline" data-tk-editable="tool-badge-redline">Document review</span>
              <div className="tool-name" data-tk-editable="tool-name-redline">Redline</div>
              <p className="tool-tagline" data-tk-editable="tool-tagline-redline">Collaborative HTML document review with AI-assisted revisions. Collect feedback, apply changes, publish new versions — without email chains.</p>
              <span className="tool-link" data-tk-editable="tool-link-redline">Open Redline</span>
            </a>

            <a href="https://relay.spijkerstudio.com" className="tool-card" data-tk-block="tool-card-relay">
              <span className="tool-badge badge-relay" data-tk-editable="tool-badge-relay">Invoice processing</span>
              <div className="tool-name" data-tk-editable="tool-name-relay">Relay</div>
              <p className="tool-tagline" data-tk-editable="tool-tagline-relay">Forward invoices, confirm with one click, done. AI extracts supplier and date, proposes a filename, and sends it straight to your accounting system.</p>
              <span className="tool-link" data-tk-editable="tool-link-relay">Open Relay</span>
            </a>

          </div>
        </div>
      </section>

      <section className="approach" id="approach" data-tk-block="approach">
        <p className="approach-label" data-tk-editable="approach-label">How we build</p>
        <h2 className="approach-headline" data-tk-editable="approach-headline">Fast, focused, and built to last</h2>
        <p className="approach-body">
          <span data-tk-editable="approach-body">Every tool follows the same process: define the real problem, design a tight scope, build with AI assistance, and ship to real users as fast as possible.</span>
        </p>
        <div className="approach-steps" data-tk-block="approach-steps">
          <div className="approach-step" data-tk-block="approach-step-1">
            <div className="step-num" data-tk-editable="step-1-num">01 — Define</div>
            <div className="step-title" data-tk-editable="step-1-title">Start with the pain</div>
            <p className="step-body" data-tk-editable="step-1-body">Every tool starts with a specific, recurring frustration. We define the exact workflow that hurts before writing a single line of code.</p>
          </div>
          <div className="approach-step" data-tk-block="approach-step-2">
            <div className="step-num" data-tk-editable="step-2-num">02 — Build</div>
            <div className="step-title" data-tk-editable="step-2-title">AI-accelerated development</div>
            <p className="step-body" data-tk-editable="step-2-body">We use AI throughout the development process — from architecture decisions to implementation. This means faster delivery and more time spent on what matters: the product experience.</p>
          </div>
          <div className="approach-step" data-tk-block="approach-step-3">
            <div className="step-num" data-tk-editable="step-3-num">03 — Refine</div>
            <div className="step-title" data-tk-editable="step-3-title">Improve with real use</div>
            <p className="step-body" data-tk-editable="step-3-body">Tools ship early and improve through actual use. Real workflows surface what matters. We iterate on what&#39;s genuinely painful, not what looked good in a planning document.</p>
          </div>
        </div>
      </section>

      <footer data-tk-block="footer">
        <div className="footer-inner">
          <div data-tk-block="footer-brand">
            <div className="footer-brand" data-tk-editable="footer-brand-name">Spijkerstudio</div>
            <div className="footer-tagline" data-tk-editable="footer-tagline">Building apps with AI. Learning by doing.</div>
          </div>
          <div className="footer-contact" data-tk-block="footer-contact">
            <span data-tk-editable="footer-contact-label">Questions or feedback? </span>
            <a href="mailto:robert@spijkerdigital.com" data-tk-editable="footer-contact-email">robert@spijkerdigital.com</a>
          </div>
        </div>
        <div className="footer-copy" data-tk-block="footer-copy">
          <span data-tk-editable="footer-copy-text">&copy; 2026 Spijkerstudio. Built in the Netherlands.</span>
        </div>
      </footer>
    </>
  );
}
