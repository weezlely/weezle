import React from "react";
import { Flyout as TaeoUiFlyout } from "taeo-ui";

const Flyout = () => {
  return (
    <TaeoUiFlyout>
      <TaeoUiFlyout.Toggle>Flyout's 토글</TaeoUiFlyout.Toggle>
      <TaeoUiFlyout.Overlay zIndex={9} />
      <TaeoUiFlyout.List style={{ width: "200px" }}>
        <TaeoUiFlyout.Header>Flyout's Header</TaeoUiFlyout.Header>
        <TaeoUiFlyout.Item id={"1"}>Flyout's Item-1</TaeoUiFlyout.Item>
        <TaeoUiFlyout.Item id={"2"}>Flyout's Item-2</TaeoUiFlyout.Item>
        <TaeoUiFlyout.Item id={"3"}>Flyout's Item-3</TaeoUiFlyout.Item>
      </TaeoUiFlyout.List>
    </TaeoUiFlyout>
  );
};

export default Flyout;
