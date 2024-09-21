import * as React from "react";
import clsx from "clsx";

import type { TransitionProps } from "./transition.type";
import { transitionStyles } from "./styles.css";

export default React.forwardRef<HTMLDivElement, TransitionProps>(
  (
    { in: inProp, className = "transition", style, children, ...rest },

    forwardedRef
  ) => {
    const [isVisible, setIsVisible] = React.useState(inProp);

    React.useEffect(() => {
      if (inProp) {
        setIsVisible(true);
      } else {
        const timeout = setTimeout(() => setIsVisible(false), 500); // 500ms matches the animation duration
        return () => clearTimeout(timeout);
      }
    }, [inProp]);

    // if (!isVisible && !inProp) return null;

    const classNames = clsx({
      className,
      [transitionStyles.enter]: inProp,
      [transitionStyles.exit]: !inProp,
    });

    return (
      <div ref={forwardedRef} className={classNames} style={style} {...rest}>
        {children}
      </div>
    );
  }
);
