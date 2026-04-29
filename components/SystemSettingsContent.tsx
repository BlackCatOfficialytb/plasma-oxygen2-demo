import Oxygen2Icon from "./Oxygen2Icon";

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
            <Oxygen2Icon name="apps/kde" size={80} alt="KDE Logo" />
            <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8, color: "var(--ox-accent)" }}>KDE</div>
            <div style={{ fontSize: 13, color: "var(--ox-fg-muted)", fontStyle: "italic" }}>Be Free!</div>
          </div>

          <div className="kde-info">
            <h2 style={{ fontSize: 18, marginBottom: 12 }}>KDE Plasma 6</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 16px', marginBottom: 20 }}>
              <span style={{ color: 'var(--ox-fg-muted)' }}>KDE Plasma Version:</span>
              <span>6.0.0</span>
              <span style={{ color: 'var(--ox-fg-muted)' }}>KDE Frameworks Version:</span>
              <span>6.1.0</span>
              <span style={{ color: 'var(--ox-fg-muted)' }}>Qt Version:</span>
              <span>6.6.2</span>
              <span style={{ color: 'var(--ox-fg-muted)' }}>Kernel Version:</span>
              <span>6.8.0-generic (64-bit)</span>
              <span style={{ color: 'var(--ox-fg-muted)' }}>Graphics Platform:</span>
              <span>Wayland</span>
            </div>

            <p style={{ marginBottom: 12 }}>
              <strong>KDE</strong> is a world wide community of software engineers, artists, writers, translators and
              creators who are committed to{" "}
              <a href="https://www.gnu.org/philosophy/free-sw.html" target="_blank" rel="noreferrer">
                free software
              </a>{" "}
              development.
            </p>

            <p style={{ marginBottom: 12 }}>
              Everyone is welcome to{" "}
              <a href="https://community.kde.org/Get_Involved" target="_blank" rel="noreferrer">
                join and contribute
              </a>{" "}
              to KDE, including you.
            </p>

            <p>
              Visit{" "}
              <a href="https://www.kde.org" target="_blank" rel="noreferrer">
                https://www.kde.org
              </a>{" "}
              for more information.
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
          Close
        </button>
      </div>
    </>
  );
}
