import * as React from "react";

import { ElementProps } from "../../types";

export interface SideBarContextProps {}

export interface SideBarProviderProps extends React.PropsWithChildren {}

export interface SideBarContainerProps extends ElementProps<HTMLElement> {
  bgColor?: "neutral" | "brand" | "accent";
  size?: "sm" | "md" | "lg";
  isRounded?: boolean;
}

export interface SideBarDividerProps extends ElementProps<HTMLElement> {}

export interface SideBarHeaderProps extends ElementProps<HTMLElement> {}

export interface SideBarBodyProps extends ElementProps<HTMLElement> {}

export interface SideBarToggleProps extends ElementProps<HTMLElement> {}

export interface SideBarListProps extends ElementProps<HTMLElement> {}

export interface SideBarItemProps extends ElementProps<HTMLElement> {}
