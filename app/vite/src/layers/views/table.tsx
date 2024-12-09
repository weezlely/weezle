import { Box, Flex, Heading } from "@taeopia/ui-with-css";
import { useRef } from "react";

import { TaeopiaTable } from "@/shared/components";

const TablePage = () => {
  const refs = Array.from({ length: 4 }, () => useRef<HTMLElement & HTMLDivElement>(null));

  return (
    <article className="content " style={{ border: "1px solid #000" }}>
      <div>
        <Heading as="h1" fontColor="ActiveBorder">
          Install
        </Heading>
        <Heading as="h4" fontColor="ActiveBorder">
          How to install and set up @taeo/react-table UI in your project
        </Heading>
      </div>

      <Flex>
        <Heading as="h3" fontColor="ActiveBorder" isUnderline>
          Framework Guide
        </Heading>
      </Flex>
      {/* < Table > */}
      <TaeopiaTable refs={refs} />
      {/* </ Table > */}
    </article>
  );
};

export default TablePage;
// (props: TableHeaderProps) => {
//   console.log(props);
//   return <input type="checkbox" checked style={{ border: "1px solid #000", width: "25px", height: "25px" }} />;
// },
{
  /* <Flex dir="row" ref={refs[1]}>
        <Box>
          <Heading as="h1" isUnderline>
            Click Able Area
          </Heading>
          <Heading as="h3">Click Here</Heading>
          <Heading as="h4">Click Here</Heading>
        </Box>

        <Box>
          <Heading as="h1" isUnderline>
            Click Able Area
          </Heading>
          <Heading as="h3">Click Here</Heading>
          <Heading as="h4">Click Here</Heading>
        </Box>
      </Flex> */
}
