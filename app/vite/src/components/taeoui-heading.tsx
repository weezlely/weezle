import { Box, Heading, palette } from "taeo-ui";

const TaeouiHeading = () => {
  return (
    <Box>
      <Heading as="h1" isUnderline>
        Heading Components
      </Heading>
      <Heading as="h1">Heading - h1</Heading>
      <Heading as="h2">Heading - h2</Heading>
      <Heading as="h3">Heading - h3</Heading>
      <Heading as="h4">Heading - h4</Heading>
      <Heading as="h5">Heading - h5</Heading>
      <Heading as="h6">Heading - h6</Heading>
      <Heading as="h3" fontColor="red" bgColor="yellow">
        Heading - red
      </Heading>
      <Heading as="h1" fontColor={palette.red[50]} isUnderline>
        Heading 밑줄 있음
      </Heading>
    </Box>
  );
};

export default TaeouiHeading;
