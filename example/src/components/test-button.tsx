/// <reference types="react" />
import React from "react";
import { Button, useTheme } from "taeo-ui";

const TestButton = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* <Button color={theme.color}>그냥 버튼</Button> */}
      <Button color={theme.colors.primary_60} backgroundColor={theme.colors.primary_5} isAnimated>
        애니메이션 버튼
      </Button>
    </>
  );
};

export default TestButton;
