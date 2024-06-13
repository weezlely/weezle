import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

type ContextProps = {};

type ProviderProps = {};

type ContainerProps = {};

type HeaderProps = {};

type BodyProps = {};

type ListProps = {};

type ItemProps = {};

type ToggleProps = {};

type DividerProps = {};

export type SideBarContextProps = PropsWithChildren<ContextProps>;

export type SideBarProviderProps = PropsWithChildren<ProviderProps>;

export type SideBarContainerProps = PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;

export type SideBarDividerProps = PropsWithChildren<DividerProps> & HTMLAttributes<HTMLElement>;

export type SideBarHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;

export type SideBarBodyProps = PropsWithChildren<BodyProps> & HTMLAttributes<HTMLElement>;

export type SideBarToggleProps = PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;

export type SideBarListProps = PropsWithChildren<ListProps> & HTMLAttributes<HTMLUListElement>;

export type SideBarItemProps = PropsWithChildren<ItemProps> & HTMLAttributes<HTMLLIElement>;

export type SideBarAllProps = SideBarContextProps &
  SideBarProviderProps &
  SideBarContainerProps &
  SideBarDividerProps &
  SideBarHeaderProps &
  SideBarBodyProps &
  SideBarToggleProps &
  SideBarListProps &
  SideBarItemProps;
