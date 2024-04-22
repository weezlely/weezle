import type { Dispatch, HTMLAttributes } from "react";

export interface FlyoutContextProps {
  isOpen: boolean;
  toggle: Dispatch<React.SetStateAction<boolean>>;
}
interface OverLayProps {}
interface ToggleProps {}
interface HeaderProps {}
interface ListProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "default";
  variant?: "default" | "primary" | "secondary" | "translucent";
  isBorder?: boolean;
}

interface ItemProps {
  to?: string;
}

export type FlyoutProviderProps = React.PropsWithChildren<FlyoutContextProps>;
export type FlyoutOverLayProps = React.PropsWithChildren<OverLayProps> & HTMLAttributes<HTMLElement>;
export type FlyoutToggleProps = React.PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;
export type FlyoutHeaderProps = React.PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
export type FlyoutListProps = React.PropsWithChildren<ListProps> & Omit<HTMLAttributes<HTMLDivElement>, "color">;
export type FlyoutItemProps = React.PropsWithChildren<ItemProps> & HTMLAttributes<HTMLElement>;
