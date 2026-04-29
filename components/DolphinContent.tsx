import Oxygen2Icon from "./Oxygen2Icon";

/* ── Sidebar entries ── */
const places = [
  { name: "Home",      icon: "places/user-home",        active: true },
  { name: "Desktop",   icon: "places/user-desktop" },
  { name: "Documents", icon: "places/folder-documents" },
  { name: "Downloads", icon: "places/folder-downloads" },
  { name: "Music",     icon: "places/folder-sound" },
  { name: "Pictures",  icon: "places/folder-image" },
  { name: "Videos",    icon: "places/folder-video" },
  { name: "Trash",     icon: "places/user-trash" },
];

const remote = [
  { name: "Network", icon: "places/network-workgroup" },
];

const recent = [
  { name: "Recent Files",     icon: "places/document-multiple" },
  { name: "Recent Locations", icon: "places/folder-default" },
];

/* ── File‑grid items ── */
type FolderItem = { name: string; icon: string };

const homeFiles: FolderItem[] = [
  { name: "Desktop",   icon: "places/user-desktop" },
  { name: "Documents", icon: "places/folder-documents" },
  { name: "Downloads", icon: "places/folder-downloads" },
  { name: "Music",     icon: "places/folder-sound" },
  { name: "Pictures",  icon: "places/folder-image" },
  { name: "Videos",    icon: "places/folder-video" },
  { name: "Templates", icon: "places/folder-temp" },
  { name: ".config",   icon: "places/folder-brown" },
];

export default function DolphinContent() {
  return (
    <>
      {/* Toolbar */}
      <div className="ox-toolbar">
        <button className="ox-toolbar-btn disabled" aria-label="Back">
          <Oxygen2Icon name="actions/go-previous" size={16} alt="Back" />
        </button>
        <button className="ox-toolbar-btn disabled" aria-label="Forward">
          <Oxygen2Icon name="actions/go-next" size={16} alt="Forward" />
        </button>
        <button className="ox-toolbar-btn" aria-label="Up">
          <Oxygen2Icon name="actions/go-up" size={16} alt="Up" />
        </button>
        <div className="ox-toolbar-separator" />
        <div className="ox-breadcrumb">
          <span>&gt;</span> Home
        </div>
        <div className="ox-toolbar-separator" />
        <button className="ox-toolbar-btn" aria-label="Search">
          <Oxygen2Icon name="actions/edit-find" size={16} alt="Search" />
        </button>
      </div>

      {/* Body: Sidebar + File Grid */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div className="ox-sidebar">
          <div className="ox-sidebar-section">Places</div>
          {places.map((p) => (
            <div key={p.name} className={`ox-sidebar-item ${p.active ? "active" : ""}`}>
              <span className="sidebar-icon">
                <Oxygen2Icon name={p.icon} size={16} alt={p.name} />
              </span>
              {p.name}
            </div>
          ))}

          <div className="ox-sidebar-section" style={{ marginTop: 8 }}>Remote</div>
          {remote.map((r) => (
            <div key={r.name} className="ox-sidebar-item">
              <span className="sidebar-icon">
                <Oxygen2Icon name={r.icon} size={16} alt={r.name} />
              </span>
              {r.name}
            </div>
          ))}

          <div className="ox-sidebar-section" style={{ marginTop: 8 }}>Recent</div>
          {recent.map((r) => (
            <div key={r.name} className="ox-sidebar-item">
              <span className="sidebar-icon">
                <Oxygen2Icon name={r.icon} size={16} alt={r.name} />
              </span>
              {r.name}
            </div>
          ))}

          <div className="ox-sidebar-section" style={{ marginTop: 8 }}>Devices</div>
        </div>

        {/* File grid */}
        <div className="ox-file-grid">
          {homeFiles.map((file) => (
            <div key={file.name} className="ox-file-item">
              <div className="file-icon">
                <Oxygen2Icon name={file.icon} size={48} alt={file.name} />
              </div>
              <div className="file-name">{file.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="ox-statusbar">
        <span>{homeFiles.length} folders</span>
      </div>
    </>
  );
}
