import { create } from "zustand";

import type { Refs } from "@/types";
import { resetRefs, setContentRefs, setRefs } from "@/state";
import { RefObject } from "react";

export interface ContentsRef {
  ref: RefObject<HTMLElement & HTMLDivElement>;
  text?: string;
}

export interface PageWrapperState {
  refs: Refs;
  setRefs: (refs: Refs) => void;

  contentRefs: ContentsRef[];
  setContentRefs: (contentRefs: ContentsRef[]) => void;

  resetRefs: () => void;
}

export const uesPageWrapperStore = create<PageWrapperState>((set) => ({
  refs: [],
  setRefs: (refs: Refs) => setRefs(set, refs),

  contentRefs: [],
  setContentRefs: (contentRefs: ContentsRef[]) => setContentRefs(set, contentRefs),

  resetRefs: () => resetRefs(set),
}));
