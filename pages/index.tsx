import { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import Window from "@/components/Window";
import Panel from "@/components/Panel";
import AppLauncher from "@/components/AppLauncher";
import DolphinContent from "@/components/DolphinContent";
import SystemSettingsContent from "@/components/SystemSettingsContent";
import { Oxygen2Icon } from "@/components/Icons";

type WindowInstance = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  active: boolean;
  width?: number;
  height?: number;
  initialX?: number;
  initialY?: number;
};

/** Compute responsive window dimensions based on viewport */
function getResponsiveWindows(vw: number, vh: number): WindowInstance[] {
  const isMobile = vw < 768;
  const isTablet = vw >= 768 && vw < 1024;

  if (isMobile) {
    // On mobile: stack windows full-width
    return [
      {
        id: "settings",
        title: "About KDE — System Settings",
        icon: <Oxygen2Icon name="categories/preferences-system" size={16} />,
        content: <SystemSettingsContent />,
        active: true,
        width: vw - 8,
        height: Math.min(vh - 56, 400),
        initialX: 4,
        initialY: 4,
      },
    ];
  }

  if (isTablet) {
    return [
      {
        id: "dolphin",
        title: "Home — Dolphin",
        icon: <Oxygen2Icon name="apps/system-file-manager" size={16} />,
        content: <DolphinContent />,
        active: false,
        width: Math.min(vw - 40, 560),
        height: Math.min(vh - 80, 380),
        initialX: Math.max(20, vw - 580),
        initialY: 60,
      },
      {
        id: "settings",
        title: "About KDE — System Settings",
        icon: <Oxygen2Icon name="categories/preferences-system" size={16} />,
        content: <SystemSettingsContent />,
        active: true,
        width: Math.min(vw - 40, 480),
        height: Math.min(vh - 80, 360),
        initialX: 20,
        initialY: 20,
      },
    ];
  }

  // Desktop
  return [
    {
      id: "dolphin",
      title: "Home — Dolphin",
      icon: <Oxygen2Icon name="apps/system-file-manager" size={16} />,
      content: <DolphinContent />,
      active: false,
      width: Math.min(700, vw - 100),
      height: Math.min(480, vh - 120),
      initialX: Math.min(350, vw - 720),
      initialY: 100,
    },
    {
      id: "settings",
      title: "About KDE — System Settings",
      icon: <Oxygen2Icon name="categories/preferences-system" size={16} />,
      content: <SystemSettingsContent />,
      active: true,
      width: Math.min(580, vw - 80),
      height: Math.min(420, vh - 100),
      initialX: 60,
      initialY: 40,
    },
  ];
}

export default function Home() {
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Compute responsive window positions on mount and resize
  useEffect(() => {
    const updateWindows = () => {
      if (!initialized) {
        setWindows(getResponsiveWindows(window.innerWidth, window.innerHeight));
        setInitialized(true);
      }
    };
    updateWindows();
    // We only set initial positions on mount — dragging handles the rest
  }, [initialized]);

  const toggleLauncher = useCallback(() => {
    setLauncherOpen((prev) => !prev);
  }, []);

  const closeLauncher = useCallback(() => {
    setLauncherOpen(false);
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        active: w.id === id,
      }))
    );
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  return (
    <>
      <Head>
        <title>Plasma 6 Desktop – Oxygen‑2 theme</title>
        <meta
          name="description"
          content="A web‑based simulation of KDE Plasma 6 UI using the Oxygen‑2 theme."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Skip navigation link for keyboard users */}
      <a
        href="#desktop-main"
        className="ox-skip-nav"
        id="skip-nav"
      >
        Skip to desktop
      </a>

      <div className="ox-desktop" role="application" aria-label="KDE Plasma 6 Desktop">
        {/* Desktop Background */}
        <div className="ox-desktop-bg" aria-hidden="true" />

        {/* Desktop Content / Windows */}
        <main
          id="desktop-main"
          role="region"
          aria-label="Desktop windows"
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          {windows.map((win) => (
            <Window
              key={win.id}
              title={win.title}
              icon={win.icon}
              width={win.width}
              height={win.height}
              initialX={win.initialX}
              initialY={win.initialY}
              active={win.active}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
            >
              {win.content}
            </Window>
          ))}
        </main>

        {/* App Launcher (Start Menu) */}
        {launcherOpen && <AppLauncher onClose={closeLauncher} />}

        {/* Bottom Panel (Taskbar) */}
        <Panel
          onLauncherToggle={toggleLauncher}
          launcherOpen={launcherOpen}
          windows={windows}
          onWindowFocus={focusWindow}
        />
      </div>
    </>
  );
}
