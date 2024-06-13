import type { CSSProperties, Ref } from "react";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as styles from "./index.css";
import { ButtonProps } from "./index.type";

export interface IButton extends ButtonProps {}

const Button = React.forwardRef(function button(
  {
    /** @description Buttons Props */
    id = undefined,
    variant = "primary", // Button's variant
    size = "md", // Button's size
    color = "#fff", // Button's color
    background = "none", // Button's background color
    style,
    children,
    ...rest
  }: ButtonProps,
  forwardRef: Ref<HTMLButtonElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = styles.button({ variant, size });

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { backgroundColor: background, color, ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(staticStyle);
  return (
    <button ref={forwardRef} id={id} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "error"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  color: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
