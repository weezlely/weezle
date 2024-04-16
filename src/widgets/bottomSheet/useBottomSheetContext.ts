import { useContext } from "react";
import BottomSheetContext from "./context";

export default function useBottomSheetContext() {
  return useContext(BottomSheetContext);
}
