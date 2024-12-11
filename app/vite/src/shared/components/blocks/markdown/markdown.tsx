import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { Heading } from "@taeopia/ui-with-css";

interface Props {
  header?: string;

  content: {
    type: "bash" | "javascript" | string;
    code: string;
  };
}

export const Markdown = (props: Props) => {
  return (
    <div className="markdown-wrapper" style={{ fontFamily: "Arial, sans-serif" }}>
      {props.header && (
        <Heading as="h4" fontColor="black" isUnderline>
          {props.header}
        </Heading>
      )}

      <div className="macStyle">
        <div className="macHeaderStyle">
          <span className="dotStyle red"></span>
          <span className="dotStyle yellow"></span>
          <span className="dotStyle green"></span>
        </div>
        <div className="code-container">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{`
\`\`\`${props.content.type}
${props.content.code || "console.log('Hello, world!');"}
\`\`\`
`}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
