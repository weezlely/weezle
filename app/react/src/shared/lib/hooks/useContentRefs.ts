import { useEffect, useMemo, createRef } from "react";

import { Refs, RefsProps } from "@/types";

interface DefaultItem {
  title?: string;
  text?: string;
  desc?: string;
  contents: Record<string, any>[];
}

/**
 * Basic data type definition: title, text, and desc properties may be included
 * (기본 데이터 타입 정의: title, text, desc 속성이 포함될 수 있음)
 *
 * Set all properties as optional
 * (모든 속성은 선택적(optional)으로 설정)
 */
interface UseContentRefs<T extends DefaultItem> {
  dataset?: T[];
  onUpdateRefs?: (refs: RefsProps) => void;
  onCleanup?: () => void;
  onSetRef?: (refs: Refs) => void;
}

export function useContentRefs<T extends DefaultItem>(props: UseContentRefs<T>) {
  const { dataset, onUpdateRefs, onCleanup, onSetRef } = props;

  const refs = useMemo(() => {
    if (!dataset) return [];

    return dataset.map((data) => ({
      text: data.title || data.text || data.desc || "",
      ref: createRef<HTMLDivElement & HTMLElement>(),
      children: (data.contents || []).map((content) => {
        return {
          text: content.contentTitle,
          ref: createRef<HTMLDivElement & HTMLElement>(),
        };
      }),
    }));
  }, [dataset]);

  useEffect(() => {
    // Handle when refs change
    onSetRef?.(refs.map((ref) => ref.ref));
    onUpdateRefs?.(refs);

    // Perform cleanup tasks when unmounting components
    return () => {
      onCleanup?.();
    };
  }, [dataset, refs]);

  return refs;
}
