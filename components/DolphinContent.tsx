import {
  IconHome,
  IconDesktop,
  IconDocuments,
  IconDownloads,
  IconMusic,
  IconPictures,
  IconVideos,
  IconTrash,
  IconNetwork,
  IconFolder,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconSearch,
} from "./Icons";

const places = [
  { name: "Home", icon: <IconHome size={16} />, active: true },
  { name: "Desktop", icon: <IconDesktop size={16} /> },
  { name: "Documents", icon: <IconDocuments size={16} /> },
  { name: "Downloads", icon: <IconDownloads size={16} /> },
  { name: "Music", icon: <IconMusic size={16} /> },
  { name: "Pictures", icon: <IconPictures size={16} /> },
  { name: "Videos", icon: <IconVideos size={16} /> },
  { name: "Trash", icon: <IconTrash size={16} /> },
];

const remote = [
  { name: "Network", icon: <IconNetwork size={16} /> },
];

const recent = [
  { name: "Recent Files", icon: <IconDocuments size={16} /> },
  { name: "Recent Locations", icon: <IconFolder size={16} /> },
];

type FolderItem = {
  name: string;
  type: "folder" | "file";
  color?: string;
};

const homeFiles: FolderItem[] = [
  { name: "Desktop", type: "folder", color: "#42a5f5" },
  { name: "Documents", type: "folder", color: "#66bb6a" },
  { name: "Downloads", type: "folder", color: "#ffa726" },
  { name: "Music", type: "folder", color: "#ab47bc" },
  { name: "Pictures", type: "folder", color: "#26c6da" },
  { name: "Videos", type: "folder", color: "#ef5350" },
  { name: "Templates", type: "folder", color: "#78909c" },
  { name: ".config", type: "folder", color: "#8d6e63" },
];

export default function DolphinContent() {
  return (
    <>
      {/* Toolbar */}
      <div className="ox-toolbar">
        <button className="ox-toolbar-btn disabled" aria-label="Back">
          <IconArrowLeft size={16} color="#7f8c8d" />
        </button>
        <button className="ox-toolbar-btn disabled" aria-label="Forward">
          <IconArrowRight size={16} color="#7f8c8d" />
        </button>
        <button className="ox-toolbar-btn" aria-label="Up">
          <IconArrowUp size={16} />
        </button>
        <div className="ox-toolbar-separator" />
        <div className="ox-breadcrumb">
          <span>&gt;</span> Home
        </div>
        <div className="ox-toolbar-separator" />
        <button className="ox-toolbar-btn" aria-label="Search">
          <IconSearch size={16} />
        </button>
      </div>

      {/* Body: Sidebar + File Grid */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div className="ox-sidebar">
          <div className="ox-sidebar-section">Places</div>
          {places.map((p) => (
            <div key={p.name} className={`ox-sidebar-item ${p.active ? "active" : ""}`}>
              <span className="sidebar-icon">{p.icon}</span>
              {p.name}
            </div>
          ))}

          <div className="ox-sidebar-section" style={{ marginTop: 8 }}>Remote</div>
          {remote.map((r) => (
            <div key={r.name} className="ox-sidebar-item">
              <span className="sidebar-icon">{r.icon}</span>
              {r.name}
            </div>
          ))}

          <div className="ox-sidebar-section" style={{ marginTop: 8 }}>Recent</div>
          {recent.map((r) => (
            <div key={r.name} className="ox-sidebar-item">
              <span className="sidebar-icon">{r.icon}</span>
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
                <IconFolder size={48} color={file.color} />
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
