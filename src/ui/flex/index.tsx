import type { CSSProperties, Ref } from "react";
import React from "react";
import { IFlex } from "interfaces/flex.interface";

/**
 * @description 기본스타일
 */
const flexStyle: CSSProperties = {
  flex: 1,
};

const Flex = React.forwardRef(function Flex(
  { id = undefined, direction = "row", alignItems = "flex-start", justifyContent = "flex-start", gap = 4, style, children, ...rest }: IFlex,
  forwardRef: Ref<HTMLSpanElement>
) {
  /**
   * @description Props에 따른 변형된 style
   */
  const propsStyle: CSSProperties = {
    flexDirection: direction,
    justifyContent,
    alignItems,
    gap: `${gap}px`,
  };

  return (
    <span id={id} ref={forwardRef} style={{ ...flexStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </span>
  );
});

export default Flex;
