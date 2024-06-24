import type { PropsWithChildren } from "react";
import { Themes } from "../../types";

type ContextProps = {
  theme: Themes;
};
type ProviderProps = {} & ContextProps;
export type ThemeContextProps = PropsWithChildren<ContextProps>;
export type ThemeProviderProps = PropsWithChildren<ProviderProps>;
