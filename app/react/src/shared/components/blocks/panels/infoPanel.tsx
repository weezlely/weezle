import React from "react";
import { HeadingAs } from "@taeopia/ui-with-css";

interface InfoPanelProps {
  tag: HeadingAs;
  descriptions: string[];
}

export const InfoPanel = ({ tag, descriptions }: InfoPanelProps) => {
  return (
    <>
      {descriptions.map((desc, index) => (
        <h3 className="indent text_bk_wh fs_20 fw_500 lh-150">{desc}</h3>

        // <Heading className="text_bk_wh" key={index} as={tag as HeadingAs} style={index === 0 ? baseStyle : secondaryStyle}>
        //   {desc}
        // </Heading>
      ))}
    </>
  );
};
