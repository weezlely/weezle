import { createRef, useEffect, useMemo } from "react";

import { uesPageWrapperStore } from "@/state";
import { TableLibraryDocsService } from "./library-docs.service";
import { TableLibraryDocsView } from "./library-docs.view";

export const TableLibraryDocsController = () => {
  const pageWrapperStores = uesPageWrapperStore();
  const { response, loading, error } = TableLibraryDocsService();

  console.log("1", response);
  const refs = useMemo(() => {
    if (!response) return;
    return response.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [response]);

  useEffect(() => {
    if (!pageWrapperStores) return;
    if (!response) return;

    const mappedParagraphs = response!.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs![index],
    }));

    pageWrapperStores.setRefs(refs!);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [response]);
  console.log("2", response);

  return <TableLibraryDocsView loading={loading} error={error} responses={response!} refs={refs!} />;
};
