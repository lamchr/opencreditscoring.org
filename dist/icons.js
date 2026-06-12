/* Website kit — shared helpers: Lucide icon wrapper + diagrammatic figures */

// Lucide icon: renders an <i data-lucide>, converted to <svg> by lucide.createIcons().
// A render-counter key forces a fresh node so the icon re-materializes after React updates.
function LucideIcon({
  name,
  size = 18,
  color,
  strokeWidth = 1.75,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({
        attrs: {
          'stroke-width': strokeWidth
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color: color || 'currentColor',
      display: 'inline-flex',
      ...style
    }
  });
}

/* The brand's signature figure: a calibration / scoring curve on a measured grid.
   Two series — an ideal diagonal (reference) and a fitted sigmoid. */
function CalibrationPlot({
  height = 320,
  showIdeal = true
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 320",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M56 24 V276 H536",
    fill: "none",
    stroke: "var(--line-strong)",
    strokeWidth: "1.5"
  }), showIdeal && /*#__PURE__*/React.createElement("path", {
    d: "M56 276 L536 24",
    fill: "none",
    stroke: "var(--ink-400)",
    strokeWidth: "1.5",
    strokeDasharray: "4 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 268 C 280 268 250 60 536 40",
    fill: "none",
    stroke: "var(--blue-700)",
    strokeWidth: "2.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 268 C 230 268 300 150 536 120",
    fill: "none",
    stroke: "var(--red-600)",
    strokeWidth: "2.2",
    opacity: "0.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "268",
    cy: "158",
    r: "3.5",
    fill: "var(--blue-700)"
  }));
}
Object.assign(window, {
  LucideIcon,
  CalibrationPlot
});