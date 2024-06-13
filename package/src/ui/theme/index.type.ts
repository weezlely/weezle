import type { PropsWithChildren } from "react";
import { Theme } from "../../types";

type ContextProps = {
  theme: Theme;
};
type ProviderProps = {} & ContextProps;
export type ThemeContextProps = PropsWithChildren<ContextProps>;
export type ThemeProviderProps = PropsWithChildren<ProviderProps>;
