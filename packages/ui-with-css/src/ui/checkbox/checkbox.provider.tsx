import * as React from "react";

import type { CheckBoxProviderProps } from "./checkbox.type";
import { CheckBoxContext } from "./checkbox.context";
import * as styles from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const CheckBoxProvider = <T extends HTMLDivElement>({ style, children, ...rest }: CheckBoxProviderProps, forwardedRef: React.ForwardedRef<T>) => {
  const [checkedValue, setCheckedValue] = React.useState<string | number>("");

  // const dynamicStyle = assignInlineVars(styles.flexVars, {
  //   flexDirection: { direction: dir },
  // });

  return (
    <CheckBoxContext.Provider value={{ checkedValue, setCheckedValue }}>
      <div ref={forwardedRef} style={style} {...rest}>
        {children}
      </div>
    </CheckBoxContext.Provider>
  );
};
