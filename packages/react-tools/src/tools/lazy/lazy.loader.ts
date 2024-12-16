import { lazy } from "react";

import type { Path } from "@/types";

export const LazyLoader = (path: Path) => {
  return lazy(() => import(path));
};
