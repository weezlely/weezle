import type { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

type ContextProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};
type WrapperProps = object;
type InputProps = {
  checkColor?: string;
  backgroundColor?: string;
};
type TextProps = object;

// Checkbox's Context Prop
export type CheckBoxContextProps = ContextProps;

// Checkbox's Provider Prop
export type CheckBoxProviderProps = PropsWithChildren<ContextProps>;

// Checkbox's Wrapper Prop
export type CheckBoxWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLLabelElement>;

// Checkbox's Input Prop
export type CheckBoxInputProps = PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;

//  Checkbox's Text Prop
export type CheckBoxTextProps = PropsWithChildren<TextProps> & HTMLAttributes<HTMLParagraphElement>;

// Checkbox's All Props
export type CheckBoxAllProps = CheckBoxContextProps & CheckBoxProviderProps & CheckBoxWrapperProps & CheckBoxInputProps & CheckBoxTextProps;
