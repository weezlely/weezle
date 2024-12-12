import { createRef, useEffect, useMemo } from "react";

import { hooksUseTableResponse } from "@/_db";
import { uesPageWrapperStore } from "@/state";
import { GuideTemplate } from "@/shared";

export const HooksUseTableView = () => {
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

  const refs = useMemo(() => {
    return hooksUseTableResponse.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [hooksUseTableResponse]);

  return <GuideTemplate responses={hooksUseTableResponse} refs={refs} />;
};

export default HooksUseTableView;
