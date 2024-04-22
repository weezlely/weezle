import { Switch, useTheme } from "taeo-ui";
import React from "react";

const TestSwitch = () => {
  const { theme } = useTheme();

  const [isOn, toggle] = React.useState<boolean>(false);

  console.log(isOn);
  return (
    <Switch isOn={isOn} toggle={toggle}>
      <Switch.Label>스위치 컴포넌트</Switch.Label>
      <Switch.Container primary={theme.colors.primary_60} secondary={theme.colors.secondary_60}>
        <Switch.Toggle />
      </Switch.Container>
      <Switch.Label>스위치 컴포넌트</Switch.Label>
    </Switch>
  );
};

export default TestSwitch;
