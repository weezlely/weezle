import type { FC, CSSProperties, Ref } from "react";
import * as React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
//
import * as styles from "./styles.css";
import { FlexProps } from "./index.type";

export interface IFlex extends FlexProps {}

const Flex: FC<IFlex> = React.forwardRef<HTMLSpanElement, IFlex>(function Flex(
  {
    /** @description Flex Props */
    id = undefined,
    dir = "row", // Flex's flex-directions
    align = "flex-start", // Flex's align-items
    justify = "flex-start", // Flex's justify-contents
    gap = 4,
    style,
    children,
    ...rest
  },
  forwardRef: Ref<HTMLSpanElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.flexBase, styles.flexDirection[dir], styles.align[align], styles.justify[justify]];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { gap: `${gap}px`, ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <span id={id} ref={forwardRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </span>
  );
});

// Flex.propTypes = {
//   id: PropTypes.string,
//   dir: PropTypes.oneOf(["row", "column"]),
//   align: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"]),
//   justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]),
//   gap: PropTypes.number,
//   style: PropTypes.object,
//   children: PropTypes.node,
// };

export default Flex;
