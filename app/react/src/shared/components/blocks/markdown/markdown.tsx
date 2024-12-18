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

      <div className="mac-style">
        <div className="mac-header-style">
          <span className="dot-style red" />
          <span className="dot-style yellow" />
          <span className="dot-style green" />
        </div>
        <div className="code-container">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} className="markdown-code">
            {`
\`\`\`${props.content.type}
${props.content.code || "console.log('Hello, world!');"}
\`\`\`
`}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
