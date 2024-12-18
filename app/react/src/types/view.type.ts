import type { RefObject } from "react";
import { GuidTemplateResponse } from "@/_db";

export interface GuidViewProps {
  refs: RefObject<HTMLDivElement>[];
  responses: GuidTemplateResponse;
}
