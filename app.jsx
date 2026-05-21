/* global React, ReactDOM, CONSULTANT_POOL, COPY, DEFAULT_CONFIG,
          PosterCard, ListCard, GridCard, Builder, useTweaks,
          TweaksPanel, TweakSection, TweakRadio */

const { useState, useMemo, useEffect } = React;

// ─── Tweak defaults ────────────────────────────────────────────────────────
// The `config` blob below is the per-offer page configuration (client name,
// contact card, who's active, who's available, rate overrides, etc). Edit
// via the Builder panel in Tweaks — changes persist back to this block.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "lang": "no",
  "config": {
    "client": "Aidn",
    "contact": {
      "name": "[Ditt navn]",
      "role": { "no": "Rolle, Forte Oslo", "en": "Role, Forte Oslo" },
      "email": "navn@fortedigital.com",
      "phone": "+47 900 00 000"
    },
    "activeIds": ["danijel", "fredrik", "frode"],
    "availableIds": ["kasper", "amalie", "henrik", "thea", "jonas", "mikael", "linnea"],
    "rates": {},
    "since": {
      "danijel": "",
      "fredrik": "",
      "frode": ""
    },
    "team": {
      "danijel": { "no": "", "en": "" },
      "fredrik": { "no": "", "en": "" },
      "frode":   { "no": "", "en": "" }
    },
    "availableFrom": {
      "thea":   { "no": "1. juni 2026",  "en": "Jun 1, 2026"  },
      "jonas":  { "no": "15. juni 2026", "en": "Jun 15, 2026" },
      "mikael": { "no": "1. juli 2026",  "en": "Jul 1, 2026"  }
    },
    "talking": { "amalie": true }
  }
}/*EDITMODE-END*/;

// Substitutes {client} (and other {key} tokens) in a template string.
const fill = (tpl, vars) => (tpl || "").replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

// Look up a consultant in the pool by id.
const fromPool = (id) => CONSULTANT_POOL.find((p) => p.id === id);

// Resolve a pool entry into a card-ready consultant. Active vs available
// branches add the per-offer fields each card variant expects.
const resolveActive = (id, config) => {
  const p = fromPool(id); if (!p) return null;
  return {
    ...p,
    rate: config.rates?.[id] ?? p.defaultRate,
    status: "active",
    since: config.since?.[id] || "",
    team: config.team?.[id] || { no: "", en: "" },
  };
};
const resolveAvailable = (id, config) => {
  const p = fromPool(id); if (!p) return null;
  const date = config.availableFrom?.[id];
  return {
    ...p,
    rate: config.rates?.[id] ?? p.defaultRate,
    status: date ? "from" : "now",
    date: date || undefined,
    talking: !!config.talking?.[id],
  };
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { theme, lang } = tweaks;
  const config = tweaks.config || DEFAULT_CONFIG;
  const dark = theme === "dark";
  const t = COPY[lang];

  const [selected, setSelected] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleSel = (id) => {
    setSelected((sel) => sel.includes(id) ? sel.filter((x) => x !== id) : [...sel, id]);
  };

  // Resolve cards from config every render — cheap (10 items).
  const active = (config.activeIds || []).map((id) => resolveActive(id, config)).filter(Boolean);
  const open = (config.availableIds || []).map((id) => resolveAvailable(id, config)).filter(Boolean);

  // Apply theme to body
  useEffect(() => {
    document.body.style.background = dark ? "var(--plum)" : "var(--cream)";
    document.body.style.color = dark ? "var(--cream)" : "var(--plum)";
    document.documentElement.lang = lang;
  }, [dark, lang]);

  // Variables for {client}-style substitution in COPY
  const vars = { client: config.client || "" };

  // Lazy: build the section
  const renderSection = (items, title, sub, isOpen, style) => {
    if (!items.length) return null;
    const SectionCard = style === "poster" ? PosterCard : style === "list" ? ListCard : GridCard;
    const containerStyle = style === "list"
      ? { display: "flex", flexDirection: "column" }
      : style === "poster"
        ? { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }
        : { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 };
    return (
      <section style={{ padding: "56px 56px 32px" }} data-screen-label={isOpen ? "Available" : "Active"} data-comment-anchor={isOpen ? "section-available" : "section-active"}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          gap: 24, flexWrap: "wrap", marginBottom: 28,
        }}>
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              {isOpen ? "02 / 02" : "01 / 02"} · {items.length} {lang === "no" ? "konsulenter" : "consultants"}
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.0,
              letterSpacing: "-0.025em", margin: 0,
              color: dark ? "var(--cream)" : "var(--plum)",
            }}>{fill(title, vars)}</h2>
            <p style={{
              margin: "16px 0 0", fontSize: 16, lineHeight: 1.55, maxWidth: 600,
              color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
            }}>{fill(sub, vars)}</p>
          </div>
        </div>

        <div style={containerStyle}>
          {items.map((c) => (
            <SectionCard
              key={c.id} c={c} lang={lang} t={t}
              onSelect={toggleSel} selected={selected.includes(c.id)}
              dark={dark}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <Header lang={lang} setLang={(l) => setTweak("lang", l)} dark={dark} t={t} client={config.client} />
      <Hero t={t} dark={dark} lang={lang} client={config.client} />

      {renderSection(active, t.section1, t.section1Sub, false, "poster")}
      {renderSection(open, t.section2, t.section2Sub, true, "grid")}

      <ContactStrip t={t} dark={dark} lang={lang} contact={config.contact || {}} />

      {/* Sticky selection bar */}
      {selected.length > 0 && !drawerOpen && !sent && (
        <SelectionBar
          count={selected.length} t={t}
          onOpen={() => setDrawerOpen(true)}
          onClear={() => setSelected([])}
        />
      )}
      {drawerOpen && (
        <IntroDrawer
          selected={selected} t={t} lang={lang}
          onClose={() => setDrawerOpen(false)}
          onSend={() => { setDrawerOpen(false); setSent(true); setTimeout(() => { setSent(false); setSelected([]); }, 3800); }}
        />
      )}
      {sent && <Toast text={t.requestSent} />}

      <TweaksPanel title={lang === "no" ? "Bygg side" : "Build page"}>
        <TweakSection label={lang === "no" ? "Visning" : "View"}>
          <TweakRadio
            label={lang === "no" ? "Tema" : "Theme"}
            value={theme}
            options={[
              { value: "light", label: lang === "no" ? "Lyst" : "Light" },
              { value: "dark",  label: lang === "no" ? "Mørkt" : "Dark"  },
            ]}
            onChange={(v) => setTweak("theme", v)}
          />
          <TweakRadio
            label={lang === "no" ? "Språk" : "Language"}
            value={lang}
            options={[
              { value: "no", label: "Norsk" },
              { value: "en", label: "English" },
            ]}
            onChange={(v) => setTweak("lang", v)}
          />
        </TweakSection>
        <Builder config={config} setTweak={setTweak} lang={lang} />
      </TweaksPanel>
    </>
  );
}

// ─── Header ────────────────────────────────────────────────────
function Header({ lang, setLang, dark, t, client }) {
  const bg = dark ? "var(--dark-plum)" : "var(--cream)";
  const fg = dark ? "var(--cream)" : "var(--plum)";
  const rule = dark ? "rgba(242,240,231,0.12)" : "rgba(57,52,75,0.10)";
  return (
    <header data-comment-anchor="header" style={{
      position: "sticky", top: 0, zIndex: 30,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 56px", background: bg, color: fg,
      borderBottom: `1px solid ${rule}`,
      backdropFilter: "saturate(160%)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <img
          src={dark ? "assets/forte-logo-cream.svg" : "assets/forte-logo-plum.svg"}
          alt="Forte" style={{ height: 26 }}
        />
        <span style={{
          height: 22, width: 1,
          background: dark ? "rgba(242,240,231,0.25)" : "rgba(57,52,75,0.25)",
        }} />
        <div style={{
          fontSize: 12, lineHeight: 1.2,
          color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
        }}>
          <div style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 10.5 }}>
            {t.badgeFor}
          </div>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 18,
            color: fg, marginTop: 2, letterSpacing: "-0.01em",
          }}>{client}</div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 11, letterSpacing: "0.04em",
          color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
        }}>
          {["no", "en"].map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: "transparent", border: 0, cursor: "pointer",
              color: lang === l ? "var(--highlight)" : "inherit",
              fontFamily: "inherit", fontSize: 12, padding: "4px 4px",
              textTransform: "uppercase", letterSpacing: "0.08em",
              opacity: lang === l ? 1 : 0.65,
            }}>{l}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero({ t, dark, lang, client }) {
  const headline = fill(t.headline, { client });
  // Highlight the client name (last word in template)
  const parts = headline.split(client);
  return (
    <section style={{
      padding: "88px 56px 56px",
      background: dark ? "var(--plum)" : "var(--cream)",
      color: dark ? "var(--cream)" : "var(--plum)",
    }} data-screen-label="Hero" data-comment-anchor="hero">
      <div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Forte × {client} · {new Date().toLocaleDateString(lang === "no" ? "nb-NO" : "en-GB", { day: "2-digit", month: "short", year: "numeric" })}
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(48px, 7.2vw, 112px)", lineHeight: 0.95,
            letterSpacing: "-0.035em", margin: 0,
            textWrap: "balance",
          }}>
            {parts[0]}
            <em style={{ fontStyle: "normal", color: "var(--highlight)" }}>{client}</em>
            {parts[1]}
          </h1>
        </div>
      </div>
    </section>
  );
}

// ─── Contact strip ─────────────────────────────────────────────
function ContactStrip({ t, dark, lang, contact }) {
  const role = (contact.role && (contact.role[lang] || contact.role.no)) || "";
  return (
    <section style={{
      padding: "72px 56px 96px",
      background: dark ? "var(--dark-plum)" : "var(--cookie-dough)",
      color: dark ? "var(--cream)" : "var(--plum)",
      marginTop: 56,
    }} data-screen-label="Contact" data-comment-anchor="contact-strip">
      <div style={{
        display: "grid", gridTemplateColumns: "auto 1fr",
        gap: 40, alignItems: "center", maxWidth: 720,
      }}>
        <image-slot
          id="contact-photo"
          shape="circle"
          placeholder={lang === "no" ? "Slipp portrettet ditt her" : "Drop your portrait here"}
          style={{ width: 160, height: 160 }}
        ></image-slot>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 15 }}>
          <div className="eyebrow" style={{ marginBottom: 4 }}>{t.contact}</div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: 36, lineHeight: 1.0, letterSpacing: "-0.02em",
          }}>{contact.name || "[Ditt navn]"}</div>
          <div style={{
            color: dark ? "var(--harbour-mist)" : "var(--fg-muted)",
            fontSize: 14, marginBottom: 6,
          }}>{role}</div>
          {contact.email && (
            <a href={`mailto:${contact.email}`} style={{
              color: "inherit", textUnderlineOffset: 4, fontFamily: "var(--font-mono)", fontSize: 14,
            }}>{contact.email}</a>
          )}
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} style={{
              color: "inherit", textUnderlineOffset: 4, fontFamily: "var(--font-mono)", fontSize: 14,
            }}>{contact.phone}</a>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Selection bar ─────────────────────────────────────────────
function SelectionBar({ count, t, onOpen, onClear }) {
  return (
    <div data-comment-anchor="selection-bar" style={{
      position: "fixed", left: "50%", bottom: 24, transform: "translateX(-50%)",
      background: "var(--plum)", color: "var(--cream)",
      padding: "12px 14px 12px 22px",
      display: "flex", alignItems: "center", gap: 16,
      zIndex: 50, borderRadius: 999,
      animation: "forteUp 280ms cubic-bezier(0.22,1,0.36,1)",
    }}>
      <span style={{ fontSize: 14 }}>
        <strong style={{ fontWeight: 600 }}>{count}</strong> {t.selected}
      </span>
      <button onClick={onClear} style={{
        background: "transparent", border: 0, color: "var(--harbour-mist)",
        cursor: "pointer", fontSize: 12, fontFamily: "inherit",
        padding: "8px 10px",
      }}>{t.cancel}</button>
      <button onClick={onOpen} style={{
        background: "var(--highlight)", color: "var(--plum)",
        border: 0, cursor: "pointer",
        fontSize: 14, fontFamily: "inherit",
        padding: "10px 20px", borderRadius: 999,
      }}>{t.bookCta} →</button>
    </div>
  );
}

// ─── Intro drawer ──────────────────────────────────────────────
function IntroDrawer({ selected, t, lang, onClose, onSend }) {
  const picks = selected
    .map((id) => CONSULTANT_POOL.find((p) => p.id === id))
    .filter(Boolean);
  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(34,28,56,0.55)",
        zIndex: 60, animation: "forteFade 180ms ease-out",
      }} />
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(520px, 100vw)", background: "var(--cream)", color: "var(--plum)",
        zIndex: 61, padding: "32px 36px",
        display: "flex", flexDirection: "column", gap: 20,
        overflowY: "auto",
        animation: "forteSlide 280ms cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>{t.bookCta}</div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: 32, lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0,
            }}>{picks.length} {t.selected}</h3>
          </div>
          <button onClick={onClose} style={{
            background: "transparent", border: 0, cursor: "pointer",
            fontSize: 24, lineHeight: 1, color: "var(--plum)",
          }}>×</button>
        </div>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)" }}>{t.bookCopy}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {picks.map((c) => (
            <div key={c.id} style={{
              display: "grid", gridTemplateColumns: "48px 1fr",
              gap: 14, alignItems: "center",
              padding: "12px 0", borderTop: "1px solid var(--ash-grey)",
            }}>
              <div style={{
                width: 48, height: 48,
                background: `url("${c.photo}") center/cover no-repeat #2a2730`,
              }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, letterSpacing: "-0.01em" }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>{c.role[lang]}</div>
              </div>
            </div>
          ))}
        </div>
        <textarea
          placeholder={lang === "no" ? "Kort om kontekst (valgfritt) — hvilken rolle/team, oppstart, antall uker." : "Brief context (optional) — role/team, start, weeks."}
          rows={4}
          style={{
            width: "100%", boxSizing: "border-box",
            border: "1px solid var(--rule)", borderRadius: 0,
            padding: 14, fontFamily: "inherit", fontSize: 14,
            background: "transparent", color: "inherit",
            resize: "vertical",
          }}
        />
        <div style={{ flex: 1 }} />
        <button onClick={onSend} style={{
          background: "var(--plum)", color: "var(--cream)",
          border: 0, padding: "16px 24px", cursor: "pointer",
          fontSize: 15, fontFamily: "inherit",
        }}>{t.sendRequest} →</button>
      </aside>
    </>
  );
}

// ─── Toast ─────────────────────────────────────────────────────
function Toast({ text }) {
  return (
    <div style={{
      position: "fixed", left: "50%", bottom: 32, transform: "translateX(-50%)",
      background: "var(--plum)", color: "var(--cream)",
      padding: "14px 22px", fontSize: 14, zIndex: 80,
      borderLeft: "3px solid var(--highlight)",
      animation: "forteUp 280ms cubic-bezier(0.22,1,0.36,1)",
    }}>{text}</div>
  );
}

window.App = App;
