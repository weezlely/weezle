import * as React from "react";
import type { ComponentProps } from "../../types";

// Checkbox's Context Prop
export interface CheckBoxContextProps {
  checkedValue: string | number;
  setCheckedValue: React.Dispatch<React.SetStateAction<string | number>>;
}

// Checkbox's Provider Prop
export interface CheckBoxProviderProps extends ComponentProps<HTMLDivElement> {
  dir: "column" | "column-reverse" | "row" | "row-reverse";
}

// Checkbox's Wrapper Prop
export interface CheckBoxWrapperProps extends ComponentProps<HTMLLabelElement> {}

// Checkbox's Input Prop
export interface CheckBoxInputProps extends ComponentProps<HTMLInputElement> {
  value: string | number;
  checkColor?: string;
  backgroundColor?: string;
}

//  Checkbox's Text Prop
export interface CheckBoxTextProps extends ComponentProps<HTMLParagraphElement> {}
