import { useAppStore } from "@/state";
import type { HTMLAttributes, PropsWithChildren } from "react";

interface DrawerProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {
  position?: "left" | "right";
}

export const Drawer = (props: DrawerProps) => {
  const { position = "left", children } = props;

  const { drawer, setDrawer } = useAppStore();

  const onClose = () => setDrawer(false);
  return (
    <div className={`drawer__wrap ${drawer ? "open" : ""}`}>
      <div className={`drawer ${position}`}>
        <button className="drawer__close-button" onClick={onClose}>
          <span className="drawer__text">✖</span>
        </button>
        {children}
      </div>
      {drawer && <div className="drawer__backdrop" onClick={onClose}></div>}
    </div>
  );
};
