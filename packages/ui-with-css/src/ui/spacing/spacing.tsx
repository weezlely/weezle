import * as React from "react";
import clsx from "clsx";

import type { SpacingProps } from "./spacing.type";
import * as styles from "./styles.css";

const Spacing = React.forwardRef<HTMLElement, SpacingProps>(
  (
    { className = "spacing", size = "none", style, children, ...rest },

    forwardedRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [styles.baseSpacing, styles.spacing[size]];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle: React.CSSProperties = { ...style };

    /**
     * @description classNames for static-change style
     */
    const classNames: string = clsx(...staticStyle);
    return (
      <span ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
        {children}
      </span>
    );
  }
);

export default Spacing;
