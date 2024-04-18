import React from "react";
import { Typography, useTheme } from "taeo-ui";

const TypographyComponents = () => {
  const { theme } = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography color={theme.colors.primary_50} size="xs">
        타이포그래피
      </Typography>
      <Typography color={theme.colors.primary_60} size="sm">
        타이포그래피
      </Typography>
      <Typography color={theme.colors.primary_60} size="md">
        타이포그래피
      </Typography>
      <Typography color={theme.colors.primary_60} size="lg">
        타이포그래피
      </Typography>
      <Typography color={theme.colors.primary_60} size="xl">
        타이포그래피
      </Typography>
      <Typography color={theme.colors.primary_60} size="xxl">
        타이포그래피
      </Typography>
    </div>
  );
};

export default TypographyComponents;
