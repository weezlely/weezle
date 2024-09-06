import React from "react";
import { Button, ButtonProps } from "taeo-ui";

const ExamButton = () => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e) => {
    console.log(e.target.value, e.target.id);
  };
  return (
    <Button ref={ref} id="button" value="버튼" variant="primary" background="red" color="#fff" disabled={false} onClick={handleClick}>
      버튼
    </Button>
  );
};

export default ExamButton;
