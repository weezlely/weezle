import React, { CSSProperties } from "react";
import { Flyout } from "taeo-ui";

const TestFlyout = () => {
  return (
    <Flyout style={{ width: "200px" }}>
      <Flyout.Toggle>토글</Flyout.Toggle>
      <Flyout.Overlay />
      <Flyout.List style={{ width: "200px", ...a }}>
        <Flyout.Header>Flyout's Header</Flyout.Header>
        <Flyout.Item id={1}>Flyout's Item-1</Flyout.Item>
        <Flyout.Item id={2}>Flyout's Item-2</Flyout.Item>
        <Flyout.Item id={3}>Flyout's Item-3</Flyout.Item>
        <Flyout.Item id={4}>Flyout's Item-4</Flyout.Item>
        <Flyout.Item id={5}>Flyout's Item-5</Flyout.Item>
        <Flyout.Item id={6}>Flyout's Item-6</Flyout.Item>
      </Flyout.List>
    </Flyout>
  );
};

export default TestFlyout;

const a: CSSProperties = {};
