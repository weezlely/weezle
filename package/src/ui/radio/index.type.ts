import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps, Events } from "../../types";

type Color = string;
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

type ContextProps = {
  value?: string | number;
  handleChange?: (value: string | number) => void;
  propsOnChange?: (event: Events) => void;
};

type ProvideProps = { onChange?: (event: Events) => void } & DefaultProps;

type GroupProps = { name?: string } & DefaultProps;
type OptionProps = {
  // Radio buttons's name
  name?: string;

  // Radio button's label
  label: string;

  // Radio button's default Check
  defaultChecked?: HTMLInputElement["defaultChecked"];

  // Radio button's check
  checked?: boolean;

  // Radio button's Size
  size?: Size;

  // Radio button's activate
  disabled?: boolean;
} & ContextProps &
  DefaultProps;

type LabelProps = {
  id?: string;
  label: string;
  checked?: boolean;
  circleColor?: Color;
  backgroundColor?: Color;
} & DefaultProps;

type InputProps = {
  checked?: boolean;
  name?: string;
  value?: string | number;
  defaultChecked?: boolean;
  disabled?: boolean;
} & DefaultProps["style"];

export type RadioContextProps = ContextProps;

// Radio's Provider Props
export type RadioProviderProps = PropsWithChildren<ProvideProps>;

// Radio's Group Props
export type RadioGroupProps = PropsWithChildren<GroupProps> & HTMLAttributes<HTMLElement>;

// Radio's Group Props
export type RadioOptionProps = PropsWithChildren<OptionProps> & HTMLAttributes<HTMLElement>;

// Radio's Label Props
export type RadioLabelProps = PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;

// Radio's Input Props
export type RadioInputProps = PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;

// Radio's Item Props
export type RadioItemProps = RadioLabelProps & RadioInputProps & HTMLAttributes<HTMLElement>;

// Radio's All Props
export type RadioGroupAllProps = RadioContextProps & RadioProviderProps & RadioOptionProps & RadioLabelProps & RadioInputProps & RadioItemProps;
