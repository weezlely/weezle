import { useState, useEffect } from "react";
import clsx from "clsx";

import { transitionStyles } from "./styles.css";
import { TransitionProps } from "./index.type";

const Transition: React.FC<TransitionProps> = ({ in: inProp, className = "transition", children }) => {
  const [isVisible, setIsVisible] = useState(inProp);

  useEffect(() => {
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

  return <div className={classNames}>{children}</div>;
};

export default Transition;
