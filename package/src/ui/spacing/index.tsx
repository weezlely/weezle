import type { CSSProperties, Ref } from "react";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as styles from "./index.css";
import { SpacingProps } from "./index.type";

export interface ISpacing extends SpacingProps {}
const Spacing = React.forwardRef(function Index(
  { className = "spacing", size = "none", style, children, ...rest }: SpacingProps,
  forwardedRef: Ref<HTMLElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.baseSpacing, styles.spacing[size]];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);
  return (
    <span ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </span>
  );
});

Spacing.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Spacing;
