import type { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

type ContextProps = {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};
type OverLayProps = {};
type ToggleProps = {};
type HeaderProps = {};
type ListProps = {
  backgroundColor?: CSSProperties["backgroundColor"];
};
type ItemProps = {
  color?: Color;
};

/** Flyout's Context Props */
export type FlyoutContextProps = PropsWithChildren<ContextProps>;
/** Flyout's Provider Props */
export type FlyoutProviderProps = PropsWithChildren<{}>;
/** Flyout's Container Props */
export type FlyoutContainerProps = PropsWithChildren<{}> & HTMLAttributes<HTMLDivElement>;
/** Flyout's Overlay Props */
export type FlyoutOverLayProps = PropsWithChildren<OverLayProps> & HTMLAttributes<HTMLElement>;
/** Flyout's Toggle Props */
export type FlyoutToggleProps = PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;
/** Flyout's Header Props */
export type FlyoutHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;
/** Flyout's List Props */
export type FlyoutListProps = PropsWithChildren<ListProps> & HTMLAttributes<HTMLDivElement>;
/** Flyout's Item Props */
export type FlyoutItemProps = PropsWithChildren<ItemProps> & HTMLAttributes<HTMLElement>;
