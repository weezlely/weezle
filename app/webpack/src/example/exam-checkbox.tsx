import * as React from "react";
import { CheckBox } from "taeo-ui";

const ExampCheckBox = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  return (
    <CheckBox>
      <CheckBox.Container>
        <CheckBox.Check checkColor="white" backgroundColor="red" />
        <CheckBox.Check checkColor="red" backgroundColor="blue" />
        <CheckBox.Text>체크박스</CheckBox.Text>
      </CheckBox.Container>
    </CheckBox>
  );
};

export default ExampCheckBox;
