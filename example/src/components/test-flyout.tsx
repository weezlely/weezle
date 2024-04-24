import React from "react";
import { Flyout } from "taeo-ui";

const TestFlyout = () => {
  const [isOn, toggle] = React.useState<boolean>(false);

  console.log(isOn);
  return (
    <Flyout isOpen={isOn} toggle={toggle} style={{ width: "200px" }}>
      <Flyout.Toggle>클릭</Flyout.Toggle>
      <Flyout.Overlay />
      <Flyout.List style={{ width: "200px" }}>
        <Flyout.Header>헤더</Flyout.Header>
        <Flyout.Item id={1}>아이템1</Flyout.Item>
        <Flyout.Item id={2}>아이템2</Flyout.Item>
        <Flyout.Item id={3}>아이템3</Flyout.Item>
        <Flyout.Item id={4}>아이템4</Flyout.Item>
      </Flyout.List>
    </Flyout>
  );
};

export default TestFlyout;
