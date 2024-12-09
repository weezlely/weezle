import type { FC } from "react";

// This is type for Modal State
export interface ModalState {
  id: string;
  component: FC;
  props: Record<string, any>;
}

// Modal's initiate state
export const initialState: ModalState[] = [];
