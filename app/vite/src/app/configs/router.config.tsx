import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";
import { lazy } from "react";
import { LazyWrapper } from "@taeopia/react-tool";

// layouts...
import { MainLayout, SubLayout } from "@/shared";

// Views...
import * as ErrorViews from "@/features/views/errors";
import * as MainViews from "@/features/views/main";
import * as TableViews from "@/features/views/table";
import * as CanvasViews from "@/features/views/canvases";

// Controllers
// import * as Controller from "@/features";
import * as Controller from "@/features";

export type Routers = RouteObject[];

const LazyHomePage = lazy(() => import("@/features/views/home"));
// const LazyCanvasPage = lazy(() => import("@/layers/views/canvas"));

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
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Controller.MainController />,
        },
      ],
    },

    {
      path: "",
      element: <SubLayout />,
      children: [
        // {
        //   path: urlConfig.home.main,
        //   element: <MainViews.MainHomeView />,
        // },
        {
          path: "canvas",
          children: [{ path: "", element: <CanvasViews.CanvasMainView /> }],
        },
        {
          path: "applications",
          element: <Navigate to="/table" />,
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
                { path: "rowTable", element: <Controller.TableLibraryDocsController /> },
              ],
            },
            {
              path: "hooks",
              children: [
                { path: "", element: <Navigate to="useTable" /> },
                { path: "useTable", element: <Controller.TableLibraryDocsController /> },
                { path: "useTableOutSideClick", element: <Controller.TableLibraryDocsController /> },
                { path: "useTheme", element: <DevelopingPage /> },
              ],
            },
            {
              path: "modules",
              children: [
                { path: "", element: <Navigate to="tableManager" /> },
                { path: "tableManager", element: <Controller.TableLibraryDocsController /> },
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
      element: <ErrorViews.ErrorNotFoundView />,
    },
    /**
     * @description The page is displayed when a user enters an unauthorized page.
     */
    {
      path: "unauthorized",

      element: <ErrorViews.ErrorUnAuthorizedView />,
    },
  ];

  return routes;
};

export const routerConfig = createBrowserRouter(createRoutes());
