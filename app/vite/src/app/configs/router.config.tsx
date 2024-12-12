import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";
import { lazy } from "react";

import { urlConfig } from "@/app/configs";
import { LazyLayout, MainLayout } from "@/shared";
import * as TableViews from "@/layers/views/table";

export type Routers = RouteObject[];

const LazyHomePage = lazy(() => import("@/layers/views/home"));
const LazyCanvasPage = lazy(() => import("@/layers/views/canvas"));

const DevelopingPage = () => {
  return (
    <article className="content-wrapper">
      <div>개발중..</div>
    </article>
  );
};

const createRoutes = (): Routers => {
  const routes: Routers = [
    {
      path: urlConfig.default,
      element: <MainLayout />,
      children: [
        {
          path: urlConfig.home.main,
          element: LazyLayout(LazyHomePage),
        },
        {
          path: "canvas",
          element: LazyLayout(LazyCanvasPage),
        },
        {
          path: "table",
          children: [
            {
              path: "",
              element: <TableViews.TableMainView />,
            },
            {
              path: "components",
              children: [
                { path: "", element: <Navigate to="rowTable" /> },
                { path: "rowTable", element: <TableViews.ComponentRowTableView /> },
              ],
            },
            {
              path: "hooks",
              children: [
                { path: "", element: <Navigate to="useTable" /> },
                { path: "useTable", element: <TableViews.HooksUseTableView /> },
                { path: "useTableOutSideClick", element: <TableViews.HooksUseTableOutsideClickView /> },
                { path: "useTheme", element: <DevelopingPage /> },
              ],
            },
            {
              path: "modules",
              children: [
                { path: "", element: <Navigate to="tableManager" /> },
                { path: "tableManager", element: <DevelopingPage /> },
              ],
            },
          ],
        },
      ],
    },

    // Error Pages
    /**
     * @description The page is displayed when a user enters an wrong url page.
     */
    {
      path: "*",
      element: <div>에러</div>,
    },
    /**
     * @description The page is displayed when a user enters an unauthorized page.
     */
    {
      path: "unauthorized",

      element: <div>권한받지않았습니다.</div>,
    },
  ];

  return routes;
};

export const routerConfig = createBrowserRouter(createRoutes());
