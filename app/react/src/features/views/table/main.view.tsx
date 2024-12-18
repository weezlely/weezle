import { Flex, Heading, HeadingAs } from "@taeopia/ui-with-css";
import { createRef, useEffect, useMemo } from "react";

import type { FlexDirection } from "@/types";
import { uesPageWrapperStore } from "@/state";
import { BaseCard, Markdown, TaeopiaTable } from "@/shared/components";

import { tableMainResponse } from "@/_db";
import { useLocation } from "react-router-dom";

export const TableMainView = () => {
  const location = useLocation();

  console.log("테이블", location);
  const refs = useMemo(() => tableMainResponse.paragraphs.map(() => createRef<HTMLDivElement>()), [tableMainResponse]);

  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = tableMainResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [tableMainResponse]);

  return (
    <article className="content-wrapper">
      {/* Title */}
      <section className="m-b-40">
        <Heading className="text_bk_wh" as={tableMainResponse.tag as HeadingAs} style={{ fontSize: "48px" }}>
          {tableMainResponse.content}
        </Heading>
      </section>
      {/* Title */}

      {tableMainResponse.paragraphs.map((paragraph, i) => {
        return (
          <section key={i} ref={refs[i]} className="m-b-20">
            <Flex align="center" gap={10}>
              {i !== 0 && <span className="badge__docs">{i}</span>}
              <Heading as={paragraph.tag as HeadingAs} style={{ color: "var(--bg_01)" }}>
                {paragraph.title}
              </Heading>
            </Flex>

            <Flex dir={paragraph.direction as FlexDirection} gap={8} style={{ padding: "8px" }}>
              {paragraph.contents.map((content) => {
                return (
                  <div style={{ width: "100%" }}>
                    {content.type === "card" && (
                      <>
                        <BaseCard title={content.title} description={content.desc} style={{ width: "100%" }} />
                      </>
                    )}
                    {content.type === "code" && (
                      <>
                        {content.desc.map((d) => (
                          <Heading as={content.tag as HeadingAs} style={{ color: "var(--bg_01)" }}>
                            {d}
                          </Heading>
                        ))}
                        <Markdown
                          content={{
                            type: content.md?.type!,
                            code: content.md?.code!,
                          }}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </Flex>
          </section>
        );
      })}

      <TaeopiaTable refs={refs} />
    </article>
  );
};

export default TableMainView;
