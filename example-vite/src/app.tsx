import { useState } from "react";

import ExamButton from "./example/exam-button";
import { Button, Heading } from "./ui";
//

function App() {
  return (
    <>
      테스트 시작
      {/* <ExamButton /> */}
      {/* <Button>버튼</Button> */}
      <Heading as="h1" color="blue">
        헤딩 1
      </Heading>
      <Heading as="h2" color="red">
        헤딩 2
      </Heading>
    </>
  );
}

export default App;
