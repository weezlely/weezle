import type { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

import * as styles from "./styles.css";
import { SizeWHs } from "../../types";

type ContextProps = {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

type ContainerProps = object & SizeWHs;

type OverLayProps = {
  zIndex: number;
};
type ToggleProps = object;
type HeaderProps = object;

type ListProps = {
  position?: keyof typeof styles.positionVariants;
  direction?: keyof typeof styles.directionVariants;
  backgroundColor?: CSSProperties["backgroundColor"];
} & SizeWHs;

type ItemProps = {
  id?: string | number;
  color?: string;
};

// Flyout's Context Prop
export type FlyoutContextProps = PropsWithChildren<ContextProps>;

// Flyout's Provider Prop
export type FlyoutProviderProps = PropsWithChildren<object>;

// Flyout's Container Prop
export type FlyoutContainerProps = PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLDivElement>;

// Flyout's Overlay Prop
export type FlyoutOverLayProps = PropsWithChildren<OverLayProps> & HTMLAttributes<HTMLElement>;

//  Flyout's Toggle Prop
export type FlyoutToggleProps = PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;

// Flyout's Header Prop
export type FlyoutHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;

// Flyout's List Prop
export type FlyoutListProps = PropsWithChildren<ListProps> & HTMLAttributes<HTMLDivElement>;

// Flyout's Item Prop
export type FlyoutItemProps = PropsWithChildren<ItemProps> & HTMLAttributes<HTMLElement>;

// Flyout's all Props
export type FlyoutAllProps = FlyoutContextProps &
  FlyoutProviderProps &
  FlyoutContainerProps &
  FlyoutOverLayProps &
  FlyoutToggleProps &
  FlyoutHeaderProps &
  FlyoutListProps &
  FlyoutItemProps;
