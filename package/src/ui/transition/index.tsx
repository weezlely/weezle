import type { CSSProperties, FC } from "react";
import { useEffect, useRef } from "react";
import { TransitionProps } from "./index.type";

const Transition: FC<TransitionProps> = ({
  in: inProp,
  timeout,
  onEntered,
  onExited,
  activeStyle = { width: "250px" },
  inactiveStyle = { width: "80px" },
  children,
  ...rest
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      node.style.transition = `all ${timeout}ms ease`;

      const applyStyle = (style: CSSProperties) => {
        Object.keys(style).forEach((key) => {
          node.style[key as any] = style[key as keyof CSSProperties];
        });
      };

      if (inProp) {
        applyStyle(activeStyle);
        if (onEntered) onEntered();
      } else {
        applyStyle(inactiveStyle);
        if (onExited) onExited();
      }
    }
  }, [inProp, timeout, onEntered, onExited, activeStyle, inactiveStyle]);

  return (
    <div ref={nodeRef} {...rest}>
      {children}
    </div>
  );
};

export default Transition;
