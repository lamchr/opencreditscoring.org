/* Website kit — Header + Footer chrome */

function SiteHeader({
  current,
  onNav
}) {
  const {
    Button
  } = window.OpenCreditScoringDesignSystem_c2a623;
  const nav = [{
    id: 'research',
    label: 'Research'
  }, {
    id: 'standards',
    label: 'Standards'
  }, {
    id: 'governance',
    label: 'Governance'
  }, {
    id: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "site-logo",
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/ocs-loop-white.svg",
    width: "34",
    height: "34",
    alt: "OCS"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Open Credit Scoring"))), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: `#${n.id}`,
    className: current === n.id ? 'is-active' : '',
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    },
    style: {
      marginLeft: 'var(--space-3)',
      color: 'var(--paper-0)',
      padding: '10px 18px'
    }
  }, "Get Involved"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "site-logo",
    href: "#top",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/ocs-loop-white.svg",
    width: "34",
    height: "34",
    alt: "OCS"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Open Credit Scoring"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255, 255, 255, 0.75)',
      fontSize: 14,
      maxWidth: '34ch',
      lineHeight: 1.6
    }
  }, "Establishing the Mathematical Foundations for Trustworthy Credit Decisions"))), /*#__PURE__*/React.createElement("div", {
    className: "wrap colophon"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Open Decisions Consortium")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});