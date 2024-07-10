import type { Dispatch, HTMLAttributes, PropsWithChildren, ReactNode, SetStateAction } from "react";

import { DefaultProps } from "../../types";

type ContextProps = { isChecked: boolean; setIsChecked: Dispatch<SetStateAction<boolean>> };
type WrapperProps = object & DefaultProps;
type InputProps = { checkColor?: string; backgroundColor?: string } & DefaultProps;
type TextProps = object & DefaultProps;

// Checkbox's Context Prop
export type CheckBoxContextProps = ContextProps;

// Checkbox's Provider Prop
export type CheckBoxProviderProps = PropsWithChildren<ContextProps> & DefaultProps;

// Checkbox's Wrapper Prop
export type CheckBoxWrapperProps = PropsWithChildren<WrapperProps> & HTMLAttributes<HTMLLabelElement>;

// Checkbox's Input Prop
export type CheckBoxInputProps = PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;

//  Checkbox's Text Prop
export type CheckBoxTextProps = PropsWithChildren<TextProps> & HTMLAttributes<HTMLParagraphElement>;

// Checkbox's All Props
export type CheckBoxAllProps = CheckBoxContextProps & CheckBoxProviderProps & CheckBoxWrapperProps & CheckBoxInputProps & CheckBoxTextProps;
