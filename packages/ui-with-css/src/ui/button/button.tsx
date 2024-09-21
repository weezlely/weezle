/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import type { ButtonElement, ButtonProps } from "./button.type";
import * as styles from "./styles.css";

export default React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      /** @description Buttons Props */
      id = undefined,
      variant = "default", // Button's variant
      size = "md", // Button's size
      disabled = false,

      // Colors
      bgColor = "none", // Button's background color
      fontColor = "#fff", // Button's color
      borderColor = "#none",
      style,
      children,
      ...rest
    },
    forwardRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = styles.button({ variant, size });

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle = assignInlineVars(styles.vars, {
      color: {
        bgColor,
        fontColor,
        borderColor,
      },
    });
    /**
     * @description classNames for static-change style
     */
    const classNames = clsx(staticStyle);
    return (
      <button ref={forwardRef} id={id} className={classNames} style={{ ...dynamicStyle, ...style }} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);
