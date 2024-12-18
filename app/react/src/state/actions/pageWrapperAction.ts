import type { Refs } from "@/types";
import type { ContentsRef, PageWrapperState, SetAction } from "@/state";

export const setRefs = (set: SetAction<PageWrapperState>, refs: Refs) => {
  set((state: PageWrapperState) => ({ refs }));
};

export const setContentRefs = (set: SetAction<PageWrapperState>, contentRefs: ContentsRef[]) => {
  set((state: PageWrapperState) => ({ contentRefs }));
};

export const resetRefs = (set: SetAction<PageWrapperState>) => {
  set((state: PageWrapperState) => ({ contentRefs: [], refs: [] }));
};
