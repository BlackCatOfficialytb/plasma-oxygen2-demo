import { KdeLogo } from "./Icons";

export default function SystemSettingsContent() {
  return (
    <>
      {/* Tabs */}
      <div className="ox-tabs">
        <div className="ox-tab active">About</div>
        <div className="ox-tab">Report Bugs or Wishes</div>
        <div className="ox-tab">Join KDE</div>
        <div className="ox-tab">Support KDE</div>
      </div>

      {/* About KDE body */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <div className="ox-about-kde">
          <div className="kde-logo-area">
            <KdeLogo size={80} />
            <div style={{ fontSize: 18, fontWeight: 700, color: "#1d99f3" }}>KDE</div>
            <div style={{ fontSize: 11, color: "var(--ox-fg-muted)" }}>Be Free!</div>
            <div style={{ marginTop: 12 }}>
              {/* Konqi mascot placeholder — a fun colored circle */}
              <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
                <ellipse cx="45" cy="55" rx="30" ry="35" fill="#4caf50" />
                <ellipse cx="45" cy="50" rx="25" ry="28" fill="#66bb6a" />
                {/* Eyes */}
                <circle cx="37" cy="42" r="5" fill="white" />
                <circle cx="53" cy="42" r="5" fill="white" />
                <circle cx="38" cy="43" r="2.5" fill="#333" />
                <circle cx="54" cy="43" r="2.5" fill="#333" />
                {/* Mouth */}
                <path d="M38 56 Q45 62 52 56" stroke="#333" strokeWidth="1.5" fill="none" />
                {/* Spikes */}
                <path d="M30 25l5 10M45 18l0 12M60 25l-5 10" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" />
                {/* Arms */}
                <path d="M18 55l10 5M72 55l-10 5" stroke="#4caf50" strokeWidth="4" strokeLinecap="round" />
                {/* Belly */}
                <ellipse cx="45" cy="62" rx="14" ry="12" fill="#a5d6a7" />
              </svg>
            </div>
          </div>

          <div className="kde-info">
            <p style={{ marginBottom: 12 }}>
              <strong>KDE</strong> is a world wide community of software engineers, artists, writers, translators and
              creators who are committed to{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                free software
              </a>{" "}
              development. KDE produces the Plasma desktop environment, hundreds of applications, and the many software
              libraries that support them.
            </p>

            <p style={{ marginBottom: 12 }}>
              KDE is a cooperative enterprise: no single entity controls its direction or products. Instead, we work
              together to achieve the common goal of building the world&apos;s finest Free Software. Everyone is welcome to{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                join and contribute
              </a>{" "}
              to KDE, including you.
            </p>

            <p>
              Visit{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                https://www.kde.org
              </a>{" "}
              for more information about the KDE community and the software we produce.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom close button */}
      <div
        style={{
          borderTop: "1px solid var(--ox-border)",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button className="ox-button" style={{ minWidth: 80 }}>
          ✕ Close
        </button>
      </div>
    </>
  );
}
