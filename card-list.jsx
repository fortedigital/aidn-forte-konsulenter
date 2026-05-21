/* global React, AvailPill, TalkingBadge */

// ─── List card — compact horizontal row, dense scan ────────────────────
function ListCard({ c, lang, t, onSelect, selected, dark }) {
  const isActive = c.status === "active";

  const bg = dark ? "var(--dark-plum)" : "var(--cream)";
  const ruleC = dark ? "rgba(242,240,231,0.18)" : "var(--ash-grey)";

  // Active: just photo + name + role, no skills/avail/CTA.
  if (isActive) {
    return (
      <article data-comment-anchor={`card-${c.id}`} style={{
        display: "grid",
        gridTemplateColumns: "72px 1fr",
        gap: 24, alignItems: "center",
        padding: "20px 24px",
        background: bg,
        borderTop: `1px solid ${ruleC}`,
        color: dark ? "var(--cream)" : "var(--plum)",
      }}>
        <div style={{
          width: 72, height: 72,
          background: `url("${c.photo}") center/cover no-repeat #2a2730`,
        }} />
        <div style={{ minWidth: 0 }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 22, lineHeight: 1.05, letterSpacing: "-0.015em",
            margin: 0,
          }}>{c.name}</h3>
          <p style={{
            margin: "4px 0 0", fontSize: 13, lineHeight: 1.4,
            color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
          }}>{c.role[lang]}</p>
        </div>
      </article>
    );
  }

  return (
    <article data-comment-anchor={`card-${c.id}`} style={{
      display: "grid",
      gridTemplateColumns: "72px 1.4fr 1.6fr auto auto",
      gap: 24, alignItems: "center",
      padding: "20px 24px",
      background: bg,
      borderTop: `1px solid ${ruleC}`,
      color: dark ? "var(--cream)" : "var(--plum)",
    }}>
      {/* photo */}
      <div style={{
        width: 72, height: 72,
        background: `url("${c.photo}") center/cover no-repeat #2a2730`,
        position: "relative", flexShrink: 0,
      }}>
        {isActive && (
          <span style={{
            position: "absolute", top: -6, right: -6,
            width: 18, height: 18, borderRadius: 999,
            background: "var(--highlight)", border: `2px solid ${bg}`,
          }} />
        )}
      </div>

      {/* name + role + years */}
      <div style={{ minWidth: 0 }}>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: 22, lineHeight: 1.05, letterSpacing: "-0.015em",
          margin: 0,
        }}>{c.name}</h3>
        <p style={{
          margin: "4px 0 0", fontSize: 13, lineHeight: 1.4,
          color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
        }}>{c.role[lang]} · {c.years} {t.years}</p>
      </div>

      {/* skills */}
      <div style={{
        display: "flex", gap: 6, flexWrap: "wrap", minWidth: 0,
      }}>
        {c.skills.slice(0, 4).map((s) => (
          <span key={s} style={{
            display: "inline-flex", alignItems: "center", height: 22,
            padding: "0 10px", fontSize: 11.5,
            border: `1px solid ${dark ? "rgba(242,240,231,0.28)" : "var(--rule)"}`,
            color: dark ? "var(--cream)" : "var(--plum)",
            borderRadius: 0,
            whiteSpace: "nowrap",
          }}>{s}</span>
        ))}
        {c.skills.length > 4 && (
          <span style={{
            fontSize: 11.5, alignSelf: "center",
            color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
          }}>+{c.skills.length - 4}</span>
        )}
      </div>

      {/* availability */}
      <div style={{ textAlign: "right", fontSize: 12 }}>
        <AvailPill c={c} t={t} dark={dark} />
        {c.talking && (
          <div style={{ marginTop: 6 }}>
            <TalkingBadge t={t} />
          </div>
        )}
        <div style={{
          marginTop: 6, fontSize: 11,
          color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
        }}>
          {c.rate} {t.rate}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => onSelect(c.id)}
        style={{
          background: selected ? "var(--highlight)" : "transparent",
          color: selected ? "var(--plum)" : (dark ? "var(--cream)" : "var(--plum)"),
          border: `1px solid ${selected ? "var(--highlight)" : (dark ? "var(--cream)" : "var(--plum)")}`,
          fontFamily: "var(--font-body)", fontSize: 13,
          padding: "10px 16px", cursor: "pointer",
          transition: "all 180ms cubic-bezier(0.22,1,0.36,1)",
          whiteSpace: "nowrap",
        }}>
        {selected ? `✓ ${t.selected}` : t.cta}
      </button>
    </article>
  );
}

window.ListCard = ListCard;
