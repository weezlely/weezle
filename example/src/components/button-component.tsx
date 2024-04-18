/// <reference types="react" />
import React from "react";
import { Button, useTheme } from "taeo-ui";

const TestComponents = () => {
  const { theme } = useTheme();

  console.log("테마", theme);
  return (
    <Button color={theme.colors.primary_60} backgroundColor={theme.colors.primary_5} isAnimated>
      버튼
    </Button>
  );
};

export default TestComponents;
