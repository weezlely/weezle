import type { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

type ContextProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};
type WrapperProps = {};
type InputProps = {
  checkColor: "white" | "black" | "blue" | "red";
};
type TextProps = {};

/** Checkbox's Context Props */
export type CheckBoxContextProps = ContextProps;
/** Checkbox's Provider Props */
export type CheckBoxProviderProps = PropsWithChildren<ContextProps>;
/** Checkbox's Wrapper Props */
export type CheckBoxWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLLabelElement>;
/** Checkbox's Input Props */
export type CheckBoxInputProps = PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;
/** Checkbox's Text Props */
export type CheckBoxTextProps = PropsWithChildren<TextProps> & HTMLAttributes<HTMLParagraphElement>;
