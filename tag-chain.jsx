/* global React */
// Small TagChain implementation — pill-breadcrumb tags joined by connectors with end-caps.
// Forte's signature classifier.
function TagChain({ tags = [], variant = "orange", size = "sm", style }) {
  const sizes = {
    xs: { h: 20, px: 9, font: 10.5, conn: 11 },
    sm: { h: 24, px: 12, font: 12, conn: 14 },
    md: { h: 28, px: 14, font: 13, conn: 16 },
  }[size];
  const colors = {
    orange: "var(--highlight)",
    plum: "var(--plum)",
    cream: "var(--cream)",
    burgundy: "var(--burgundy)",
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 0,
      fontFamily: "var(--font-body)", fontSize: sizes.font, fontWeight: 400,
      lineHeight: 1, color: colors[variant] || colors.orange, ...style,
    }}>
      {tags.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 && <TCConnector width={sizes.conn} />}
          <span style={{
            display: "inline-flex", alignItems: "center",
            height: sizes.h, padding: `0 ${sizes.px}px`,
            border: "1px solid currentColor", borderRadius: 999,
            whiteSpace: "nowrap", background: "transparent",
          }}>{t}</span>
        </React.Fragment>
      ))}
    </span>
  );
}
function TCConnector({ width = 14 }) {
  return (
    <span style={{ display: "inline-block", width, height: 9, position: "relative", flexShrink: 0 }}>
      <span style={{ position: "absolute", top: 4, left: 0, right: 0, height: 1, background: "currentColor" }} />
      <span style={{ position: "absolute", top: 0, left: 0, width: 1, height: 9, background: "currentColor" }} />
      <span style={{ position: "absolute", top: 0, right: 0, width: 1, height: 9, background: "currentColor" }} />
    </span>
  );
}
window.TagChain = TagChain;
