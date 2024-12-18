import React from "react";
import { Heading, HeadingAs } from "@taeopia/ui-with-css";

interface InfoPanelProps {
  tag: HeadingAs;
  descriptions: string[];
}

export const InfoPanel = ({ tag, descriptions }: InfoPanelProps) => {
  const baseStyle = { fontSize: "22px", marginBottom: "8px" };
  const secondaryStyle = { paddingLeft: "20px" };
  return (
    <>
      {descriptions.map((desc, index) => (
        <Heading className="text_bk_wh" key={index} as={tag as HeadingAs} style={index === 0 ? baseStyle : secondaryStyle}>
          {desc}
        </Heading>
      ))}
    </>
  );
};
