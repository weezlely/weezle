import type { FC } from "react";

import type { Id } from "@/types";

// This is type for Modal's State
export type ModalStateType = "OPEN_MODAL" | "CLOSE_MODAL" | "CLOSE_MODAL_ALL";

// ============ Open State ============

// This is type for 'Payload' about Modal's open state
interface ModalOpenPayload {
  id: Id;
  component: FC;
  props?: object;
}
interface ModalOpenActions {
  type: Extract<ModalStateType, "OPEN_MODAL">;
  payload: ModalOpenPayload;
}

// ============ Close State ============

interface ModalClosePayload {
  id: Id;
}

interface ModalCloseActions {
  type: Extract<ModalStateType, "CLOSE_MODAL">;
  payload: ModalClosePayload;
}

// ============ All Close State ============

interface ModalAllClosePayload {
  [key: string]: unknown;
}
interface ModalAllCloseActions {
  type: Extract<ModalStateType, "CLOSE_MODAL_ALL">;
  payload: ModalAllClosePayload;
}

// Modal Actions...

export type ModalActionType = ModalOpenActions | ModalCloseActions | ModalAllCloseActions;
