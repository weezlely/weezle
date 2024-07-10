import React from "react";
import { Button, ButtonProps } from "taeo-ui";

const ExamButton = () => {
  const handleClick = (e) => {
    console.log(e.target.value, e.target.id);
  };
  return (
    <Button id="button" value="버튼" variant="primary" background="red" color="#fff" disabled={false} onClick={handleClick}>
      버튼
    </Button>
  );
};

export default ExamButton;
