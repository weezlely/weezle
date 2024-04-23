/// <reference types="react" />
import React from "react";
import { BottomSheet, Typography, Flex, useTheme } from "taeo-ui";

const TestBottomSheet = () => {
  const { theme } = useTheme();

  return (
    <>
      <BottomSheet>
        <BottomSheet.Wrapper>
          {/* 손잡이 */}
          <BottomSheet.Header />
          {/* 손잡이 */}
          <BottomSheet.Contents>
            <Flex display="flex" direction="column">
              <div style={{ height: "10%", borderBottom: "1px solid #000" }}>
                <Typography size="xxl" color={theme.colors.primary_60}>
                  Contents Title
                </Typography>
              </div>
              <div style={{ height: "90%" }}>
                <Typography size="xl" color={theme.colors.primary_60}>
                  Contents Body
                </Typography>
              </div>
            </Flex>
          </BottomSheet.Contents>
        </BottomSheet.Wrapper>
      </BottomSheet>
    </>
  );
};

export default TestBottomSheet;
