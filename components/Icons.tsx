/* ---------------------------------------------------------
   Icons.tsx – Oxygen‑2 icon helpers
   
   Window‑decoration glyphs (close / maximise / minimise) stay as
   inline SVGs because they are tiny and tightly coupled to the
   titlebar styling.
   
   Everything else uses the real Oxygen‑2 theme icons through
   the <Oxygen2Icon> component (renders <img> pointing at
   /oxygen2/…svg).
   --------------------------------------------------------- */
import React from "react";
export { default as Oxygen2Icon } from "./Oxygen2Icon";

/* ── Shared type ── */
type IconProps = { size?: number; className?: string; color?: string };

/* ── Window‑decoration glyphs (inline SVG) ── */
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

/* ── System‑tray arrow (small UI chrome) ── */
export function IconArrowUp({ size = 16, className, color = "currentColor" }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 10l5-5 5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
