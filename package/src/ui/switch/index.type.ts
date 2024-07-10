import type { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

import { Color, DefaultProps, FontWeight } from "../../types";

type ContextProps = {
  isOn: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};
type ProviderProps = object & ContextProps & DefaultProps;
type ContainerProps = {
  primary?: Color;
  secondary: Color;
  fontColor?: Color;
  fontWeight?: FontWeight;
} & DefaultProps;
type ToggleProps = object & DefaultProps;
type LabelProps = object & DefaultProps;

// Switch's Context Prop
export type SwitchContextProps = PropsWithChildren<ContextProps> & HTMLAttributes<HTMLElement>;

// Switch's Provider Prop
export type SwitchProviderProps = PropsWithChildren<ProviderProps> & HTMLAttributes<HTMLElement>;

// Switch's Container Prop
export type SwitchContainerProps = PropsWithChildren<ContainerProps> & HTMLAttributes<HTMLElement>;

// Switch's Toggle Prop
export type SwitchToggleProps = PropsWithChildren<ToggleProps> & HTMLAttributes<HTMLElement>;

// Switch's Label Prop
export type SwitchLabelProps = PropsWithChildren<LabelProps> & HTMLAttributes<HTMLElement>;

// Switch's all props
export type SwitchAllProps = SwitchContextProps & SwitchProviderProps & SwitchContainerProps & SwitchToggleProps & SwitchLabelProps;
