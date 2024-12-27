import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";

// layouts...
import { MainLayout, SubLayout } from "@/shared/layouts";

// Controllers
import * as Controller from "@/features";

export type Routers = RouteObject[];

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
        {
          path: "docs",
          children: [
            { path: "", element: <Navigate to="guide" /> },
            // Get Started
            {
              // Guide
              path: "guide",
              children: [
                { path: "", element: <Navigate to="overview" /> },
                // guide/overview
                {
                  path: "overview",
                  children: [
                    { path: "", element: <Navigate to="introduction" /> },
                    { path: "introduction", element: <Controller.GetStartedController /> },
                  ],
                },
                // guide/library
                {
                  path: "library",
                  children: [
                    { path: "", element: <Navigate to="ui" /> },
                    { path: "ui", element: <Controller.UnderConstructionController /> },
                    { path: "tabula", element: <Controller.UnderConstructionController /> },
                    { path: "sketcha", element: <Controller.UnderConstructionController /> },
                    { path: "hooks", element: <Controller.UnderConstructionController /> },
                  ],
                },
                // guide/frameworks

                {
                  path: "frameworks",
                  children: [
                    { path: "", element: <Navigate to="vite" /> },
                    { path: "vite", element: <Controller.UnderConstructionController /> },
                  ],
                },
              ],
            },
            //  Usage
            {
              path: "usage",
              children: [
                { path: "", element: <Navigate to="manual" /> },
                {
                  path: "manual",
                  children: [
                    { path: "", element: <Navigate to="installation" /> },
                    { path: "installation", element: <Controller.UnderConstructionController /> },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "ui",
      element: <SubLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="guide" />,
        },
        {
          path: "guide",
          children: [
            { path: "overview", element: <Controller.UnderConstructionController /> },
            { path: "usage", element: <Controller.UnderConstructionController /> },
            {
              path: "components",
              children: [
                { path: "", element: <Navigate to="accordion" /> },
                { path: "accordion", element: <Controller.UnderConstructionController /> },
                { path: "animateButton", element: <Controller.UnderConstructionController /> },
                { path: "bottomSheet", element: <Controller.UnderConstructionController /> },
                { path: "box", element: <Controller.UnderConstructionController /> },
                { path: "button", element: <Controller.UnderConstructionController /> },
                { path: "card", element: <Controller.UnderConstructionController /> },
                { path: "checkbox", element: <Controller.UnderConstructionController /> },
                { path: "flex", element: <Controller.UnderConstructionController /> },
                { path: "flyout", element: <Controller.UnderConstructionController /> },
                { path: "heading", element: <Controller.UnderConstructionController /> },
                { path: "input", element: <Controller.UnderConstructionController /> },
                { path: "modal", element: <Controller.UnderConstructionController /> },
                { path: "radio", element: <Controller.UnderConstructionController /> },
                { path: "sidebar", element: <Controller.UnderConstructionController /> },
                { path: "spacing", element: <Controller.UnderConstructionController /> },
                { path: "switch", element: <Controller.UnderConstructionController /> },
                { path: "typography", element: <Controller.UnderConstructionController /> },
              ],
            },
          ],
        },

        {
          path: "design",
          children: [
            { path: "", element: <Navigate to="overview" /> },
            { path: "overview", element: <Controller.UnderConstructionController /> },
          ],
        },
      ],
    },

    {
      path: "applications",
      element: <SubLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="table" />,
        },
        {
          path: "table",
          children: [
            {
              path: "",
              element: <Controller.TableMainController />,
            },
            {
              path: "components",
              children: [
                { path: "", element: <Navigate to="rowTable" /> },
                { path: "rowTable", element: <Controller.TableGuideController /> },
              ],
            },
            {
              path: "hooks",
              children: [
                { path: "", element: <Navigate to="useTable" /> },
                { path: "useTable", element: <Controller.TableGuideController /> },
                { path: "useTableOutSideClick", element: <Controller.TableGuideController /> },
                { path: "useTheme", element: <Controller.UnderConstructionController /> },
              ],
            },
            {
              path: "modules",
              children: [
                { path: "", element: <Navigate to="tableManager" /> },
                { path: "tableManager", element: <Controller.TableGuideController /> },
              ],
            },
          ],
        },
        {
          path: "canvas",
          children: [
            {
              path: "",
              element: <Controller.CanvasGuideController />,
            },
            {
              path: "models",
              children: [
                { path: "", element: <Navigate to="canvas" /> },
                { path: "canvas", element: <Controller.TableGuideController /> },
              ],
            },
          ],
        },
      ],
    },

    /**
     * @description Posts page.
     */

    {
      path: "posts",
      element: <SubLayout />,
      children: [{ path: "", element: <Controller.UnderConstructionController /> }],
    },

    /**
     * @description Blogs page.
     */
    {
      path: "blog",
      element: <SubLayout />,
      children: [{ path: "", element: <Controller.UnderConstructionController /> }],
    },

    // Error Pages
    /**
     * @description The page is displayed when a user enters an wrong url page.
     */
    {
      path: "*",
      element: <Controller.NotFoundController />,
    },
    /**
     * @description The page is displayed when a user enters an unauthorized page.
     */
    {
      path: "unauthorized",
      element: <Controller.UnAuthorizedController />,
    },
  ];

  return routes;
};

export const routerConfig = createBrowserRouter(createRoutes());
