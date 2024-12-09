import type { Dispatch } from "react";
import { createContext } from "react";

import { initialState, ModalState } from "./modal.state";
import { ModalActionType } from "./modal.type";

interface ModalContextProps {
  state: ModalState[];
  dispatch: Dispatch<ModalActionType>;
}

// Modal Context
export const ModalContext = createContext<ModalContextProps>({
  state: initialState,
  dispatch: () => null,
});
