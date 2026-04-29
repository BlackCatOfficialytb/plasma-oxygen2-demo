import { useState, useEffect } from "react";
import {
  KdeLogo,
  IconWifi,
  IconVolume,
  IconBattery,
  IconArrowUp,
  IconFileManager,
  IconSystemSettings,
} from "./Icons";

type PanelProps = {
  onLauncherToggle: () => void;
  launcherOpen: boolean;
  windows: { id: string; title: string; icon?: React.ReactNode; active: boolean }[];
  onWindowFocus: (id: string) => void;
};

export default function Panel({ onLauncherToggle, launcherOpen, windows, onWindowFocus }: PanelProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const dateStr = time.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <footer className="ox-panel" id="panel-taskbar">
      {/* KDE Start button */}
      <button
        className={`ox-panel-button launcher ${launcherOpen ? "active" : ""}`}
        onClick={onLauncherToggle}
        aria-label="Application Launcher"
        id="panel-launcher-btn"
      >
        <KdeLogo size={22} />
      </button>

      {/* Task entries */}
      {windows.map((w) => (
        <button
          key={w.id}
          className={`ox-panel-button ${w.active ? "active" : ""}`}
          onClick={() => onWindowFocus(w.id)}
        >
          {w.icon && <span style={{ display: "flex", width: 16, height: 16 }}>{w.icon}</span>}
          <span>{w.title}</span>
        </button>
      ))}

      <div className="ox-panel-spacer" />

      {/* System tray */}
      <div className="ox-panel-tray" id="panel-systray">
        <button className="ox-panel-tray-btn" aria-label="Show hidden icons">
          <IconArrowUp size={12} />
        </button>
        <button className="ox-panel-tray-btn" aria-label="Network">
          <IconWifi size={16} />
        </button>
        <button className="ox-panel-tray-btn" aria-label="Volume">
          <IconVolume size={16} />
        </button>
        <button className="ox-panel-tray-btn" aria-label="Battery">
          <IconBattery size={16} />
        </button>
      </div>

      {/* Clock */}
      <div className="ox-panel-clock" id="panel-clock">
        <span className="time">{hours}:{minutes}</span>
        <span className="date">{dateStr}</span>
      </div>
    </footer>
  );
}
