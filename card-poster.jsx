/* global React, TagChain, AvailPill, TalkingBadge */

// ─── Poster card (Forte 4:5 portrait, brand-canonical) ────────────────────
// Tag-chain top-left, photo edge-to-edge, headline below photo, footer signature.
function PosterCard({ c, lang, t, onSelect, selected, dark }) {
  const isActive = c.status === "active";
  const isNow = c.status === "now";

  // Backgrounds rotate to give visual variety like Forte's poster grids.
  const cardBg = isActive
    ? (dark ? "var(--burgundy)" : "var(--cookie-dough)")
    : (dark ? "var(--dark-plum)" : "var(--harbour-mist)");
  const fg = (isActive ? !dark : !dark) ? "var(--plum)" : "var(--cream)";
  const onDark = (isActive ? dark : dark);
  const chainVariant = isActive
    ? (dark ? "orange" : "burgundy")
    : (dark ? "cream" : "plum");

  const tagLeft = isActive ? (lang === "no" ? "Hos dere" : "With you") : "Forte";
  const tagRight = isActive
    ? (c.team[lang])
    : (lang === "no" ? "Ledig" : "Available");

  // Active: minimal poster — no tag chain, no footer, just photo + name + role.
  if (isActive) {
    return (
      <article data-comment-anchor={`card-${c.id}`} style={{
        position: "relative", display: "flex", flexDirection: "column",
        background: cardBg, color: fg,
        aspectRatio: "4 / 5",
        padding: 20, overflow: "hidden",
      }}>
        <div style={{
          flex: 1, marginLeft: -20, marginRight: -20, marginTop: -20, marginBottom: 14,
          background: `url("${c.photo}") center/cover no-repeat #2a2730`,
          position: "relative", minHeight: 0,
        }}>
          <svg style={{ position: "absolute", top: 14, right: -18 }} width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="22" fill="var(--cookie-dough)" />
          </svg>
        </div>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 22, lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0,
          }}>{c.name}</h3>
          <p style={{
            margin: "6px 0 0", fontSize: 12, lineHeight: 1.35,
            color: onDark ? "var(--harbour-mist)" : "rgba(57,52,75,0.7)",
          }}>{c.role[lang]}</p>
        </div>
      </article>
    );
  }

  return (
    <article data-comment-anchor={`card-${c.id}`} style={{
      position: "relative", display: "flex", flexDirection: "column",
      background: cardBg, color: fg,
      aspectRatio: "4 / 5",
      padding: 20,
      overflow: "hidden",
    }}>
      {/* tag chain */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <TagChain tags={[tagLeft, tagRight]} variant={chainVariant} size="sm" />
        {c.talking && <TalkingBadge t={t} />}
      </div>

      {/* photo */}
      <div style={{
        flex: 1, marginTop: 14, marginBottom: 14,
        marginLeft: -20, marginRight: -20,
        background: `url("${c.photo}") center/cover no-repeat #2a2730`,
        position: "relative", minHeight: 0,
      }}>
        {/* cookie-dough decorative circle, brand 5th element */}
        <svg style={{ position: "absolute", top: -18, right: -22 }} width="44" height="44" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="22" fill="var(--cookie-dough)" />
        </svg>
        {/* small bottom-left dot for some compositions */}
        {(c.id.charCodeAt(0) % 2 === 0) && (
          <svg style={{ position: "absolute", bottom: 18, left: -14 }} width="28" height="28" viewBox="0 0 28 28">
            <circle cx="14" cy="14" r="14" fill="var(--cookie-dough)" />
          </svg>
        )}
      </div>

      {/* name + role */}
      <div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: 22, lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0,
        }}>{c.name}</h3>
        <p style={{
          margin: "6px 0 0", fontSize: 12, lineHeight: 1.35,
          color: onDark ? "var(--harbour-mist)" : "rgba(57,52,75,0.7)",
        }}>{c.role[lang]}</p>
      </div>

      {/* footer rule + meta */}
      <div style={{
        marginTop: 12, paddingTop: 10,
        borderTop: `1px solid ${onDark ? "rgba(242,240,231,0.22)" : "rgba(57,52,75,0.22)"}`,
        display: "flex", justifyContent: "space-between", alignItems: "end", gap: 8,
      }}>
        <div style={{ fontSize: 11, lineHeight: 1.4 }}>
          <AvailPill c={c} t={t} dark={onDark} />
          <div style={{ marginTop: 4, opacity: 0.75 }}>
            {c.years} {t.years} · {c.rate} {t.rate}
          </div>
        </div>
        <button
          onClick={() => onSelect(c.id)}
          style={{
            background: selected ? "var(--highlight)" : "transparent",
            color: selected ? "var(--plum)" : (onDark ? "var(--cream)" : "var(--plum)"),
            border: `1px solid ${selected ? "var(--highlight)" : "currentColor"}`,
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 400,
            padding: "8px 12px", cursor: "pointer", letterSpacing: 0,
            transition: "all 180ms cubic-bezier(0.22,1,0.36,1)",
            whiteSpace: "nowrap",
          }}>
          {selected ? `✓ ${t.selected}` : t.ctaShort}
        </button>
      </div>
    </article>
  );
}
window.PosterCard = PosterCard;
