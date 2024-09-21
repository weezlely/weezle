/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import type { TypographyProps, TypographyElement } from "./typography.type";
import * as styles from "./styles.css";

export default React.forwardRef<TypographyElement, TypographyProps>(
  (
    {
      /** @description Typography's props */
      as: Component = "span", //
      id, // Component's id
      className, //  Component's className
      bgColor, // background Color
      fontColor, // font color
      size = "md", // font size
      textAlign = "center", // font aligns
      isUnderline = false, // underline active

      style,
      children,
      ...rest
    },

    forwardRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [
      styles.typography,
      styles.textAlign[textAlign],
      styles.fontSize[size],
      styles.typographyFontStyle({ customColor: fontColor ? true : false }),
    ];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle = assignInlineVars(styles.vars, {
      color: {
        fontColor: fontColor ? fontColor : "",
        bgColor: bgColor ? bgColor : "transparent",
      },
      style: {
        underline: isUnderline ? "underline" : "unset",
      },
    });

    /**
     * @description classNames for static-change style
     */
    const classNames = clsx(className, staticStyle);
    return (
      <Component ref={forwardRef} id={id} className={classNames} style={{ ...dynamicStyle, ...style }} {...rest}>
        {children}
      </Component>
    );
  }
);
