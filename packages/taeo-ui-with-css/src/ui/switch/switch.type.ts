import * as React from "react";
import { Color, ElementProps, FontWeight } from "../../types";

type ContextProps = {
  isOn: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// Switch's Context Prop
export interface SwitchContextProps extends ContextProps {}

// Switch's Provider Prop
export interface SwitchProviderProps extends React.PropsWithChildren<ContextProps> {}

// Switch's Container Prop
export interface SwitchContainerProps extends ElementProps<HTMLElement> {
  primary?: Color;
  secondary: Color;
  fontColor?: Color;
  fontWeight?: FontWeight;
}

// Switch's Toggle Prop
export interface SwitchToggleProps extends ElementProps<HTMLElement> {}

// Switch's Label Prop
export interface SwitchLabelProps extends ElementProps<HTMLElement> {}
