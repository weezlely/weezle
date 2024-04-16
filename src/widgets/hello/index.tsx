import React, { useRef } from "react";

const HelloWrapper = () => {
  return <div id="component">Hello World!</div>;
};

const HelloBody = ({ children }: React.PropsWithChildren) => {
  const ref = useRef(null);

  console.log("Hello", ref);
  return <div>{children}</div>;
};

const Hello = Object.assign(HelloWrapper, {
  Body: HelloBody,
});
export default Hello;
