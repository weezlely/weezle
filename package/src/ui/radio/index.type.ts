import type { HTMLAttributes, PropsWithChildren } from "react";
import Radio from ".";

type Color = string;
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type EventObject = {
  name: string | number;
  value: string | number;
  [key: string]: any;
};

type ContextProps = {
  value?: string | number;
  handleChange?: (value: string | number) => void;
  propsOnChange?: (event: EventObject) => void;
};

type ProvideProps = {
  onChange?: (event: EventObject) => void;
};

type GroupProps = {
  name?: string;
};

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
} & ContextProps;

type LabelProps = {
  id?: string;
  label: string;
  checked?: boolean;
  circleColor?: Color;
  backgroundColor?: Color;
};

type InputProps = {
  checked?: boolean;
  name?: string;
  value?: string | number;
  defaultChecked?: boolean;
  disabled?: boolean;
};

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
