import type { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

import { DefaultProps, SizeWHs } from "../../types";
import * as styles from "./styles.css";

type ContextProps = { isOpen: boolean; toggle: Dispatch<SetStateAction<boolean>> };

type ContainerProps = object & SizeWHs & DefaultProps;

type OverLayProps = { zIndex: number } & DefaultProps;

type ToggleProps = object & DefaultProps;

type HeaderProps = object & DefaultProps;

type ListProps = {
  position?: keyof typeof styles.positionVariants;
  direction?: keyof typeof styles.directionVariants;
  backgroundColor?: CSSProperties["backgroundColor"];
} & SizeWHs &
  DefaultProps;

type ItemProps = { id?: string | number; color?: string } & DefaultProps;

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
