/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import clsx from "clsx";

import type { FlexElement, FlexProps } from "./flex.type";
import * as styles from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default React.forwardRef<FlexElement, FlexProps>(
  (
    {
      /** @description Flex Props */
      as: Components = "span",
      id = undefined,
      dir = "row", // Flex's flex-directions
      align = "flex-start", // Flex's align-items
      justify = "flex-start", // Flex's justify-contents
      gap = 4,
      style,
      children,
      ...rest
    },
    forwardRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [styles.flexBase, styles.flexDirection[dir], styles.align[align], styles.justify[justify]];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle = assignInlineVars(styles.vars, {
      style: {
        gap: `${gap}px`,
      },
    });

    /**
     * @description classNames for static-change style
     */
    const classNames: string = clsx(...staticStyle);

    return (
      <Components id={id} ref={forwardRef} className={classNames} style={{ ...dynamicStyle, ...style }} {...rest}>
        {children}
      </Components>
    );
  }
);
