import { createRef, useEffect, useMemo } from "react";

import { hooksUseTableResponse } from "@/_db";
import { uesPageWrapperStore } from "@/state";
import { GuideTemplate } from "@/shared";

export const HooksUseThemeView = () => {
  const refs = useMemo(() => hooksUseTableResponse.paragraphs.map(() => createRef<HTMLDivElement>()), [hooksUseTableResponse]);

  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = hooksUseTableResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [hooksUseTableResponse]);
  return <GuideTemplate refs={refs} responses={hooksUseTableResponse} />;
};

export default HooksUseThemeView;
