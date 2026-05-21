/* global React, AvailPill, TalkingBadge */

// ─── Grid card — medium card, photo top, info below ────────────────────
function GridCard({ c, lang, t, onSelect, selected, dark }) {
  const isActive = c.status === "active";
  const cardBg = dark
    ? (isActive ? "var(--burgundy)" : "var(--dark-plum)")
    : (isActive ? "var(--cookie-dough)" : "var(--cream)");
  const fg = dark ? "var(--cream)" : "var(--plum)";
  const muted = dark ? "var(--harbour-mist)" : "var(--fg-muted)";
  const ruleC = dark ? "rgba(242,240,231,0.22)" : "rgba(57,52,75,0.18)";

  // Active consultants: minimal card — photo + name + role only.
  if (isActive) {
    return (
      <article data-comment-anchor={`card-${c.id}`} style={{
        display: "flex", flexDirection: "column",
        background: cardBg, color: fg, overflow: "hidden",
        border: dark ? "1px solid rgba(242,240,231,0.08)" : "1px solid rgba(57,52,75,0.06)",
      }}>
        <div style={{
          aspectRatio: "5 / 4",
          background: `url("${c.photo}") center/cover no-repeat #2a2730`,
        }} />
        <div style={{ padding: "18px 20px 22px" }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 24, lineHeight: 1.0, letterSpacing: "-0.02em",
            margin: 0,
          }}>{c.name}</h3>
          <p style={{
            margin: "8px 0 0", fontSize: 13.5, lineHeight: 1.4, color: muted,
          }}>{c.role[lang]}</p>
        </div>
      </article>
    );
  }

  return (
    <article data-comment-anchor={`card-${c.id}`} style={{
      display: "flex", flexDirection: "column",
      background: cardBg, color: fg,
      padding: 0, overflow: "hidden",
      border: dark ? "1px solid rgba(242,240,231,0.08)" : "1px solid rgba(57,52,75,0.06)",
    }}>
      {/* photo, 5:4 */}
      <div style={{
        aspectRatio: "5 / 4",
        background: `url("${c.photo}") center/cover no-repeat #2a2730`,
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 12, left: 12,
          display: "flex", gap: 6, flexWrap: "wrap",
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, padding: "4px 10px",
            background: "var(--cream)", color: "var(--plum)",
            borderRadius: 999, lineHeight: 1,
          }}>
            {c.status === "now"
              ? <><span style={{width:6,height:6,borderRadius:999,background:"#3FB57A"}} />{t.availableNow}</>
              : <><span style={{width:6,height:6,borderRadius:999,border:"1.5px solid var(--plum)"}} />{t.from} {c.date[lang]}</>
            }
          </span>
          {c.talking && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              fontSize: 11, padding: "4px 10px",
              background: "var(--highlight)", color: "var(--plum)",
              lineHeight: 1, borderRadius: 999,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: 999, background: "var(--plum)",
                animation: "fortePulse 1.6s ease-in-out infinite",
              }} />
              {t.talking}
            </span>
          )}
        </div>
      </div>

      {/* body */}
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 24, lineHeight: 1.0, letterSpacing: "-0.02em",
            margin: 0,
          }}>{c.name}</h3>
          <p style={{
            margin: "6px 0 0", fontSize: 13.5, lineHeight: 1.4, color: muted,
          }}>{c.role[lang]} · {c.years} {t.years}</p>
        </div>

        <p style={{
          margin: 0, fontSize: 13.5, lineHeight: 1.55, color: fg,
          opacity: 0.92,
        }}>{c.bio[lang]}</p>

        {c.education && (
          <div>
            <div style={{
              fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
              color: muted, marginBottom: 4,
            }}>{t.education}</div>
            <div style={{ fontSize: 13, lineHeight: 1.4 }}>
              {c.education[lang]}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {c.skills.slice(0, 4).map((s) => (
            <span key={s} style={{
              display: "inline-flex", alignItems: "center", height: 22,
              padding: "0 10px", fontSize: 11.5,
              border: `1px solid ${dark ? "rgba(242,240,231,0.32)" : "var(--rule)"}`,
              color: fg,
              whiteSpace: "nowrap",
            }}>{s}</span>
          ))}
          {c.skills.length > 4 && (
            <span style={{
              fontSize: 11.5, alignSelf: "center", color: muted,
            }}>+{c.skills.length - 4}</span>
          )}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{
          paddingTop: 14, borderTop: `1px solid ${ruleC}`,
          display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12,
        }}>
          <div style={{ fontSize: 12, lineHeight: 1.4 }}>
            {!isActive && c.status === "from" && (
              <div style={{ color: muted, fontSize: 11 }}>{t.from} {c.date[lang]}</div>
            )}
            <div style={{ color: muted, fontSize: 11 }}>
              {c.rate} {t.rate}{isActive ? ` · ${t.activeSince} ${c.since}` : ""}
            </div>
          </div>
          <button
            onClick={() => onSelect(c.id)}
            style={{
              background: selected ? "var(--highlight)" : (dark ? "var(--cream)" : "var(--plum)"),
              color: selected ? "var(--plum)" : (dark ? "var(--plum)" : "var(--cream)"),
              border: 0,
              fontFamily: "var(--font-body)", fontSize: 13,
              padding: "10px 16px", cursor: "pointer", borderRadius: 0,
              transition: "all 180ms cubic-bezier(0.22,1,0.36,1)",
              whiteSpace: "nowrap",
            }}>
            {selected ? `✓ ${t.selected}` : t.cta}
          </button>
        </div>
      </div>
    </article>
  );
}

window.GridCard = GridCard;
