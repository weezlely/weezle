import { Flex, Heading, HeadingAs } from "@taeopia/ui-with-css";
import { createRef, useEffect, useMemo } from "react";

import type { FlexDirection } from "@/types";
import { CanvasEditorProvider, CrumbTrail, ExampleCanvasEditor, ExampleCanvasEditorToolbar } from "@/shared/components";

import { uesPageWrapperStore } from "@/state";
import { BaseCard, Markdown } from "@/shared/components";

import { canvasMainResponse } from "@/assets";
export const CanvasGuideView = () => {
  const refs = useMemo(() => canvasMainResponse.paragraphs.map(() => createRef<HTMLDivElement>()), [canvasMainResponse]);

  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = canvasMainResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [canvasMainResponse]);
  return (
    <article className="layout__sub-content">
      <CrumbTrail />

      {/* Title */}
      <section className="m-b-40">
        <Heading className="text_bk_wh" as={canvasMainResponse.tag as HeadingAs} style={{ fontSize: "48px" }}>
          {canvasMainResponse.content}
        </Heading>
      </section>
      {/* Title */}

      {canvasMainResponse.paragraphs.map((paragraph, i) => {
        return (
          <section key={i} ref={refs[i]} className="m-b-20">
            <Flex align="center" gap={10}>
              {i !== 0 && <span className="badge__docs">{i}</span>}
              <Heading className="text_bk_wh" as={paragraph.tag as HeadingAs} style={{ color: "var(--text)" }}>
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

      <section className="canvas__wrap">
        <CanvasEditorProvider>
          <ExampleCanvasEditorToolbar />
          <ExampleCanvasEditor />
        </CanvasEditorProvider>
      </section>
    </article>
  );
};
