import React from "react";
import { Typography } from "taeo-ui";

const ExamTypography = () => {
  return (
    <>
      <Typography as="span">텍스트</Typography>
      <Typography as="p" size="xxxl">
        텍스트 1
      </Typography>
      <Typography as="p" size="xxl" color="red">
        텍스트 2
      </Typography>
      <Typography as="p" size="xl" color="blue">
        텍스트 3
      </Typography>
      <Typography as="p" size="md" color="green">
        텍스트 4
      </Typography>
      <Typography as="p" size="sm" color="gray">
        텍스트 5
      </Typography>
    </>
  );
};

export default ExamTypography;
