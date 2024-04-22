import type { CSSProperties, Dispatch, PropsWithChildren, SetStateAction } from "react";

export type SwitchProps = {
  isOn: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

/** Switch Context */
export type SwitchContextProps = PropsWithChildren<SwitchProps>;

/**
 * @description Switch Provider Props
 */
export type SwitchProviderProps = PropsWithChildren<SwitchProps>;

/** Switch Wrapper */
export type SwitchContainerProps = PropsWithChildren<{
  style?: CSSProperties;
  primary?: Color;
  secondary: Color;
  fontWeight?: FontWeight;
}>;

/** Switch Toggle */
export type SwitchToggleProps = PropsWithChildren<{
  style?: CSSProperties;
}>;
/** Switch Contents */
export type SwitchLabelProps = PropsWithChildren<{
  style?: CSSProperties;
}>;

export type UsePreviousValueProps = boolean | null;
