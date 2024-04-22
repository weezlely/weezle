import { motion as Motion } from "framer-motion";
import React, { type CSSProperties, type Ref } from "react";

import { IButton } from "interfaces/button.interface";
import { eventHandler } from "utils";

const buttonStyle: CSSProperties = {
  position: "relative",
  border: "none",
  padding: 10,
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontFamily: "Helvetica",
  zIndex: 10,
};

const Button = React.forwardRef(function button(
  {
    id = undefined,
    color,
    backgroundColor,
    isAnimated = true,
    display = true,
    onClick = undefined,
    onMouseOut = undefined,
    onMouseOver = undefined,
    style,
    children,
    ...rest
  }: IButton,
  forwardRef: Ref<HTMLButtonElement>
) {
  const propsStyle: CSSProperties = {
    backgroundColor: backgroundColor || "black",
    color: color || "white",
    display: display ? "inline-block" : "none",
    transition: isAnimated ? "filter 0.3s" : "none",
    filter: isAnimated ? "brightness(100%)" : "none",
  };

  if (isAnimated)
    return (
      <Motion.button
        id={id}
        ref={forwardRef}
        style={{ ...buttonStyle, ...propsStyle, ...style }}
        whileHover={isAnimated ? { scale: 1.04 } : undefined}
        onMouseOver={(e) => eventHandler.handleButton(onMouseOver, e)}
        onMouseOut={(e) => eventHandler.handleButton(onMouseOut, e)}
        onClick={(e) => eventHandler.handleButton(onClick, e)}
      >
        {children}
      </Motion.button>
    );
  return (
    <button id={id} ref={forwardRef} style={{ ...buttonStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </button>
  );
});

export default Button;
