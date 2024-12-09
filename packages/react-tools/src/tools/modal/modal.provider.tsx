import type { ModalState } from "./modal.state";
import type { ModalActionType } from "./modal.type";

const modalReducer = (state: ModalState[], action: ModalActionType) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return [...state, { id: action.payload.id, component: action.payload.component, props: action.payload.props || {} }];
    case "CLOSE_MODAL":
      return state.filter((modal) => modal.id !== action.payload.id);
    case "CLOSE_MODAL_ALL":
      return [];
    default:
      return state;
  }
};
