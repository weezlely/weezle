import * as React from "react";
import clsx from "clsx";

import { transitionStyles } from "./styles.css";
import { TransitionProps } from "./index.type";

export interface ITransition extends TransitionProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Transition: React.FC<ITransition> = ({ in: inProp, className = "transition", style, children, ...rest }) => {
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
    <div className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Transition;
