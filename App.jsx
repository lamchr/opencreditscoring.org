const SECTIONS = ['top', 'standards', 'research', 'governance', 'about', 'contact'];
const HEADER_OFFSET = 64;

function App() {
  const [current, setCurrent] = React.useState('home');

  const nav = (id) => {
    const targetId = id === 'home' ? 'top' : id;
    const el = document.getElementById(targetId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id === 'top' ? 'home' : e.target.id;
          setCurrent(id);
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="site" style={{ minHeight: '100vh' }}>
      <SiteHeader current={current} onNav={nav} />
      <Page onNav={nav} />
      <SiteFooter />
    </div>
  );
}

function mount() {
  if (!(window.Page && window.SiteHeader && window.OpenCreditScoringDesignSystem_c2a623)) {
    return setTimeout(mount, 30);
  }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

mount();
