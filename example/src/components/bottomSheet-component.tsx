/// <reference types="react" />
import React from "react";
import { BottomSheet } from "taeo-ui";

const TestComponents = () => {
  return (
    <>
      <BottomSheet>
        <BottomSheet.Wrapper>
          <BottomSheet.Header />
          <BottomSheet.Contents>
            <div style={{ height: "20%" }}>컨텐츠 헤더</div>
            <div style={{ height: "80%" }}>컨텐츠 바디</div>
          </BottomSheet.Contents>
        </BottomSheet.Wrapper>
      </BottomSheet>
    </>
  );
};

export default TestComponents;
