import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps } from "../../types";

type ContextProps = object & DefaultProps;

type ProviderProps = object & DefaultProps;

type ContainerProps = object & DefaultProps;

type HeaderProps = object & DefaultProps;

type BodyProps = object & DefaultProps;

type ListProps = object & DefaultProps;

type ItemProps = object & DefaultProps;

type ToggleProps = object & DefaultProps;

type DividerProps = object & DefaultProps;

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
