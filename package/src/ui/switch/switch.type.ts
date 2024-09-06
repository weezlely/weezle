import * as React from "react";
import { Color, ComponentProps, FontWeight } from "../../types";

type ContextProps = {
  isOn: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// Switch's Context Prop
export interface SwitchContextProps extends ContextProps {}

// Switch's Provider Prop
export interface SwitchProviderProps extends React.PropsWithChildren<ContextProps> {}

// Switch's Container Prop
export interface SwitchContainerProps extends ComponentProps<HTMLElement> {
  primary?: Color;
  secondary: Color;
  fontColor?: Color;
  fontWeight?: FontWeight;
}

// Switch's Toggle Prop
export interface SwitchToggleProps extends ComponentProps<HTMLElement> {}

// Switch's Label Prop
export interface SwitchLabelProps extends ComponentProps<HTMLElement> {}
