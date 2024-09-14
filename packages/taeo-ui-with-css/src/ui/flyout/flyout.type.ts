import type { CSSProperties, Dispatch, PropsWithChildren, SetStateAction } from "react";

import type { ElementProps, SizeWHs } from "../../types";
import * as styles from "./styles.css";

type ContextProps = { isOpen: boolean; toggle: Dispatch<SetStateAction<boolean>> };

// Flyout's Context Prop
export interface FlyoutContextProps extends PropsWithChildren<ContextProps> {}

// Flyout's Provider Prop
export interface FlyoutProviderProps extends PropsWithChildren {}

// Flyout's Container Prop
export interface FlyoutContainerProps extends ElementProps<HTMLDivElement>, SizeWHs {}

// Flyout's Overlay Prop
export interface FlyoutOverLayProps extends ElementProps<HTMLElement> {
  zIndex: number;
}
//  Flyout's Toggle Prop
export interface FlyoutToggleProps extends ElementProps<HTMLElement> {}

// Flyout's Header Prop
export interface FlyoutHeaderProps extends ElementProps<HTMLElement> {}

// Flyout's List Prop
export interface FlyoutListProps extends ElementProps<HTMLDivElement>, SizeWHs {
  position?: keyof typeof styles.positionVariants;
  direction?: keyof typeof styles.directionVariants;
  backgroundColor?: CSSProperties["backgroundColor"];
}

// Flyout's Item Prop
export interface FlyoutItemProps extends ElementProps<HTMLElement> {
  id?: string;
  color?: string;
}
