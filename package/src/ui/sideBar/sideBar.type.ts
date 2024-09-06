import * as React from "react";

import { ComponentProps } from "../../types";

export interface SideBarContextProps {}

export interface SideBarProviderProps extends React.PropsWithChildren {}

export interface SideBarContainerProps extends ComponentProps<HTMLElement> {
  bgColor?: "neutral" | "brand" | "accent";
  size?: "sm" | "md" | "lg";
  isRounded?: boolean;
}

export interface SideBarDividerProps extends ComponentProps<HTMLElement> {}

export interface SideBarHeaderProps extends ComponentProps<HTMLElement> {}

export interface SideBarBodyProps extends ComponentProps<HTMLElement> {}

export interface SideBarToggleProps extends ComponentProps<HTMLElement> {}

export interface SideBarListProps extends ComponentProps<HTMLElement> {}

export interface SideBarItemProps extends ComponentProps<HTMLElement> {}
