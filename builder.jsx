/* global React, CONSULTANT_POOL, TweakSection, TweakText, TweakNumber, TweakToggle */

// ─── Builder panel ─────────────────────────────────────────────────────────
// Sits inside the Tweaks panel and lets the salesperson configure the page
// per offer: client name, contact card, who's active at the client, who's
// being offered, and per-consultant rate overrides + dates.
//
// State flows through `useTweaks` so every change persists via the host
// edit-mode protocol (writes back to the EDITMODE block in app.jsx) and
// survives reloads.

function Builder({ config, setTweak, lang }) {
  // helpers to update nested config in one go
  const patch = (next) => setTweak({ config: { ...config, ...next } });
  const patchMap = (key, id, value) => {
    const nextMap = { ...(config[key] || {}) };
    if (value === undefined || value === null || value === "" || value === false) {
      delete nextMap[id];
    } else {
      nextMap[id] = value;
    }
    patch({ [key]: nextMap });
  };
  const toggleId = (key, id) => {
    const arr = config[key] || [];
    const next = arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
    patch({ [key]: next });
  };

  const isActiveSelected = (id) => (config.activeIds || []).includes(id);
  const isAvailableSelected = (id) => (config.availableIds || []).includes(id);

  const L = lang === "no" ? labels.no : labels.en;

  return (
    <>
      <TweakSection label={L.client}>
        <BuilderField
          label={L.clientName}
          value={config.client || ""}
          onChange={(v) => patch({ client: v })}
          placeholder="Aidn"
        />
      </TweakSection>

      <TweakSection label={L.contact}>
        <BuilderField
          label={L.contactName}
          value={config.contact?.name || ""}
          onChange={(v) => patch({ contact: { ...config.contact, name: v } })}
        />
        <BuilderField
          label={L.contactRole}
          value={(config.contact?.role && (config.contact.role[lang] || config.contact.role.no)) || ""}
          onChange={(v) => patch({ contact: {
            ...config.contact,
            role: { ...(config.contact?.role || {}), [lang]: v },
          } })}
        />
        <BuilderField
          label="E-post" value={config.contact?.email || ""}
          onChange={(v) => patch({ contact: { ...config.contact, email: v } })}
        />
        <BuilderField
          label={L.phone} value={config.contact?.phone || ""}
          onChange={(v) => patch({ contact: { ...config.contact, phone: v } })}
        />
      </TweakSection>

      <TweakSection label={L.activeSection}>
        <Hint>{L.activeHint}</Hint>
        {CONSULTANT_POOL.map((p) => (
          <PickerRow
            key={p.id}
            person={p}
            selected={isActiveSelected(p.id)}
            disabled={isAvailableSelected(p.id)}
            onToggle={() => toggleId("activeIds", p.id)}
            lang={lang}
          >
            {isActiveSelected(p.id) && (
              <BuilderField
                small
                label={L.since}
                value={config.since?.[p.id] || ""}
                onChange={(v) => patchMap("since", p.id, v)}
                placeholder="Q2 2024"
              />
            )}
          </PickerRow>
        ))}
      </TweakSection>

      <TweakSection label={L.availableSection}>
        <Hint>{L.availableHint}</Hint>
        {CONSULTANT_POOL.map((p) => {
          const sel = isAvailableSelected(p.id);
          const fromObj = config.availableFrom?.[p.id];
          const fromStr = fromObj?.[lang] || fromObj?.no || "";
          return (
            <PickerRow
              key={p.id}
              person={p}
              selected={sel}
              disabled={isActiveSelected(p.id)}
              onToggle={() => toggleId("availableIds", p.id)}
              lang={lang}
            >
              {sel && (
                <>
                  <BuilderField
                    small inline
                    label={L.rate}
                    value={String(config.rates?.[p.id] ?? p.defaultRate)}
                    onChange={(v) => {
                      const n = parseInt(v.replace(/\D/g, ""), 10);
                      patchMap("rates", p.id, Number.isFinite(n) ? n : undefined);
                    }}
                    suffix="kr/h"
                  />
                  <BuilderField
                    small
                    label={L.from}
                    value={fromStr}
                    onChange={(v) => patchMap("availableFrom", p.id, v
                      ? { no: v, en: v }
                      : undefined)}
                    placeholder={L.nowPlaceholder}
                  />
                  <BuilderToggle
                    label={L.talking}
                    value={!!config.talking?.[p.id]}
                    onChange={(b) => patchMap("talking", p.id, b)}
                  />
                </>
              )}
            </PickerRow>
          );
        })}
      </TweakSection>
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function PickerRow({ person, selected, disabled, onToggle, children, lang }) {
  return (
    <div style={{
      padding: "8px 0",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      opacity: disabled ? 0.4 : 1,
    }}>
      <label style={{
        display: "flex", alignItems: "center", gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: 13,
      }}>
        <input
          type="checkbox" checked={selected} disabled={disabled}
          onChange={onToggle}
          style={{ accentColor: "var(--highlight)", margin: 0 }}
        />
        <img src={person.photo} alt=""
          style={{
            width: 26, height: 26, objectFit: "cover", flexShrink: 0,
            borderRadius: 999,
          }} />
        <div style={{ flex: 1, minWidth: 0, lineHeight: 1.2 }}>
          <div style={{ fontWeight: 500 }}>{person.name}</div>
          <div style={{ opacity: 0.65, fontSize: 11 }}>{person.role[lang]}</div>
        </div>
      </label>
      {children && (
        <div style={{
          marginLeft: 36, marginTop: 6,
          display: "flex", flexDirection: "column", gap: 6,
        }}>{children}</div>
      )}
    </div>
  );
}

function BuilderField({ label, value, onChange, placeholder, small, inline, suffix }) {
  return (
    <div style={{
      display: inline ? "grid" : "flex",
      gridTemplateColumns: inline ? "auto 1fr auto" : undefined,
      alignItems: "center",
      gap: 8, flexDirection: small ? "column" : undefined,
      alignItems: small ? "stretch" : "center",
      padding: small ? 0 : "6px 0",
    }}>
      <div style={{
        fontSize: small ? 10 : 11,
        letterSpacing: small ? "0.06em" : 0,
        textTransform: small ? "uppercase" : "none",
        opacity: 0.65,
        minWidth: small ? 0 : 72,
      }}>{label}</div>
      <input
        className="twk-field"
        type="text" value={value || ""}
        placeholder={placeholder || ""}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1, fontSize: small ? 12 : 13,
          padding: small ? "4px 6px" : "6px 8px",
        }}
      />
      {suffix && (
        <span style={{ fontSize: 11, opacity: 0.65, marginLeft: 6 }}>{suffix}</span>
      )}
    </div>
  );
}

function BuilderToggle({ label, value, onChange }) {
  return (
    <label style={{
      display: "flex", alignItems: "center", gap: 8,
      fontSize: 12, cursor: "pointer", padding: "4px 0",
    }}>
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)}
        style={{ accentColor: "var(--highlight)", margin: 0 }} />
      <span style={{ opacity: 0.85 }}>{label}</span>
    </label>
  );
}

function Hint({ children }) {
  return (
    <div style={{
      fontSize: 11, lineHeight: 1.4, opacity: 0.6,
      padding: "6px 0 10px",
    }}>{children}</div>
  );
}

// ─── Localized labels for the builder UI ───────────────────────────────────
const labels = {
  no: {
    client: "Kunde",
    clientName: "Navn",
    contact: "Kontaktperson",
    contactName: "Navn",
    contactRole: "Rolle",
    phone: "Telefon",
    activeSection: "Hos kunden",
    activeHint: "Konsulenter som allerede er i team hos kunden.",
    availableSection: "Ledige konsulenter",
    availableHint: "Hvem du vil tilby til denne kunden. Sett egen timepris og startdato.",
    rate: "Timepris",
    from: "Fra",
    nowPlaceholder: "Tom = tilgjengelig nå",
    talking: "I samtale med andre",
    since: "Hos kunden siden",
  },
  en: {
    client: "Client",
    clientName: "Name",
    contact: "Your contact card",
    contactName: "Name",
    contactRole: "Role",
    phone: "Phone",
    activeSection: "Embedded at client",
    activeHint: "Consultants already on a team at the client.",
    availableSection: "Available consultants",
    availableHint: "Who you want to offer this client. Override rate and start date.",
    rate: "Hourly rate",
    from: "From",
    nowPlaceholder: "Empty = available now",
    talking: "In talks with others",
    since: "With client since",
  },
};

window.Builder = Builder;
