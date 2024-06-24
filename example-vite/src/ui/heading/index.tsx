import type { Ref } from "react";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as styles from "./index.css";
import { HeadingProps } from "./index.type";

export interface IHeading extends HeadingProps {}

const Heading = React.forwardRef(function Index(
  { as: Component = "h3", className = "heading", color, backgroundColor, style, children, ...rest }: HeadingProps,
  forwardedRef: Ref<HTMLHeadingElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = styles.headingAs[Component as keyof typeof styles.headingAs];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle = {
    ...style,
    "--color": color || "inherit",
    "--background-color": backgroundColor || "transparent",
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

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  style: PropTypes.object,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
