import type { RefObject } from "react";
import { Flex, Heading, HeadingAs } from "@taeopia/ui-with-css";
import { useTranslation } from "react-i18next";

import type { FlexDirection } from "@/types";
import { BaseCard, CrumbTrail, InfoPanel, Markdown } from "@/shared/components";

import { GuidTemplateResponse } from "@/assets";

export interface GuidTemplateProps {
  refs: RefObject<HTMLDivElement>[];
  responses: GuidTemplateResponse;
}

export const GuideTemplate = (props: GuidTemplateProps) => {
  const { responses, refs } = props;

  const { t } = useTranslation();

  if (!responses) return <div>데이터가 없습니다..</div>;

  return (
    <article className="layout__sub-content">
      <CrumbTrail />

      {/* Title */}
      <section className="p-b-20 m-b-40 border-b">
        <h1 className="text_bk_wh fs_48">{responses.content}</h1>
        {/* <Heading className="text_bk_wh fs_48" as={responses?.tag as HeadingAs}>
          {responses.content}
        </Heading> */}
      </section>
      {/* Title */}

      {responses.paragraphs.map((paragraph, i) => {
        return (
          <section key={i} ref={refs[i]} className={`${i == 0 ? "m-b-40" : ""}`}>
            <div className="flex-row align_center gap_10">
              {i !== 0 && <span className="badge__docs">{i}</span>}
              <h3 className="text_bk_wh fs_32">{paragraph.title}</h3>

              {/* <Heading className="text_bk_wh" as={paragraph?.tag as HeadingAs} style={{ fontWeight: 700, background: "red" }}>
                {paragraph.title}
              </Heading> */}
            </div>

            <div className={`${paragraph.direction === "row" ? "flex-row" : "flex-column"} gap_8 p-8`}>
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
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default GuideTemplate;
