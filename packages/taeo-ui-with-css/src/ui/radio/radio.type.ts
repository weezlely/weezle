import type { PropsWithChildren } from "react";

import type { ElementProps, Events } from "../../types";

type Color = string;
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export interface RadioContextProps {
  value?: string | number;
  handleChange?: (value: string | number) => void;
  propsOnChange?: (event: Events) => void;
}

// Radio's Provider Props
export interface RadioProviderProps extends PropsWithChildren {
  onChange?: (event: Events) => void;
}

// Radio's Group Props
export interface RadioGroupProps extends ElementProps<HTMLElement> {
  name?: string;
}

// Radio's Label Props
export interface RadioLabelProps extends ElementProps<HTMLLabelElement> {
  id?: string;
  // Radio button's label
  label: string;

  // Radio button's check
  checked?: boolean;
  circleColor?: Color;
  backgroundColor?: Color;
}

// Radio's Input Props
export interface RadioInputProps extends ElementProps<HTMLInputElement> {
  checked?: boolean;

  // Radio buttons's name
  name?: string;
  value?: string | number;

  // Radio button's default Check
  defaultChecked?: boolean;

  // Radio button's activate
  disabled?: boolean;
}

/**
 *
 *
 *
 *
 *
 *
 *
 */

// Radio's Item Props
// export type RadioItemProps = RadioLabelProps & RadioInputProps & HTMLAttributes<HTMLElement>;
// export interface RadioItemProps extends ElementProps<HTMLHtmlElement>, RadioLabelProps, RadioInputProps {

// }

// Radio's Group Props
export interface RadioOptionProps extends ElementProps<HTMLElement> {
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
}
