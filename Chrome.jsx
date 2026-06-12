/* Website kit — Header + Footer chrome */

function SiteHeader({ current, onNav }) {
  const { Button } = window.OpenCreditScoringDesignSystem_c2a623;
  const nav = [
  { id: 'research', label: 'Research' },
  { id: 'standards', label: 'Standards' },
  { id: 'governance', label: 'Governance' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }];

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="site-logo" href="#top" onClick={(e) => {e.preventDefault();onNav('home');}}>
          <img src="assets/ocs-mark-color.svg" width="34" height="34" alt="OCS" />
          <span className="wm">
            <span className="nm">Open Credit Scoring</span>
          </span>
        </a>
        <nav className="site-nav">
          {nav.map((n) =>
          <a key={n.label} href={`#${n.id}`} className={current === n.id ? 'is-active' : ''} onClick={(e) => {e.preventDefault();onNav(n.id);}}>{n.label}</a>
          )}
        </nav>
        <div className="spacer" />
        <div className="actions">
          <a className="icon-btn" aria-label="Contact" href="#contact" onClick={(e) => {e.preventDefault();onNav('contact');}}><LucideIcon name="mail" size={17} /></a>
        </div>
      </div>
    </header>);

}

function SiteFooter() {

  return (
    <footer className="site-footer">
      <div className="wrap cols">
        <div>
          <a className="site-logo" href="#top" style={{ marginBottom: 16 }}>
            <img src="assets/ocs-mark-color.svg" width="34" height="34" alt="OCS" />
            <span className="wm">
              <span className="nm">Open Credit Scoring</span>
            </span>
          </a>
          <p style={{ color: 'var(--ink-700)', fontSize: 14, maxWidth: '34ch', lineHeight: 1.6 }}>Establishing the Mathematical Foundations for Trustworthy Credit Decisions

          </p>
        </div>
      </div>
      <div className="wrap colophon">
        <span>© 2026 Open Decisions Consortium</span>
      </div>
    </footer>);

}

Object.assign(window, { SiteHeader, SiteFooter });