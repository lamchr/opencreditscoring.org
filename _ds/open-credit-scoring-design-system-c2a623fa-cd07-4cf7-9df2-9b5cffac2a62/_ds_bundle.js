/* @ds-bundle: {"format":3,"namespace":"OpenCreditScoringDesignSystem_c2a623","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StdRef","sourcePath":"components/core/Tag.jsx"},{"name":"CausalBayesNet","sourcePath":"components/data/CausalBayesNet.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"457a8515d23a","components/core/Card.jsx":"440d823085ee","components/core/Eyebrow.jsx":"8275ef05760f","components/core/Tag.jsx":"708ae1f246f8","components/data/CausalBayesNet.jsx":"c72d1622a6d1","components/data/Stat.jsx":"ec52719cb3db","components/feedback/Callout.jsx":"546595229054","components/forms/Select.jsx":"c54e5ac7f9bd","components/forms/TextField.jsx":"5961efb54eaf","components/navigation/Tabs.jsx":"993a1384fbee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpenCreditScoringDesignSystem_c2a623 = window.OpenCreditScoringDesignSystem_c2a623 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control for Open Credit Scoring.
 * Renders a <button> by default, or an <a> when `href` is supplied.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  href,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['ocs-btn', `ocs-btn--${variant}`, size === 'sm' ? 'ocs-btn--sm' : size === 'lg' ? 'ocs-btn--lg' : '', block ? 'ocs-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-btn__icon",
    "aria-hidden": "true"
  }, iconLeft) : null, children != null ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-btn__icon",
    "aria-hidden": "true"
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    type: type,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a quiet content surface. Flat by default (hairline border, no shadow);
 * raise only for genuinely floating UI or interactive tiles.
 */
function Card({
  variant = 'flat',
  interactive = false,
  rule = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const classes = ['ocs-card', `ocs-card--${variant}`, interactive ? 'ocs-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), rule ? /*#__PURE__*/React.createElement("hr", {
    className: "ocs-card__rule"
  }) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the brand's signature mono kicker: a small uppercase tracked label
 * placed above a heading. Accepts dot-separated metadata as children.
 */
function Eyebrow({
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['ocs-eyebrow', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a compact label for status, category, or metadata.
 * For standard identifiers (OCS-2) prefer `mono square` or the StdRef helper.
 */
function Tag({
  variant = 'default',
  square = false,
  mono = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['ocs-tag', variant !== 'default' ? `ocs-tag--${variant}` : '', square ? 'ocs-tag--square' : '', mono ? 'ocs-tag--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-tag__dot",
    "aria-hidden": "true"
  }) : null, children);
}

/**
 * StdRef — the mono chip used for a numbered standard identifier, e.g. OCS-2.
 */
function StdRef({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ocs-stdref-chip', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Tag, StdRef });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CausalBayesNet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const INK = 'var(--ink-900, #15181E)';
const ACCENT = 'var(--red-600, #A52A39)';
const PAPER = 'var(--paper-0, #FFFFFF)';

/** Default graph: the fairness DAG. A protected attribute A acts through
 *  creditworthiness W, observed as data X, on the credit decision D and the
 *  realized default Y. The decision→default path and the direct A→D bias
 *  path are drawn in the cardinal accent. */
const DEFAULT_NODES = [{
  id: 'A',
  letter: 'A',
  label: ['Protected', 'Attribute'],
  variant: 'ink'
}, {
  id: 'W',
  letter: 'W',
  label: ['Credit-', 'worthiness'],
  variant: 'hollow'
}, {
  id: 'X',
  letter: 'X',
  label: 'Data',
  variant: 'ink'
}, {
  id: 'D',
  letter: 'D',
  label: ['Credit', 'Decision'],
  variant: 'accent'
}, {
  id: 'Y',
  letter: 'Y',
  label: ['Credit', 'Default'],
  variant: 'accent'
}];
const DEFAULT_EDGES = [{
  from: 'A',
  to: 'W'
}, {
  from: 'W',
  to: 'X'
}, {
  from: 'X',
  to: 'D'
}, {
  from: 'D',
  to: 'Y',
  accent: true
}, {
  from: 'W',
  to: 'Y',
  curve: 'over'
}, {
  from: 'A',
  to: 'D',
  curve: 'under',
  accent: true
}];

/**
 * CausalBayesNet — a single-row causal Bayesian network (DAG) drawn in the
 * brand's "scholarly instrument" style: small dots, italic serif node letters,
 * a serif caption per node, thin stealth arrowheads, and broad 45° arcs for
 * non-adjacent edges. Nodes are auto-spaced left→right; `over`/`under` edges
 * arc above/below the row. Defaults render the OCS fairness DAG.
 */
function CausalBayesNet({
  nodes = DEFAULT_NODES,
  edges = DEFAULT_EDGES,
  arc = 92,
  radius = 9,
  letterSize = 30,
  labelSize = 22,
  width = 660,
  padX = 70,
  className = '',
  ...rest
}) {
  const cy = 104;
  const n = nodes.length;
  const idx = {};
  nodes.forEach((nd, i) => {
    idx[nd.id] = i;
  });
  const xOf = i => n <= 1 ? width / 2 : padX + i * (width - 2 * padX) / (n - 1);
  const xId = id => xOf(idx[id]);
  const s = +(radius * 0.7071).toFixed(2); // node-edge offset on the 45° diagonal

  const maxLines = Math.max(1, ...nodes.map(nd => Array.isArray(nd.label) ? nd.label.length : 1));
  const lineGap = Math.round(labelSize * 1.16);
  const letterY = cy + radius + Math.round(letterSize * 0.75);
  const labelY = Math.round(cy + s + 0.72 * arc + 30); // sits clear below the under-arc dip
  const minY = Math.min(0, Math.round(cy - s - arc - 4));
  const maxY = labelY + (maxLines - 1) * lineGap + Math.round(labelSize * 0.4) + 10;
  const colOf = accent => accent ? ACCENT : INK;
  const markerOf = accent => accent ? 'url(#cbn-acc)' : 'url(#cbn-ink)';
  const renderEdge = (e, i) => {
    const x1 = xId(e.from);
    const x2 = xId(e.to);
    const col = colOf(e.accent);
    const marker = markerOf(e.accent);
    if (e.curve === 'over' || e.curve === 'under') {
      const dir = e.curve === 'over' ? -1 : 1;
      const ea = e.arc != null ? e.arc : arc;
      const y0 = cy + dir * s;
      const cYc = cy + dir * (s + ea);
      const d = `M ${x1 + s} ${y0} C ${x1 + s + ea} ${cYc}, ${x2 - s - ea} ${cYc}, ${x2 - s} ${y0}`;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: d,
        fill: "none",
        stroke: col,
        strokeWidth: "1.4",
        markerEnd: marker
      });
    }
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1 + radius,
      y1: cy,
      x2: x2 - radius,
      y2: cy,
      stroke: col,
      strokeWidth: "1.4",
      markerEnd: marker
    });
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: `0 ${minY} ${width} ${maxY - minY}`,
    preserveAspectRatio: "xMidYMid meet",
    className: ['ocs-cbn', className].filter(Boolean).join(' '),
    role: "img"
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "cbn-ink",
    viewBox: "0 0 12 9",
    refX: "10.5",
    refY: "4.5",
    markerWidth: "12",
    markerHeight: "9",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L12 4.5 L0 9 L3.4 4.5 Z",
    fill: INK
  })), /*#__PURE__*/React.createElement("marker", {
    id: "cbn-acc",
    viewBox: "0 0 12 9",
    refX: "10.5",
    refY: "4.5",
    markerWidth: "12",
    markerHeight: "9",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L12 4.5 L0 9 L3.4 4.5 Z",
    fill: ACCENT
  }))), edges.map(renderEdge), nodes.map((nd, i) => {
    const x = xOf(i);
    const lines = Array.isArray(nd.label) ? nd.label : nd.label != null ? [nd.label] : [];
    const fill = nd.variant === 'accent' ? ACCENT : nd.variant === 'hollow' ? PAPER : INK;
    return /*#__PURE__*/React.createElement("g", {
      key: nd.id
    }, /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: cy,
      r: radius,
      fill: fill,
      stroke: nd.variant === 'hollow' ? INK : 'none',
      strokeWidth: nd.variant === 'hollow' ? 1.8 : 0
    }), nd.letter ? /*#__PURE__*/React.createElement("text", {
      x: x,
      y: letterY,
      textAnchor: "middle",
      fontFamily: "var(--font-serif, Georgia, serif)",
      fontStyle: "italic",
      fontSize: letterSize,
      fill: INK
    }, nd.letter) : null, lines.length ? /*#__PURE__*/React.createElement("text", {
      x: x,
      y: labelY,
      textAnchor: "middle",
      fontFamily: "var(--font-serif, Georgia, serif)",
      fontSize: labelSize,
      fill: INK
    }, lines.map((ln, j) => /*#__PURE__*/React.createElement("tspan", {
      key: j,
      x: x,
      dy: j === 0 ? 0 : lineGap
    }, ln))) : null);
  }));
}
Object.assign(__ds_scope, { CausalBayesNet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CausalBayesNet.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a single headline metric: mono label, large serif value, optional
 * delta and sub-caption. Use for benchmark figures and key results.
 */
function Stat({
  label,
  value,
  mono = false,
  delta = null,
  deltaDirection = 'up',
  sub = null,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ocs-stat', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    className: "ocs-stat__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: ['ocs-stat__value', mono ? 'ocs-stat__value--mono' : ''].filter(Boolean).join(' ')
  }, value), delta != null ? /*#__PURE__*/React.createElement("div", {
    className: `ocs-stat__delta ocs-stat__delta--${deltaDirection}`
  }, deltaDirection === 'up' ? '▲ ' : '▼ ', delta) : null, sub ? /*#__PURE__*/React.createElement("div", {
    className: "ocs-stat__sub"
  }, sub) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — an aside / research note set off from the running text with a
 * left ink rule. Use for definitions, caveats, and standards notes.
 */
function Callout({
  variant = 'note',
  title,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ocs-callout', `ocs-callout--${variant}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "ocs-callout__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "ocs-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — a labelled native dropdown styled to match the field system.
 * Pass options as [{value, label}] or render <option> children directly.
 */
function Select({
  label,
  hint,
  error,
  required = false,
  options = null,
  id,
  className = '',
  children,
  ...rest
}) {
  const selectId = id || (label ? `s-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ocs-field', invalid ? 'ocs-field--invalid' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ocs-field__label",
    htmlFor: selectId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__req",
    "aria-hidden": "true"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "ocs-select",
    "aria-invalid": invalid || undefined
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), invalid ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextField — a labelled text input with optional hint and error.
 */
function TextField({
  label,
  hint,
  error,
  required = false,
  mono = false,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `f-${String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    className: ['ocs-field', invalid ? 'ocs-field--invalid' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ocs-field__label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__req",
    "aria-hidden": "true"
  }, "*") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['ocs-input', mono ? 'ocs-input--mono' : ''].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest)), invalid ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ocs-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — a horizontal underline tab bar. Controlled via `value`/`onChange`.
 * Items: [{ value, label, count? }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ocs-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      className: ['ocs-tab', active ? 'ocs-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(it.value),
      type: "button"
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      className: "ocs-tab__count"
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StdRef = __ds_scope.StdRef;

__ds_ns.CausalBayesNet = __ds_scope.CausalBayesNet;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
