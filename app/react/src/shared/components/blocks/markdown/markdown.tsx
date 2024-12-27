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
    <div className="markdown__wrap" style={{ fontFamily: "Arial, sans-serif" }}>
      {props.header && (
        <Heading as="h4" fontColor="black" isUnderline>
          {props.header}
        </Heading>
      )}

      <div className="mac">
        <div className="mac__header">
          <span className="mac__header-dot red" />
          <span className="mac__header-dot yellow" />
          <span className="mac__header-dot green" />
        </div>
        <div className="code__container">
          <ReactMarkdown className="markdown__code" rehypePlugins={[rehypeHighlight]}>
            {`\`\`\`${props.content.type}
${props.content.code || "console.log('Hello, world!');"}`}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
