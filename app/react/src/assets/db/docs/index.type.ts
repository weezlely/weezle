import type { MarkDownProps } from "@/types";

interface Content {
  contentType: string;
  renderAs: string;
  contentTitle?: string;
  desc: string;
  style: string[];
  md: MarkDownProps | null;
  imgUrl: string | null;
}

interface Paragraph {
  id: string;
  title?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: string;
  contents: Content[];
}

export interface GetStartedIntroResponse {
  paragraphs: Paragraph[];
}
