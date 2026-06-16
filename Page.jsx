/* Website kit — single-page composition (Home · Standards · Research · About) */

function renderCap(html) {
  if (!html) return null;
  const re = /<strong( style="[^"]*")?>([\s\S]*?)<\/strong>/g;
  const out = [];let last = 0,m,k = 0;
  while (m = re.exec(html)) {
    if (m.index > last) out.push(html.slice(last, m.index));
    const red = m[1] && m[1].indexOf('color') !== -1;
    out.push(React.createElement('strong', { key: k++, style: red ? { color: 'var(--red-600)' } : undefined }, m[2]));
    last = re.lastIndex;
  }
  if (last < html.length) out.push(html.slice(last));
  return out;
}

const FORMSPREE_CONTACT_ENDPOINT = 'https://formspree.io/f/maqzkoap';
const KIT_NEWSLETTER_ENDPOINT = 'https://app.kit.com/forms/9572303/subscriptions';
const KIT_NEWSLETTER_TARGET = 'kit-newsletter-target';

async function submitContactForm(form) {
  const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(form)
  });

  if (!response.ok) {
    throw new Error('Contact form submission failed');
  }
}

function Page({ onNav }) {
  const DS = window.OpenCreditScoringDesignSystem_c2a623;
  const { Button, Eyebrow, Card, Tag, StdRef, CausalBayesNet, Tabs, Select, Callout, TextField } = DS;
  const [sent, setSent] = React.useState(false);
  const [contactError, setContactError] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const standards = [
  { id: 'OCS-1', title: 'Probability Calibration for Credit Models', desc: 'How to measure and report whether predicted default probabilities can be believed.', status: 'stable', version: 'v2.0' },
  { id: 'OCS-2', title: 'Reproducible Scoring Pipelines', desc: 'End-to-end documentation so any third party can rerun a credit model.', status: 'stable', version: 'v1.2' },
  { id: 'OCS-3', title: 'Fairness Under Distribution Shift', desc: 'Auditing disparate impact when the applicant population drifts over time.', status: 'review', version: 'rc.3' },
  { id: 'OCS-4', title: 'Model Cards for Lending', desc: 'A disclosure format for the intended use, data, and limits of a scoring model.', status: 'draft', version: 'rc.1' }];

  const statusVariant = { stable: 'ok', review: 'warn', draft: 'default' };

  const diCbn = {
    nodes: [
    { id: 'A', letter: 'A', label: ['Protected', 'Attribute'], variant: 'ink' },
    { id: 'W', letter: 'W', label: ['Credit-', 'worthiness'], variant: 'hollow' },
    { id: 'X', letter: 'X', label: ['Applicant', 'Data'], variant: 'accent' },
    { id: 'D', letter: 'D', label: ['Credit', 'Decision'], variant: 'accent' },
    { id: 'Y', letter: 'Y', label: ['Credit', 'Default'], variant: 'accent' }],
    edges: [
    { from: 'A', to: 'W' },
    { from: 'X', to: 'D', accent: true },
    { from: 'D', to: 'Y', accent: true },
    { from: 'W', to: 'Y', curve: 'over' },
    { from: 'A', to: 'X', curve: 'under', accent: true, arc: 60 }]
  };

  const adCbn = {
    nodes: [
    { id: 'A', letter: 'A', label: ['Protected', 'Attribute'], variant: 'accent' },
    { id: 'Z', letter: 'Z', label: ['Demo-', 'graphics'], variant: 'hollow' },
    { id: 'W', letter: 'W', label: ['Credit-', 'worthiness'], variant: 'hollow' },
    { id: 'Y', letter: 'Y', label: ['Credit', 'Default'], variant: 'ink' }],
    edges: [
    { from: 'A', to: 'Z', accent: true },
    { from: 'Z', to: 'W' },
    { from: 'W', to: 'Y' },
    { from: 'A', to: 'W', curve: 'over', arc: 92, accent: true }]
  };

  const agCbn = {
    nodes: [
    { id: 'A', letter: 'A', label: ['Applicant', 'Data'], variant: 'ink' },
    { id: 'G', letter: 'G', label: ['AI', 'Agent'], variant: 'accent' },
    { id: 'O', letter: 'O', label: ['Human', 'Oversight'], variant: 'hollow' },
    { id: 'D', letter: 'D', label: ['Credit', 'Decision'], variant: 'accent' },
    { id: 'Y', letter: 'Y', label: ['Credit', 'Default'], variant: 'ink' }],
    edges: [
    { from: 'A', to: 'G' },
    { from: 'G', to: 'O' },
    { from: 'O', to: 'D' },
    { from: 'D', to: 'Y' },
    { from: 'G', to: 'D', curve: 'over', accent: true, arc: 60 }]
  };

  const sfNodes = [
  { id: 'A', letter: 'A', label: ['Protected', 'Attribute'], variant: 'ink' },
  { id: 'W', letter: 'W', label: ['Credit-', 'worthiness'], variant: 'hollow' },
  { id: 'X', letter: 'X', label: ['Applicant', 'Data'], variant: 'ink' },
  { id: 'D', letter: 'D', label: ['Credit', 'Decision'], variant: 'accent' },
  { id: 'Y', letter: 'Y', label: ['Credit', 'Default'], variant: 'accent' }];

  const projects = [
  { n: 'Research Project 1', title: 'Proxy Discrimination in Alternative Data',
    cbn: adCbn,
    q: 'When does alternative data improve credit access, and when does it act as a proxy for protected characteristics?',
    p: 'Develop causal methods to distinguish legitimate predictors of creditworthiness from discriminatory proxies.',
    cap: '<strong>Digital Redlining.</strong> Modeling proxy discrimination using a causal Bayesian network. Demographics (Z) has a <strong style="color:var(--red-600)">spurious effect</strong> on creditworthiness (W) through the protected attribute (A), which acts as a confounding variable.' },
  { n: 'Research Project 2', cbn: diCbn, title: 'Sources of Disparate Impact',
    q: 'What causes disparate impact in AI credit decisions, and how can those causes be addressed?',
    p: 'Develop causal and system dynamics models to identify the sources of disparate impact and evaluate potential interventions.',
    cap: '<strong>Disparate Impact.</strong> Modeling unintentional discrimination using a causal Bayesian network. The protected attribute (A) has an <strong style="color:var(--red-600)">indirect negative effect</strong> on the credit decision (D) through the inclusion of invalid applicant data (X).' },
  { n: 'Research Project 3', title: 'Trustworthy AI Credit Underwriting',
    flow: [
    { k: 'Agentic AI', r: 'Automation' },
    { k: 'Generative AI', r: 'Reasoning' },
    { k: 'Causal AI', r: 'Decisioning', accent: true }],
    inLabel: 'Applicant Data', outLabel: 'Credit Decision',
    q: 'How can lenders responsibly automate credit underwriting using generative and agentic AI?',
    p: 'Develop methods that combine causal, generative, and agentic AI while preserving accuracy, explainability, and trust.',
    cap: '<strong>Underwriting Pipeline.</strong> A reference architecture for AI-enabled underwriting where agentic AI automates workflows, generative AI interprets applicant information, and <strong>causal AI is responsible for the final credit decision</strong>.' }];

  const stakeholders = [
  { icon: 'building-2', h: 'Industry', tag: 'Translate Research into Real-World Innovation', p: 'Lenders, fintechs, data providers, and technology companies contribute practical expertise, real-world challenges, and implementation experience that help translate research into practical credit solutions.' },
  { icon: 'hand-fist', h: 'Nonprofits', tag: 'Represent Consumer and Community Interests', p: 'Civil-rights organizations, consumer advocates, and community groups help identify risks, evaluate impacts on affected communities, and ensure that new approaches promote fair and trustworthy access to credit.' },
  { icon: 'graduation-cap', h: 'Academia', tag: 'Advance the Science of Credit Scoring', p: 'Researchers contribute new methods in systems thinking, causal inference, machine learning, economics, and law that help establish the scientific foundations of trustworthy credit decisions.' },
  { icon: 'landmark', h: 'Government', tag: 'Promote Safety, Soundness, and Consumer Protection', p: 'Regulators engage with emerging research, technical standards, and industry practices to help promote safety, soundness, consumer protection, and confidence in AI-enabled decision systems.' }];

  // ── Real team & advisors — PRESERVED for recovery. ───────────────────────────
  // Temporarily hidden behind the placeholders below. To restore: delete the two
  // placeholder arrays and rename these back to `team` / `advisors`. Photos are
  // untouched in assets/.
  const teamSaved = [
  { i: 'CL', nm: 'Chris Lam', img: 'assets/chris-lam.jpg', role: 'Founder and CEO\nEpistamai' },
  { i: 'MA', nm: 'Dr. Michael Akinwumi', img: 'assets/michael-akinwumi.jpg', role: 'Chief Responsible AI Officer\nNational Fair Housing Alliance' },
  { i: 'EO', nm: 'Dr. Emmanuel Ogundimu', img: 'assets/emmanuel-ogundimu.jpg', role: 'Associate Professor\nDurham University' }];

  const advisorsSaved = [
  { i: 'JD', nm: 'Dr. Jason Dietrich', img: 'assets/jason-dietrich.jpg', role: 'Former Chief, Compliance Analytics\nConsumer Financial Protection Bureau' }];

  // ── Temporary placeholders shown in the About section. ──────────────────────
  const team = [
  { i: 'CL', nm: 'Chris Lam', img: 'assets/chris-lam.jpg', role: 'Founder and CEO\nEpistamai' },
  { i: '', nm: 'Member name', role: 'Title · Affiliation' },
  { i: '', nm: 'Member name', role: 'Title · Affiliation' },
  { i: '', nm: 'Member name', role: 'Title · Affiliation' }];

  const advisors = [
  { i: '', nm: 'Advisor name', role: 'Title · Affiliation' },
  { i: '', nm: 'Advisor name', role: 'Title · Affiliation' },
  { i: '', nm: 'Advisor name', role: 'Title · Affiliation' },
  { i: '', nm: 'Advisor name', role: 'Title · Affiliation' }];


  const anchor = { scrollMarginTop: 80 };

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="top" className="wrap hero" style={anchor}>
        <div>
          <h1 style={{ fontWeight: "300", maxWidth: "550px" }}>Advancing the Science of Credit Scoring</h1>
          <p className="lead">Open Credit Scoring seeks to establish the scientific foundations for trustworthy credit decisions and support a more open and competitive credit scoring ecosystem.</p>
        </div>
        <figure className="figure" style={{ margin: 0 }}>
          <div className="video-ph">
            <div className="video-ph-btn"><LucideIcon name="play" size={26} /></div>
            <div className="video-ph-label">Explainer video · coming soon</div>
          </div>
          <figcaption>
            <span className="fc-label">video</span>
            <span className="fc-text">What is Open Credit Scoring?</span>
          </figcaption>
        </figure>
      </section>

      {/* ── Research ─────────────────────────────────────────── */}
      <section id="research" className="section-band section-band--tint" style={anchor}>
        <div className="wrap section">
        <div className="section-head">
          <div>
            <h2>Research</h2>
          </div>
        </div>
        <div className="projects">
          {projects.map((p, i) => <div className="project" key={p.title}>
              <div className="pj-text">
                <h3>{p.title}</h3>
                <p className="pj-q">{p.q}</p>
                <p className="pj-p">{p.p}</p>
              </div>
              {p.cbn &&
              <figure className="figure pj-fig">
                <div className="plot" style={{ height: 200 }}><CausalBayesNet {...p.cbn} /></div>
                <figcaption>
                  <span className="fc-label">fig. {i + 1}</span>
                  <span className="fc-text">{renderCap(p.cap)}</span>
                </figcaption>
              </figure>
              }
              {p.flow &&
              <figure className="figure pj-fig">
                <div className="plot" style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', padding: '22px 30px' }}>
                  {[{ term: p.inLabel }, ...p.flow, { term: p.outLabel }].map((it, si, arr) =>
                  <React.Fragment key={it.term || it.k}>
                        {it.term ?
                    <div style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14.5, color: 'var(--ink-600)' }}>{it.term}</div> :

                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                      padding: '11px 15px', border: '1px solid var(--line)', borderRadius: 6,
                      borderLeft: it.accent ? '3px solid var(--blue-700)' : '3px solid var(--ink-900)',
                      background: 'var(--paper-0)' }}>
                          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.1, fontWeight: it.accent ? 600 : 400, whiteSpace: 'nowrap', color: 'var(--ink-900)' }}>{it.k}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: it.accent ? 700 : 400, color: it.accent ? 'var(--blue-700)' : 'var(--ink-500)' }}>{it.r}</span>
                        </div>
                    }
                        {si < arr.length - 1 &&
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 0' }}>
                          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true" style={{ position: 'static', inset: 'auto', width: 10, height: 16, flex: 'none' }}>
                            <path d="M5 0 V14 M1 10 L5 14 L9 10" stroke="var(--ink-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                    }
                      </React.Fragment>
                  )}
                </div>
                <figcaption>
                  <span className="fc-label">fig. {i + 1}</span>
                  <span className="fc-text">{renderCap(p.cap)}</span>
                </figcaption>
              </figure>
              }
            </div>
            )}
        </div>
        </div>
      </section>

      {/* ── Standards ────────────────────────────────────────── */}
      <section id="standards" className="wrap section" style={anchor}>
        <div className="section-head">
          <div>
            <h2>Standards</h2>
          </div>
        </div>
        <div className="std-single">
          <div className="std-single-body">
            <div className="std-single-head">
              <Tag variant="blue" mono square>IEEE P3591</Tag>
              <Tag variant="warn" dot>in development</Tag>
            </div>
            <h3 style={{ fontSize: "28px" }}>Fair Decision Making Through Causal Analysis</h3>
            <p className="std-q" style={{ fontSize: "19px" }}>How can organizations determine whether an AI
credit decision is fair, valid, and legally compliant?</p>
            <p className="std-d" style={{ fontSize: "15px" }}>IEEE P3591 establishes a common framework for evaluating AI systems by connecting concepts from anti-discrimination law, causal inference, and machine learning.</p>
          </div>
          <figure className="figure std-fig">
            <div className="plot" style={{ height: 200 }}><CausalBayesNet nodes={sfNodes} /></div>
            <figcaption>
              <span className="fc-label">FIG. 4

              </span>
              <span className="fc-text">{renderCap('<strong>Standard Fairness Model.</strong> Modeling the causal relationships between variables using a causal Bayesian network. In this example, the protected attribute (A) has a <strong style="color:var(--red-600)">direct negative effect</strong> on the credit decision (D).')}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Governance ───────────────────────────────────────── */}
      <section id="governance" className="section-band section-band--tint" style={anchor}>
        <div className="wrap section" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="section-head">
          <div>
            <h2>Governance</h2>
          </div>
        </div>
        <div className="sec-block">
          <div className="gov-grid">
            <div>
              <h2 style={{ letterSpacing: '-0.03em', lineHeight: 1.06, maxWidth: '1000px', margin: 0, fontSize: "28px", fontWeight: "400" }}>Advancing Science and Trust Through Open Collaboration</h2>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-700)', marginTop: 20 }}>Open Credit Scoring brings together industry, nonprofits, academia, and government to advance the research, standards, and governance needed for trustworthy AI credit decisions.</p>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-700)', marginTop: 16 }}>Our mission is twofold: to establish the scientific foundations of trustworthy credit scoring and to build the collaborative infrastructure needed to support innovation, competition, and trust across the credit ecosystem.</p>
            </div>
            <figure className="figure conv-fig">
              <div className="plot" style={{ height: 300 }}>
                <div className="conv">
                  <svg className="conv-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="50" y1="50" x2="29" y2="32" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="50" y1="50" x2="71" y2="32" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="50" y1="50" x2="29" y2="68" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    <line x1="50" y1="50" x2="71" y2="68" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div className="conv-center"><img src="assets/ocs-loop-navy.svg" width="50" height="50" alt="OCS" /></div>
                  <div className="conv-node n-tl"><span className="ic"><LucideIcon name="building-2" size={38} /></span><span className="lbl">Industry</span></div>
                  <div className="conv-node n-tr"><span className="ic"><LucideIcon name="hand-fist" size={38} /></span><span className="lbl">Nonprofits</span></div>
                  <div className="conv-node n-bl"><span className="ic"><LucideIcon name="graduation-cap" size={38} /></span><span className="lbl">Academia</span></div>
                  <div className="conv-node n-br"><span className="ic"><LucideIcon name="landmark" size={38} /></span><span className="lbl">Government</span></div>
                </div>
              </div>
            </figure>
          </div>
        </div>
        </div>
      </section>

      <section className="section-band section-band--tint">
        <div className="wrap section" style={{ paddingTop: 0 }}>
        <div className="stakeholders">
          {stakeholders.map((sh) => <div className="stakeholder" key={sh.h}>
              <span className="sh-ic"><LucideIcon name={sh.icon} size={32} /></span>
              <h3>{sh.h}</h3>
              <p className="sh-tag">{sh.tag}</p>
              <p>{sh.p}</p>
            </div>)}
        </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="wrap section" style={anchor}>
        <div className="section-head">
          <div>
            <h2>About</h2>
          </div>
        </div>
        <div className="sec-block">
          <h3 className="sub-label" style={{ fontSize: "28px" }}>Founding Team</h3>
          <div className="people">
            {team.map((p, idx) => <div className="person" key={idx}>
                <div className="avatar">{p.img ? <img src={p.img} alt={p.nm} /> : p.i}</div>
                <div>
                  <div className="nm">{p.nm}</div>
                  <div className="role">{p.role}</div>
                </div>
              </div>)}
          </div>
          <h3 className="sub-label" style={{ marginTop: 'var(--space-12)', fontSize: "28px" }}>Advisors</h3>
          <div className="people">
            {advisors.map((p, idx) => <div className="person" key={idx}>
                <div className="avatar">{p.img ? <img src={p.img} alt={p.nm} /> : p.i}</div>
                <div>
                  <div className="nm">{p.nm}</div>
                  <div className="role">{p.role}</div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="section-band section-band--tint" style={anchor}>
        <div className="wrap section">
        <div className="section-head">
          <div>
            <h2>Get Involved</h2>
          </div>
        </div>
        <div className="sec-block">
          <div className="gov-grid">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.12, color: 'var(--ink-900)', margin: 0 }}>Collaborate With Us</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', marginTop: 16, maxWidth: '42ch' }}>We welcome inquiries from researchers, lenders, regulators, nonprofits, and technology providers interested in advancing the science of trustworthy credit decisions.</p>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', marginTop: 12, maxWidth: '42ch' }}>Whether you want to collaborate on research, contribute to a standard, or participate in governance discussions, we'd like to hear from you.</p>
            </div>
            <div>
              {sent ? <Callout variant="note" title="message received">
                Thank you — we’ve received your note and will be in touch.
              </Callout> : <form name="contact" onSubmit={async (e) => {
                  e.preventDefault();
                  setContactError('');
                  try {
                    await submitContactForm(e.currentTarget);
                    setSent(true);
                  } catch (err) {
                    setContactError('We could not send your message. Please try again in a moment.');
                  }
                }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <input type="hidden" name="_subject" value="Open Credit Scoring inquiry" />
                <TextField label="Name" name="name" placeholder="Jane Researcher" required />
                <TextField label="Work email" name="email" type="email" placeholder="you@institution.org" required />
                <Select label="I’m reaching out about" name="topic" defaultValue="research" options={[
                  { value: 'research', label: 'Research collaboration' },
                  { value: 'standards', label: 'Standards development' },
                  { value: 'governance', label: 'Governance participation' },
                  { value: 'regulatory', label: 'Regulatory engagement' },
                  { value: 'industry', label: 'Industry partnership' },
                  { value: 'media', label: 'Media inquiry' },
                  { value: 'general', label: 'General inquiry' }]} />
                <div className="ocs-field">
                  <label className="ocs-field__label" htmlFor="f-message">Message</label>
                  <textarea id="f-message" name="message" className="ocs-input" rows={4} placeholder="How can we help?" required style={{ resize: 'vertical', fontFamily: 'var(--font-sans)', lineHeight: 1.55 }} />
                </div>
                <div>
                  <Button variant="primary" type="submit">Send Message</Button>
                </div>
                {contactError && <p style={{ margin: 0, color: 'var(--red-600)', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.45 }}>{contactError}</p>}
              </form>
                }
            </div>
          </div>
        </div>
        <div className="sec-block" style={{ marginTop: 'var(--space-12)', borderTop: '1px solid var(--line)', paddingTop: 'var(--space-12)' }}>
          <div className="gov-grid">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 28, letterSpacing: '-0.01em', lineHeight: 1.12, color: 'var(--ink-900)', margin: 0 }}>Newsletter Sign Up</h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', marginTop: 16, maxWidth: '42ch' }}>Receive updates when we publish new research, release draft standards, announce workshops, or open standards for public comment. No marketing.</p>
            </div>
            <div>
              <iframe name={KIT_NEWSLETTER_TARGET} title="Newsletter signup" style={{ display: 'none' }} />
              {subscribed ? <Callout variant="note" title="subscribed">
                Success! Now check your email to confirm your subscription.
              </Callout> : <form
                name="newsletter"
                action={KIT_NEWSLETTER_ENDPOINT}
                method="post"
                target={KIT_NEWSLETTER_TARGET}
                data-sv-form="9572303"
                data-uid="4dece259db"
                data-format="inline"
                data-version="5"
                onSubmit={() => {
                  window.setTimeout(() => setSubscribed(true), 500);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <TextField label="Work email" name="email_address" type="email" placeholder="you@institution.org" required />
                <div>
                  <Button variant="primary" type="submit">Subscribe</Button>
                </div>
              </form>
                }
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>);

}

Object.assign(window, { Page });
