import { createRef, useEffect, useMemo } from "react";

import { hookUseTableOutsideClick } from "@/_db";
import { uesPageWrapperStore } from "@/state";
import { GuideTemplate } from "@/shared";

export const HooksUseTableOutsideClickView = () => {
  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = hookUseTableOutsideClick.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [hookUseTableOutsideClick]);

  const refs = useMemo(() => {
    return hookUseTableOutsideClick.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [hookUseTableOutsideClick]);

  return <GuideTemplate responses={hookUseTableOutsideClick} refs={refs} />;
};

export default HooksUseTableOutsideClickView;
