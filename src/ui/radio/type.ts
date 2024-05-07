import type { HTMLAttributes, PropsWithChildren } from "react";

type Event = {
  value: string | number;
  name: string | number;
};

type ContextProps = {
  value?: string | number;
  handleChange?: (value: string | number) => void;
  propsOnChange?: (event: Event) => void;
};

type ProvideProps = {
  onChange?: (event: Event) => void;
};

type GroupProps = {
  name?: string;
};

type OptionProps = {
  /** Radio buttons's name */
  name?: string;

  /** Radio button's label */
  label: string;

  /** Radio button's default Check */
  defaultChecked?: HTMLInputElement["defaultChecked"];

  /** Radio button's check */
  checked?: boolean;

  /** Radio button's Size */
  size?: Size;

  /** Radio button's activate */
  disabled?: boolean;
} & ContextProps;

type LabelProps = {};

type InputProps = {};

export type RadioContextProps = ContextProps;

/** Radio's Provider Props */
export type RadioProviderProps = PropsWithChildren<ProvideProps>;

/** Radio's Group Props */
export type RadioGroupProps = PropsWithChildren<GroupProps> & HTMLAttributes<HTMLElement>;

/** Radio's Group Props */
export type RadioOptionProps = PropsWithChildren<OptionProps> & HTMLAttributes<HTMLElement>;

/** Radio's Label Props */
export type RadioLabelProps = PropsWithChildren<LabelProps> & HTMLAttributes<HTMLLabelElement>;

/** Radio's Input Props */
export type RadioInputProps = PropsWithChildren<InputProps> & HTMLAttributes<HTMLInputElement>;
