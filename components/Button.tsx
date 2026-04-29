import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("ox-button", className)}
    >
      {children}
    </button>
  );
}
