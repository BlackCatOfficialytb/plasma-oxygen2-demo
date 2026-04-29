/**
 * Oxygen2Icon – renders real Oxygen‑2 theme SVG icons via <img>.
 *
 * Usage:
 *   <Oxygen2Icon name="apps/system-file-manager" size={48} />
 *   <Oxygen2Icon name="places/folder-documents"  size={16} />
 *
 * The `name` maps to /oxygen2/{category}/{icon}.svg in the public dir.
 */
import React from "react";

type Props = {
  /** Icon path relative to /oxygen2/, without .svg extension.
   *  Example: "apps/system-file-manager" */
  name: string;
  size?: number;
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
};

export default function Oxygen2Icon({
  name,
  size = 24,
  className,
  alt,
  style,
}: Props) {
  return (
    <img
      src={`/oxygen2/${name}.svg`}
      width={size}
      height={size}
      alt={alt || name.split("/").pop() || "icon"}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      draggable={false}
    />
  );
}
