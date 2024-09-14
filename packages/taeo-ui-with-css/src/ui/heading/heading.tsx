/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";

import type { HeadingProps } from "./heading.type";
import * as styles from "./styles.css";

export default React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      /** @description Heading's props */
      as: Component = "h3",
      className = "heading",
      fontColor,
      bgColor = "transparent",
      isUnderline = false,
      style,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [styles.headingAs[Component], styles.headingFontStyle({ customColor: fontColor ? true : false })];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle = assignInlineVars(styles.vars, {
      color: {
        fontColor: fontColor ? fontColor : "",
        bgColor,
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
      <Component ref={forwardedRef} className={classNames} style={{ ...dynamicStyle, ...style }} {...rest}>
        {children}
      </Component>
    );
  }
);
