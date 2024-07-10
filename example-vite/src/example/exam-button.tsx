import { Button } from "taeo-ui";
import React from "react";

const ExamButton = () => {
  return (
    <>
      <Button id="button" value="버튼" variant="primary" background="red" color="#fff" disabled={false}>
        버튼
      </Button>
      <Button variant="secondary">버튼</Button>
      <Button variant="primary">버튼</Button>
      <Button variant="primary">버튼</Button>
    </>
  );
};

export default ExamButton;
