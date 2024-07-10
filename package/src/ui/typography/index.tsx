import type { ReactNode, FC, CSSProperties, Ref } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import type { TypographyProps, TypographyElement } from "./index.type";
import * as styles from "./styles.css";

export interface ITypography extends TypographyProps {
  style?: CSSProperties;
  children: ReactNode;
}
const Typography: FC<ITypography> = React.forwardRef<TypographyElement, ITypography>(
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
    forwardRef: Ref<TypographyElement>
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
      <Component ref={forwardRef as Ref<any>} id={id} className={classNames} style={dynamicStyle} {...rest}>
        {children}
      </Component>
    );
  }
);

// Typography.propTypes = {
//   as: PropTypes.oneOf(["span", "p"]),
//   size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"]),
//   textAlign: PropTypes.oneOf(["center", "end", "justify", "left", "match-parent", "right", "start"]),
//   color: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   style: PropTypes.object,
//   children: PropTypes.node,
// };

// Typography.defaultProps = {
//   as: "span",
//   color: "black",
//   backgroundColor: "transparent",
//   size: "md",
//   textAlign: "center",
// };

export default Typography;
