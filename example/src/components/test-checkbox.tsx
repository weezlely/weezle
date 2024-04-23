import React from "react";

import { CheckBox } from "taeo-ui";

const TestCheckbox = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return (
    <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}>
      <CheckBox.Wrapper>
        <CheckBox.Check />
        <CheckBox.Text>체크박스</CheckBox.Text>
      </CheckBox.Wrapper>
    </CheckBox>
  );
};

export default TestCheckbox;

// const labelStyle: CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   userSelect: "none",
// };
// const inputStyle: CSSProperties = {
//   appearance: "none",
//   width: "1.5rem",
//   height: "1.5rem",
//   border: "1.5px solid gainsboro",
//   borderRadius: "0.35rem",
// };

// const pStyle: CSSProperties = {
//   marginLeft: "0.25rem",
// };
{
  /* <label style={labelStyle}>
<input className="checkbox" type="checkbox" style={inputStyle} />
<p style={pStyle}>체크박스</p>
</label> */
}
