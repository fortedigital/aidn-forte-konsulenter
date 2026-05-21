/* global React, TagChain */

// Availability pill (small status indicator). Used by list + grid cards.
function AvailPill({ c, t, dark }) {
  if (c.status === "active") {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 12, color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: 999,
          background: "var(--highlight)", display: "inline-block",
        }} />
        {t.activeSince} {c.since}
      </span>
    );
  }
  if (c.status === "now") {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontSize: 12, fontWeight: 400,
        color: dark ? "var(--cream)" : "var(--plum)",
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: 999,
          background: "#3FB57A", display: "inline-block",
          boxShadow: "0 0 0 4px rgba(63,181,122,0.18)",
        }} />
        {t.availableNow}
      </span>
    );
  }
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 12,
      color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
    }}>
      <span style={{
        width: 8, height: 8, borderRadius: 999,
        border: "1.5px solid currentColor", display: "inline-block",
      }} />
      {t.from} {c.date[t === window.COPY.no ? "no" : "en"]}
    </span>
  );
}

// Inline "i samtale med andre" caution badge
function TalkingBadge({ t }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 11, padding: "3px 8px",
      border: "1px solid var(--highlight)",
      color: "var(--highlight)", borderRadius: 999,
      whiteSpace: "nowrap",
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: "var(--highlight)",
        animation: "fortePulse 1.6s ease-in-out infinite",
      }} />
      {t.talking}
    </span>
  );
}

window.AvailPill = AvailPill;
window.TalkingBadge = TalkingBadge;
