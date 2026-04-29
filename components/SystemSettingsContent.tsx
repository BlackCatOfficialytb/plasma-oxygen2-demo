import { useState } from "react";
import Oxygen2Icon from "./Oxygen2Icon";

const TABS = ["About", "Report Bugs or Wishes", "Join KDE", "Support KDE"] as const;

export default function SystemSettingsContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Tabs */}
      <div className="ox-tabs">
        {TABS.map((label, i) => (
          <div
            key={label}
            className={`ox-tab${i === activeTab ? " active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {activeTab === 0 && <AboutTab />}
        {activeTab === 1 && <ReportBugsTab />}
        {activeTab === 2 && <JoinKDETab />}
        {activeTab === 3 && <SupportKDETab />}
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

function AboutTab() {
  return (
    <div className="ox-about-kde">
      <div className="kde-logo-area">
        <Oxygen2Icon name="apps/kde" size={80} alt="KDE Logo" />
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 8, color: "var(--ox-accent)" }}>KDE</div>
        <div style={{ fontSize: 13, color: "var(--ox-fg-muted)", fontStyle: "italic" }}>Be Free!</div>
      </div>

      <div className="kde-info">
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>KDE Plasma 6</h2>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 16px", marginBottom: 20 }}>
          <span style={{ color: "var(--ox-fg-muted)" }}>KDE Plasma Version:</span>
          <span>6.0.0</span>
          <span style={{ color: "var(--ox-fg-muted)" }}>KDE Frameworks Version:</span>
          <span>6.1.0</span>
          <span style={{ color: "var(--ox-fg-muted)" }}>Qt Version:</span>
          <span>6.6.2</span>
          <span style={{ color: "var(--ox-fg-muted)" }}>Kernel Version:</span>
          <span>6.8.0-generic (64-bit)</span>
          <span style={{ color: "var(--ox-fg-muted)" }}>Graphics Platform:</span>
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

        <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid #ccc" }} />

        <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6 }}>
          This Preview is made by{" "}
          <a href="https://github.com/BlackCatOfficialytb/plasma-oxygen2-demo" target="_blank" rel="noreferrer">
            BlackCatOfficial
          </a>{" "}
          using Next.js, allowed for full permissions by CC0 License.
        </p>
      </div>
    </div>
  );
}

function ReportBugsTab() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 18, marginBottom: 16 }}>Report Bugs or Wishes</h2>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        If you find a bug or have a suggestion for improvement, you can report it using the{" "}
        <a href="https://bugs.kde.org" target="_blank" rel="noreferrer">
          KDE Bug Tracking System
        </a>
        .
      </p>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        Before filing a bug report, please check if your issue has already been reported. Duplicate reports slow down
        development.
      </p>
      <p style={{ lineHeight: 1.6, color: "var(--ox-fg-muted)" }}>
        To report a bug, you will need a KDE Bugzilla account. You can create one for free.
      </p>
    </div>
  );
}

function JoinKDETab() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 18, marginBottom: 16 }}>Join KDE</h2>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        KDE is created by volunteers like you. Everyone can contribute, and we need your help!
      </p>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        Whether you are a programmer, designer, translator, writer, or tester, there is a place for you in the KDE
        community.
      </p>
      <p style={{ lineHeight: 1.6 }}>
        Visit{" "}
        <a href="https://community.kde.org/Get_Involved" target="_blank" rel="noreferrer">
          community.kde.org/Get_Involved
        </a>{" "}
        to learn how you can make a difference.
      </p>
    </div>
  );
}

function SupportKDETab() {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 18, marginBottom: 16 }}>Support KDE</h2>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        KDE is a community of volunteers and relies on donations and sponsorships to fund its infrastructure and events.
      </p>
      <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
        You can support KDE by{" "}
        <a href="https://kde.org/community/donations/" target="_blank" rel="noreferrer">
          making a donation
        </a>
        , becoming a{" "}
        <a href="https://kde.org/community/supporting-members/" target="_blank" rel="noreferrer">
          supporting member
        </a>
        , or by spreading the word.
      </p>
      <p style={{ lineHeight: 1.6, color: "var(--ox-fg-muted)" }}>
        Every contribution, no matter how small, helps keep KDE going.
      </p>
    </div>
  );
}
