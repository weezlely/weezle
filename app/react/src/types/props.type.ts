import type { RefObject } from "react";

export type MarkDownProps = { code: string; type: string };

export type RefsProps = { text: string; ref: RefObject<HTMLDivElement & HTMLElement> }[];
