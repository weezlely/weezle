import React from "react";
import { Box, Button, Flex, Heading } from "@taeopia/ui-with-css";

export const ExampleButtons = () => {
  return (
    <Flex>
      <Box>
        <Flex dir="column">
          <Heading as="h1" isUnderline>
            Default Button
          </Heading>
          <Button size="lg" fontColor="#fff" bgColor="red">
            Default - lg - Custom color
          </Button>
        </Flex>
      </Box>
      <Box>
        <Flex dir="column">
          <Heading as="h1" isUnderline>
            Primary Button
          </Heading>
          <Button variant="primary" size="xs">
            Primary Button - xs
          </Button>
          <Button variant="primary" size="sm">
            Primary Button - sm
          </Button>
          <Button variant="primary" size="md">
            Primary Button - md
          </Button>
          <Button variant="primary" size="lg">
            Primary Button - lg
          </Button>
          <Button variant="primary" size="xl">
            Primary Button - xl
          </Button>
          <Button variant="primary" size="xxl">
            Primary Button - xxl
          </Button>
        </Flex>
      </Box>
      <Box>
        <Flex dir="column">
          <Heading as="h1" isUnderline>
            Secondary Button
          </Heading>
          <Button variant="secondary" size="xs">
            Secondary Button - xs
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Button - sm
          </Button>
          <Button variant="secondary" size="md">
            Secondary Button - md
          </Button>
          <Button variant="secondary" size="lg">
            Secondary Button - lg
          </Button>
          <Button variant="secondary" size="xl">
            Secondary Button - xl
          </Button>
          <Button variant="secondary" size="xxl">
            Secondary Button - xxl
          </Button>
        </Flex>
      </Box>
      <Box>
        <Flex dir="column">
          <Heading as="h1" isUnderline>
            Other Button
          </Heading>
          <Button variant="error" size="md">
            Error Button - md
          </Button>
          <Button variant="danger" size="md">
            Danger Button - md
          </Button>
          <Button variant="success" size="md">
            Success Button - md
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
