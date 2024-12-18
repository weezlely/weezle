import type { RefObject } from "react";
import { Flex, Heading, HeadingAs } from "@taeopia/ui-with-css";
import { useTranslation } from "react-i18next";

import type { FlexDirection } from "@/types";
import { BaseCard, InfoPanel, Markdown } from "@/shared/components";

import { GuidTemplateResponse } from "@/_db";

export interface GuidTemplateProps {
  refs: RefObject<HTMLDivElement>[];
  responses: GuidTemplateResponse;
}

export const GuideTemplate = (props: GuidTemplateProps) => {
  const { responses, refs } = props;

  const { t } = useTranslation();

  if (!responses) return <div>데이터가 없습니다..</div>;

  return (
    <article className="content-wrapper">
      {/* Title */}
      <section className="p-b-20 m-b-40 border-b">
        <Heading className="text_bk_wh" as={responses?.tag as HeadingAs} style={{ fontSize: "48px" }}>
          {responses.content}
        </Heading>
      </section>
      {/* Title */}

      {responses.paragraphs.map((paragraph, i) => {
        return (
          <section key={i} ref={refs[i]} className={`${i == 0 ? "m-b-40" : ""}`}>
            <Flex align="center" gap={10}>
              {i !== 0 && <span className="badge__docs">{i}</span>}
              <Heading className="text_bk_wh" as={paragraph?.tag as HeadingAs} style={{ fontWeight: 700 }}>
                {t(`paragraphs.${paragraph.title}`)}
              </Heading>
            </Flex>

            <Flex dir={paragraph.direction as FlexDirection} gap={8} style={{ padding: "8px" }}>
              {paragraph.contents.map((content, j) => {
                return (
                  <div key={`${i}-${j}`} className={`w-100 p-l-10 ${i !== 0 ? "border-l" : ""}`}>
                    {content.type === "card" && (
                      <>
                        <BaseCard title={content.title} description={content.desc} style={{ width: "100%" }} />
                      </>
                    )}
                    {(content.type === "code" || content.type === "desc") && (
                      <>
                        <InfoPanel tag={content?.tag as HeadingAs} descriptions={content.desc} />

                        {content.md && (
                          <Markdown
                            content={{
                              type: content.md?.type!,
                              code: content.md?.code!,
                            }}
                          />
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </Flex>
          </section>
        );
      })}
    </article>
  );
};

export default GuideTemplate;
