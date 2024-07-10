import React from "react";
import { AnimateButton } from "taeo-ui";

const ExamAnimateButton = () => {
  const handleClick = (e) => {
    console.log(e.target.value, e.target.id);
  };
  return (
    <AnimateButton id="button" value="버튼" variant="primary" background="red" color="#fff" disabled={false} onClick={handleClick}>
      버튼
    </AnimateButton>
  );
};

export default ExamAnimateButton;
