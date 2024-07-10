import type { ReactNode, FC, CSSProperties, Ref } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as styles from "./styles.css";
import { HeadingProps } from "./index.type";

export interface IHeading extends HeadingProps {
  style?: CSSProperties;
  children: ReactNode;
}

const Heading: FC<IHeading> = React.forwardRef<HTMLHeadingElement, IHeading>(function Index(
  { as: Component = "h3", className = "heading", backgroundColor = "#fff", color = "#000", style, children, ...rest },
  forwardedRef: Ref<HTMLHeadingElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.headingAs[Component]];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = {
    ...style,
    backgroundColor: backgroundColor || style?.backgroundColor,
    color: color || style?.color,
  };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(className, staticStyle, styles.variable);

  return (
    <Component className={classNames} style={dynamicStyle} ref={forwardedRef} {...rest}>
      {children}
    </Component>
  );
});

// Heading.propTypes = {
//   as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
//   style: PropTypes.object,
//   children: PropTypes.node,
// };

export default Heading;
