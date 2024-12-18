import { createRef, useEffect, useMemo } from "react";

import type { GuidViewProps } from "@/types";
import { GuideTemplate } from "@/shared";

interface ViewProps extends GuidViewProps {}

export const HooksUseThemeView = (props: ViewProps) => {
  return <GuideTemplate {...props} />;
};

export default HooksUseThemeView;
