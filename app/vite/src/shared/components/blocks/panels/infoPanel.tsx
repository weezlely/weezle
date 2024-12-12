import React from "react";
import { Heading, HeadingAs } from "@taeopia/ui-with-css";

interface InfoPanelProps {
  tag: HeadingAs;
  descriptions: string[];
}

export const InfoPanel = ({ tag, descriptions }: InfoPanelProps) => {
  const baseStyle = { fontSize: "22px", color: "var(--bg_01)", marginBottom: "8px" };
  const secondaryStyle = { color: "var(--bg_01)", paddingLeft: "20px" };
  return (
    <>
      {descriptions.map((desc, index) => (
        <Heading key={index} as={tag as HeadingAs} style={index === 0 ? baseStyle : secondaryStyle}>
          {desc}
        </Heading>
      ))}
    </>
  );
};
