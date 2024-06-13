import type { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

type ContextProps = {
  isOn: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};
type ProviderProps = object & ContextProps;
type ContainerProps = {
  primary?: Color;
  secondary: Color;
  fontWeight?: FontWeight;
};
type ToggleProps = object;
type LabelProps = object;

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
