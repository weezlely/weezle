import type { CSSProperties, Dispatch, HTMLAttributes, PropsWithChildren } from "react";

export type ContextProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<React.SetStateAction<boolean>>;
};

export type CheckBoxContextProps = PropsWithChildren<ContextProps>;
export type CheckBoxProviderProps = PropsWithChildren<ContextProps>;

export type CheckBoxWrapperProps = PropsWithChildren<{}> & HTMLAttributes<HTMLLabelElement>;

export type CheckBoxInputProps = PropsWithChildren<{
  checkColor: CSSProperties["color"];
}> &
  HTMLAttributes<HTMLInputElement>;

export type CheckBoxTextProps = PropsWithChildren<{}> & HTMLAttributes<HTMLParagraphElement>;
