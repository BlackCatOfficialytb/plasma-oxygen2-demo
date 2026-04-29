/* Inline SVG icon components for the Plasma 6 Desktop */
import React from "react";

/* ── KDE Logo (gear) ── */
export function KdeLogo({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="kde-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#1d99f3" />
          <stop offset="100%" stopColor="#1565c0" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="8" fill="url(#kde-grad)" />
      <path d="M24 8L14 14v20l10 6 10-6V14L24 8z" fill="white" fillOpacity="0.9" />
      <path d="M24 12l-7 4v14l7 4 7-4V16l-7-4z" fill="url(#kde-grad)" />
      <path d="M24 16l-4 2.3v9.4L24 30l4-2.3v-9.4L24 16z" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

/* ── Generic SVG icon wrapper ── */
type IconProps = { size?: number; className?: string; color?: string };

export function IconClose({ size = 14, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 3l8 8M11 3l-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMaximize({ size = 14, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function IconMinimize({ size = 14, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFolder({ size = 48, className, color }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 12h14l4 4h18a2 2 0 012 2v20a2 2 0 01-2 2H6a2 2 0 01-2-2V14a2 2 0 012-2z" fill={color || "#f0c040"} />
      <path d="M4 20h40v18a2 2 0 01-2 2H6a2 2 0 01-2-2V20z" fill={color || "#fdd835"} />
    </svg>
  );
}

export function IconFile({ size = 48, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M12 6h16l10 10v26a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" fill="#e0e0e0" />
      <path d="M28 6l10 10H30a2 2 0 01-2-2V6z" fill="#bdbdbd" />
    </svg>
  );
}

export function IconHome({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8l6-5 6 5v5.5a.5.5 0 01-.5.5h-3v-3.5H5.5V14h-3a.5.5 0 01-.5-.5V8z" fill={color} fillOpacity="0.8" />
    </svg>
  );
}

export function IconDesktop({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="2" width="14" height="10" rx="1" stroke={color} strokeWidth="1.2" />
      <path d="M5 14h6M8 12v2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconDocuments({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="3" y="1" width="10" height="14" rx="1" stroke={color} strokeWidth="1.2" />
      <path d="M5 5h6M5 7.5h6M5 10h4" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconDownloads({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2v8M5 7l3 3 3-3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11v2.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V11" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconMusic({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="5" cy="12" r="2" stroke={color} strokeWidth="1.2" />
      <circle cx="12" cy="10" r="2" stroke={color} strokeWidth="1.2" />
      <path d="M7 12V4l7-2v8" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function IconPictures({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="1" stroke={color} strokeWidth="1.2" />
      <circle cx="5" cy="6.5" r="1.5" fill={color} fillOpacity="0.5" />
      <path d="M1 11l4-3 3 2 3-2 4 3" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function IconVideos({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="10" height="10" rx="1" stroke={color} strokeWidth="1.2" />
      <path d="M11 6l4-2v8l-4-2" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTrash({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 4h12M5.5 4V2.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3.5 4l.8 9.5a1 1 0 001 .9h5.4a1 1 0 001-.9L12.5 4" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function IconNetwork({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.2" />
      <ellipse cx="8" cy="8" rx="3" ry="6" stroke={color} strokeWidth="1" />
      <path d="M2 8h12M3 5h10M3 11h10" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export function IconWifi({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M1 5.5a10 10 0 0114 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3.5 8a6.5 6.5 0 019 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 10.5a3.5 3.5 0 014 0" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="13" r="1" fill={color} />
    </svg>
  );
}

export function IconVolume({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 6h2.5L8 3v10l-3.5-3H2a.5.5 0 01-.5-.5v-3A.5.5 0 012 6z" fill={color} fillOpacity="0.7" />
      <path d="M10 5.5a3 3 0 010 5M12 3.5a6 6 0 010 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBattery({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="12" height="8" rx="1" stroke={color} strokeWidth="1.2" />
      <rect x="3" y="6" width="7" height="4" rx="0.5" fill="#27ae60" />
      <path d="M13 6.5h1.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H13" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function IconSearch({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="4.5" stroke={color} strokeWidth="1.2" />
      <path d="M10.5 10.5L14 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowLeft({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUp({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 10l5-5 5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconStar({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill={color} fillOpacity="0.7">
      <path d="M8 1l2.2 4.5 5 .7-3.6 3.5.9 5L8 12.5 3.5 14.7l.9-5L.8 6.2l5-.7L8 1z" />
    </svg>
  );
}

export function IconApps({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1" fill={color} fillOpacity="0.6" />
      <rect x="9" y="1" width="6" height="6" rx="1" fill={color} fillOpacity="0.6" />
      <rect x="1" y="9" width="6" height="6" rx="1" fill={color} fillOpacity="0.6" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill={color} fillOpacity="0.6" />
    </svg>
  );
}

export function IconSettings({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2" stroke={color} strokeWidth="1.2" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M13.1 2.9l-1.4 1.4M4.3 11.7l-1.4 1.4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPower({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 1v6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 3.5a6 6 0 108 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconSleep({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M13 8A5 5 0 118 3a4 4 0 005 5z" fill={color} fillOpacity="0.7" />
    </svg>
  );
}

export function IconRestart({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8a6 6 0 0110.9-3.5M14 2v3.5h-3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 8a6 6 0 01-10.9 3.5M2 14v-3.5h3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFileManager({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="40" height="32" rx="3" fill="#1565c0" />
      <path d="M4 16h40v21a3 3 0 01-3 3H7a3 3 0 01-3-3V16z" fill="#1e88e5" />
      <path d="M4 12h16l3 4h21" stroke="#0d47a1" strokeWidth="1" />
    </svg>
  );
}

export function IconSystemSettings({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill="#546e7a" />
      <circle cx="24" cy="24" r="6" fill="white" fillOpacity="0.9" />
      <path d="M24 4v4M24 40v4M4 24h4M40 24h4M9.4 9.4l2.8 2.8M35.8 35.8l2.8 2.8M38.6 9.4l-2.8 2.8M12.2 35.8l-2.8 2.8" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconDiscover({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#00897b" />
      <circle cx="24" cy="22" r="8" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M30 28l8 8" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <rect x="10" y="34" width="28" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

export function IconKonsole({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="40" height="32" rx="3" fill="#212121" />
      <path d="M12 20l6 4-6 4" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 28h12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconTextEditor({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="4" width="32" height="40" rx="2" fill="#e8e8e8" />
      <path d="M14 14h20M14 20h20M14 26h14M14 32h18" stroke="#616161" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBrowser({ size = 24, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#1565c0" />
      <circle cx="24" cy="24" r="20" stroke="#0d47a1" strokeWidth="1" />
      <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="1.5" fill="none" />
      <ellipse cx="24" cy="24" rx="7" ry="14" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M4 24h40M7 15h34M7 33h34" stroke="white" strokeWidth="1" />
    </svg>
  );
}
