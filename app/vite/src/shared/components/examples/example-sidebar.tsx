import React from "react";

import { SideBar as TaeoUiSidebar, Transition } from "@taeopia/ui-with-css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Transition in={isOpen}>
      <TaeoUiSidebar>
        <TaeoUiSidebar.Container bgColor="brand" size="lg">
          <TaeoUiSidebar.Toggle onClick={toggleSidebar}>{isOpen ? "Close" : "Open"}</TaeoUiSidebar.Toggle>
          <TaeoUiSidebar.Header>사이드 바</TaeoUiSidebar.Header>
          <TaeoUiSidebar.Divider />
          <TaeoUiSidebar.Body>
            <TaeoUiSidebar.List>
              <TaeoUiSidebar.Item color="#000">아이템1</TaeoUiSidebar.Item>
              <TaeoUiSidebar.Item>아이템2</TaeoUiSidebar.Item>
              <TaeoUiSidebar.Item>아이템3</TaeoUiSidebar.Item>
              <TaeoUiSidebar.Item>아이템4</TaeoUiSidebar.Item>
              <TaeoUiSidebar.Item>아이템5</TaeoUiSidebar.Item>
            </TaeoUiSidebar.List>
          </TaeoUiSidebar.Body>
        </TaeoUiSidebar.Container>
      </TaeoUiSidebar>
    </Transition>
  );
};
