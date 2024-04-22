import { createContext, useContext } from "react";
import { FlyoutContextProps } from "./index.type";

export const FlyoutContext = createContext<FlyoutContextProps>({ isOpen: false, toggle: () => {} });
export const useFlyoutContext = () => useContext(FlyoutContext);
