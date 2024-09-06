import * as React from "react";
import clsx from "clsx";

import type { InputProps } from "./input.type";
import * as styles from "./styles.css";

export default React.forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", className = "styled-input", style, children, ...rest },

    forwardedRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [styles.baseInput];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle: React.CSSProperties = { ...style };

    /**
     * @description classNames for static-change style
     */
    const classNames = clsx(className, ...staticStyle);

    return <input ref={forwardedRef} type={type} className={classNames} style={dynamicStyle} {...rest} />;
  }
);
