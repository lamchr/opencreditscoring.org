/* Website kit — Header + Footer chrome */

function SiteHeader({ current, onNav }) {
  const { Button } = window.OpenCreditScoringDesignSystem_c2a623;
  const nav = [
  { id: 'research', label: 'Research' },
  { id: 'standards', label: 'Standards' },
  { id: 'governance', label: 'Governance' },
  { id: 'about', label: 'About' }];

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="site-logo" href="#top" onClick={(e) => {e.preventDefault();onNav('home');}}>
          <img src="assets/ocs-loop-white.svg" width="34" height="34" alt="OCS" />
          <span className="wm">
            <span className="nm">Open Credit Scoring</span>
          </span>
        </a>
        <div className="spacer" />
        <nav className="site-nav">
          {nav.map((n) =>
          <a key={n.label} href={`#${n.id}`} className={current === n.id ? 'is-active' : ''} onClick={(e) => {e.preventDefault();onNav(n.id);}}>{n.label}</a>
          )}
          <Button variant="accent" href="#contact" onClick={(e) => {e.preventDefault();onNav('contact');}} style={{ marginLeft: 'var(--space-3)', color: 'var(--paper-0)', padding: '10px 18px' }}>Get Involved</Button>
        </nav>
      </div>
    </header>);

}

function SiteFooter() {

  return (
    <footer className="site-footer">
      <div className="wrap cols">
        <div>
          <a className="site-logo" href="#top" style={{ marginBottom: 16 }}>
            <img src="assets/ocs-loop-white.svg" width="34" height="34" alt="OCS" />
            <span className="wm">
              <span className="nm">Open Credit Scoring</span>
            </span>
          </a>
          <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: 14, maxWidth: '34ch', lineHeight: 1.6 }}>Establishing the Mathematical Foundations for Trustworthy Credit Decisions

          </p>
        </div>
      </div>
      <div className="wrap colophon">
        <span>© 2026 Open Decisions Consortium</span>
      </div>
    </footer>);

}

Object.assign(window, { SiteHeader, SiteFooter });