import * as React from "react";

import type { SwitchProviderProps } from "./switch.type";
import { SwitchContext } from "./switch.context";

export const SwitchProvider: React.FC<SwitchProviderProps> = ({ isOn, toggle, children }) => {
  const [isOnState, toggleState] = React.useState<boolean>(false);

  return (
    <SwitchContext.Provider
      value={{
        isOn: isOn ? isOn : isOnState,
        toggle: typeof toggle === "function" ? toggle : toggleState,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};
