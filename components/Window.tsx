import { ReactNode, useRef, useState, useCallback, useEffect } from "react";
import { IconClose, IconMaximize, IconMinimize } from "./Icons";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  initialX?: number;
  initialY?: number;
  active?: boolean;
  onFocus?: () => void;
  onClose?: () => void;
  icon?: ReactNode;
  menubar?: ReactNode;
  toolbar?: ReactNode;
  statusbar?: ReactNode;
};

export default function Window({
  title,
  children,
  className,
  width = 600,
  height = 400,
  initialX = 100,
  initialY = 60,
  active = true,
  onFocus,
  onClose,
  icon,
  menubar,
  toolbar,
  statusbar,
}: Props) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ w: width, h: height });
  const [maximized, setMaximized] = useState(false);
  const [prevState, setPrevState] = useState({ x: initialX, y: initialY, w: width, h: height });
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (maximized) return;
      dragging.current = true;
      dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      onFocus?.();
      e.preventDefault();
    },
    [pos, onFocus, maximized]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: Math.max(0, e.clientY - dragOffset.current.y),
      });
    };
    const onMouseUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const toggleMaximize = () => {
    if (maximized) {
      setPos({ x: prevState.x, y: prevState.y });
      setSize({ w: prevState.w, h: prevState.h });
      setMaximized(false);
    } else {
      setPrevState({ x: pos.x, y: pos.y, w: size.w, h: size.h });
      setPos({ x: 0, y: 0 });
      setSize({ w: window.innerWidth, h: window.innerHeight - 40 });
      setMaximized(true);
    }
  };

  return (
    <div
      className={`ox-draggable-window ${active ? "focused" : ""} ${className || ""}`}
      style={{
        left: pos.x,
        top: pos.y,
        width: size.w,
        height: size.h,
      }}
      onMouseDown={onFocus}
    >
      <div
        className="ox-window-frame"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Title bar */}
        <div
          className={`ox-titlebar ${active ? "active" : ""}`}
          onMouseDown={onMouseDown}
          onDoubleClick={toggleMaximize}
        >
          {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
          <span className="ox-title">{title}</span>
          <div className="ox-title-buttons">
            <button className="ox-title-btn" aria-label="Minimize" onClick={(e) => e.stopPropagation()}>
              <IconMinimize size={10} />
            </button>
            <button className="ox-title-btn" aria-label="Maximize" onClick={(e) => { e.stopPropagation(); toggleMaximize(); }}>
              <IconMaximize size={10} />
            </button>
            <button className="ox-title-btn close" aria-label="Close" onClick={(e) => { e.stopPropagation(); onClose?.(); }}>
              <IconClose size={10} />
            </button>
          </div>
        </div>

        {/* Menu bar */}
        {menubar}

        {/* Toolbar */}
        {toolbar}

        {/* Content */}
        <div style={{ flex: 1, overflow: "hidden", display: "flex" }}>
          {children}
        </div>

        {/* Status bar */}
        {statusbar}
      </div>
    </div>
  );
}
