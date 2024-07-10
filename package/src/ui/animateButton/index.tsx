import type { FC, CSSProperties, Ref } from "react";
import { motion as Motion } from "framer-motion";
import * as React from "react";
import clsx from "clsx";

import { eventHandler } from "../../functions";
import type { AnimateButtonProps } from "./index.type";
import * as styles from "./styles.css";

export interface IAnimateButton extends AnimateButtonProps {}

const AnimateButton: FC<AnimateButtonProps> = React.forwardRef(function Index(
  {
    /** @description Animate Buttons Props */
    id = undefined,
    variant = "primary", // Animate Button's variant
    size = "md", // Animate Button's size
    color = "#fff", // Animate Button's color
    background = "none", // Animate Button's background color
    display = true,
    onClick = undefined,
    onMouseOut = undefined,
    onMouseOver = undefined,
    style,
    children,
    ...rest
  },
  forwardRef: Ref<HTMLButtonElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.buttonVariants[variant], styles.buttonSizes];

  /**
   * @description dynamic-change style depending on the Props
   */

  const dynamicStyle: CSSProperties = { display: display ? "inline-block" : "none", backgroundColor: background, color, ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <Motion.button
      ref={forwardRef!}
      id={id}
      className={classNames}
      style={dynamicStyle}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={(e) => eventHandler.funcExecuteChecker(onClick, e)}
      onMouseOver={(e) => eventHandler.funcExecuteChecker(onMouseOver, e)}
      onMouseOut={(e) => eventHandler.funcExecuteChecker(onMouseOut, e)}
      {...(rest as any)}
    >
      {children}
    </Motion.button>
  );
});

export default AnimateButton;
