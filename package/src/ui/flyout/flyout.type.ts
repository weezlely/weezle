import type { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

import type { ComponentProps, SizeWHs } from "../../types";
import * as styles from "./styles.css";

type ContextProps = { isOpen: boolean; toggle: Dispatch<SetStateAction<boolean>> };

// Flyout's Context Prop
export interface FlyoutContextProps extends PropsWithChildren<ContextProps> {}

// Flyout's Provider Prop
export interface FlyoutProviderProps extends PropsWithChildren {}

// Flyout's Container Prop
export interface FlyoutContainerProps extends ComponentProps<HTMLDivElement>, SizeWHs {}

// Flyout's Overlay Prop
export interface FlyoutOverLayProps extends ComponentProps<HTMLElement> {
  zIndex: number;
}
//  Flyout's Toggle Prop
export interface FlyoutToggleProps extends ComponentProps<HTMLElement> {}

// Flyout's Header Prop
export interface FlyoutHeaderProps extends ComponentProps<HTMLElement> {}

// Flyout's List Prop
export interface FlyoutListProps extends ComponentProps<HTMLDivElement>, SizeWHs {
  position?: keyof typeof styles.positionVariants;
  direction?: keyof typeof styles.directionVariants;
  backgroundColor?: CSSProperties["backgroundColor"];
}

// Flyout's Item Prop
export interface FlyoutItemProps extends ComponentProps<HTMLElement> {
  id?: string;
  color?: string;
}
