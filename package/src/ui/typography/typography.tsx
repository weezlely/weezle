import type { CSSProperties, Ref } from "react";
import * as React from "react";
import clsx from "clsx";

import type { TypographyProps, TypographyElement } from "./typography.type";
import * as styles from "./styles.css";

export default React.forwardRef<TypographyElement, TypographyProps>(
  (
    {
      /** @description typography Props */
      as: Component = "span", //
      id,
      className,
      color = "black", // Font color
      backgroundColor = "transparent", // Background Color
      size = "md", // Font Size
      textAlign = "center", // Font Style
      style = {},
      children, // Font detail
      ...rest
    },
    forwardRef
  ) => {
    /**
     * @description static-change style depending on the Props
     */
    const staticStyle = [styles.typography, styles.textAlign[textAlign], styles.fontSize[size]];

    /**
     * @description dynamic-change style depending on the Props
     */
    const dynamicStyle: CSSProperties = { color, backgroundColor, ...style };

    /**
     * @description classNames for static-change style
     */
    const classNames = clsx(...staticStyle, className);
    return (
      <Component ref={forwardRef} id={id} className={classNames} style={dynamicStyle} {...rest}>
        {children}
      </Component>
    );
  }
);
