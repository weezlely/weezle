import { style, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const expandWidth = keyframes({
  from: { width: "5%" },
  to: { width: "100%" },
});

const collapseWidth = keyframes({
  from: { width: "100%" },
  to: { width: "5%" },
});

export const transitionStyles = {
  enter: style({
    animation: `${expandWidth} 0.5s forwards`,
  }),
  exit: style({
    animation: `${collapseWidth} 0.5s forwards`,
  }),
};
