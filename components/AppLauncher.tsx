import { useState } from "react";
import Oxygen2Icon from "./Oxygen2Icon";

/* ── Category entries (sidebar) ── */
const categories = [
  { name: "Favorites",          icon: "places/favorites" },
  { name: "All Applications",   icon: "categories/applications-other" },
  { name: "Development",        icon: "categories/applications-development" },
  { name: "Games",              icon: "categories/applications-games" },
  { name: "Graphics",           icon: "categories/applications-graphics" },
  { name: "Help",               icon: "categories/system-help" },
  { name: "Internet",           icon: "categories/applications-internet" },
  { name: "Multimedia",         icon: "categories/applications-multimedia" },
  { name: "Office",             icon: "categories/applications-office" },
  { name: "System",             icon: "categories/applications-system" },
  { name: "Utilities",          icon: "categories/applications-utilities" },
  { name: "Lost & Found",       icon: "categories/applications-other" },
];

/* ── App items ── */
type AppItem = { name: string; icon: string };

const favoriteApps: AppItem[] = [
  { name: "Discover",         icon: "apps/muondiscover" },
  { name: "Dolphin",          icon: "apps/system-file-manager" },
  { name: "System Settings",  icon: "categories/preferences-system" },
];

const allApps: AppItem[] = [
  { name: "Discover",         icon: "apps/muondiscover" },
  { name: "Dolphin",          icon: "apps/system-file-manager" },
  { name: "System Settings",  icon: "categories/preferences-system" },
  { name: "Konsole",          icon: "apps/utilities-terminal" },
  { name: "Kate",             icon: "apps/accessories-text-editor" },
  { name: "Firefox",          icon: "apps/internet-web-browser" },
  { name: "Gwenview",         icon: "apps/graphics-viewer-document" },
  { name: "KCalc",            icon: "apps/accessories-calculator" },
  { name: "Spectacle",        icon: "apps/ksnapshot" },
  { name: "Okular",           icon: "apps/okular" },
  { name: "Ark",              icon: "apps/ark" },
  { name: "Info Center",      icon: "categories/preferences-system" },
];

type LauncherProps = { onClose: () => void };

export default function AppLauncher({ onClose }: LauncherProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentApps = activeCategory === 0 ? favoriteApps : allApps;
  const filteredApps = searchQuery
    ? allApps.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : currentApps;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{ position: "fixed", inset: 0, zIndex: 1000 }}
        onClick={onClose}
      />

      <div className="ox-launcher" id="app-launcher">
        {/* Sidebar */}
        <div className="ox-launcher-sidebar">
          <div className="ox-launcher-sidebar-header">
            <Oxygen2Icon name="apps/kde" size={24} alt="User" />
            <span>KDE User</span>
          </div>
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`ox-launcher-category ${activeCategory === i ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(i);
                setSearchQuery("");
              }}
            >
              <span className="cat-icon">
                <Oxygen2Icon name={cat.icon} size={16} alt={cat.name} />
              </span>
              {cat.name}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="ox-launcher-content">
          {/* Search */}
          <div className="ox-launcher-search">
            <input
              type="text"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              id="launcher-search-input"
            />
          </div>

          {/* App grid */}
          <div className="ox-launcher-grid">
            {filteredApps.map((app) => (
              <div key={app.name} className="ox-launcher-app" onClick={onClose}>
                <div className="app-icon">
                  <Oxygen2Icon name={app.icon} size={40} alt={app.name} />
                </div>
                <div className="app-name">{app.name}</div>
              </div>
            ))}
          </div>

          {/* Footer with session buttons */}
          <div className="ox-launcher-footer">
            <button className="ox-launcher-footer-btn" title="Applications">
              <Oxygen2Icon name="categories/applications-other" size={14} alt="Apps" /> Applications
            </button>
            <button className="ox-launcher-footer-btn" title="Places">
              <Oxygen2Icon name="apps/system-file-manager" size={14} alt="Places" /> Places
            </button>
            <div style={{ flex: 1 }} />
            <button className="ox-launcher-footer-btn" title="Sleep">
              <Oxygen2Icon name="actions/system-suspend" size={14} alt="Sleep" /> Sleep
            </button>
            <button className="ox-launcher-footer-btn" title="Hibernate">
              <Oxygen2Icon name="actions/system-suspend-hibernate" size={14} alt="Hibernate" /> Hibernate
            </button>
            <button className="ox-launcher-footer-btn" title="Restart">
              <Oxygen2Icon name="actions/system-reboot" size={14} alt="Restart" /> Restart
            </button>
            <button className="ox-launcher-footer-btn" title="Shut Down">
              <Oxygen2Icon name="actions/system-shutdown" size={14} alt="Shutdown" /> Shut Down
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
