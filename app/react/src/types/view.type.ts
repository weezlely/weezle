import type { RefObject } from "react";
import { GuidTemplateResponse } from "@/assets";

export interface GuidViewProps {
  refs: RefObject<HTMLDivElement>[];
  responses: GuidTemplateResponse;
}
