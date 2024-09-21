/* eslint-disable react-refresh/only-export-components */
import React from "react";
import clsx from "clsx";

import type { BoxProps } from "./box.type";
import * as styles from "./styles.css";

export default React.forwardRef<HTMLDivElement & HTMLElement, BoxProps>(({ className, style, children, ...rest }, forwardedRef) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.box];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
});
