import { useState } from "react";
import {
  IconStar,
  IconApps,
  IconSettings,
  IconPower,
  IconSleep,
  IconRestart,
  IconDiscover,
  IconFileManager,
  IconSystemSettings,
  IconKonsole,
  IconTextEditor,
  IconBrowser,
} from "./Icons";

type AppItem = {
  name: string;
  icon: React.ReactNode;
};

const categories = [
  { name: "Favorites", icon: <IconStar size={16} /> },
  { name: "All Applications", icon: <IconApps size={16} /> },
  { name: "Development", icon: <IconKonsole size={16} /> },
  { name: "Games", icon: <IconApps size={16} /> },
  { name: "Graphics", icon: <IconPictures size={16} /> },
  { name: "Help", icon: <IconApps size={16} /> },
  { name: "Internet", icon: <IconBrowser size={16} /> },
  { name: "Multimedia", icon: <IconApps size={16} /> },
  { name: "Office", icon: <IconTextEditor size={16} /> },
  { name: "System", icon: <IconSettings size={16} /> },
  { name: "Utilities", icon: <IconApps size={16} /> },
  { name: "Lost & Found", icon: <IconApps size={16} /> },
];

import { IconPictures } from "./Icons";

const favoriteApps: AppItem[] = [
  { name: "Discover", icon: <IconDiscover size={40} /> },
  { name: "Dolphin", icon: <IconFileManager size={40} /> },
  { name: "System Settings", icon: <IconSystemSettings size={40} /> },
];

const allApps: AppItem[] = [
  { name: "Discover", icon: <IconDiscover size={40} /> },
  { name: "Dolphin", icon: <IconFileManager size={40} /> },
  { name: "System Settings", icon: <IconSystemSettings size={40} /> },
  { name: "Konsole", icon: <IconKonsole size={40} /> },
  { name: "Kate", icon: <IconTextEditor size={40} /> },
  { name: "Firefox", icon: <IconBrowser size={40} /> },
  { name: "Gwenview", icon: <IconPictures size={40} /> },
  { name: "KCalc", icon: <IconApps size={40} /> },
  { name: "Spectacle", icon: <IconApps size={40} /> },
  { name: "Okular", icon: <IconApps size={40} /> },
  { name: "Ark", icon: <IconApps size={40} /> },
  { name: "Info Center", icon: <IconSettings size={40} /> },
];

type LauncherProps = {
  onClose: () => void;
};

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
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
        }}
        onClick={onClose}
      />

      <div className="ox-launcher" id="app-launcher">
        {/* Sidebar */}
        <div className="ox-launcher-sidebar">
          <div className="ox-launcher-sidebar-header">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#546e7a" />
              <text x="24" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">W</text>
            </svg>
            <span>Wikipedia</span>
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
              <span className="cat-icon">{cat.icon}</span>
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
                <div className="app-icon">{app.icon}</div>
                <div className="app-name">{app.name}</div>
              </div>
            ))}
          </div>

          {/* Footer with session buttons */}
          <div className="ox-launcher-footer">
            <button className="ox-launcher-footer-btn" title="Applications">
              <IconApps size={14} /> Applications
            </button>
            <button className="ox-launcher-footer-btn" title="Places">
              <IconFileManager size={14} /> Places
            </button>
            <div style={{ flex: 1 }} />
            <button className="ox-launcher-footer-btn" title="Sleep">
              <IconSleep size={14} /> Sleep
            </button>
            <button className="ox-launcher-footer-btn" title="Hibernate">
              <IconSleep size={14} /> Hibernate
            </button>
            <button className="ox-launcher-footer-btn" title="Restart">
              <IconRestart size={14} /> Restart
            </button>
            <button className="ox-launcher-footer-btn" title="Shut Down">
              <IconPower size={14} /> Shut Down
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
