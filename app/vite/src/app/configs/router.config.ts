import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { createElement, lazy } from "react";
import { LazyLayout, MainLayout } from "@/shared/components";
import { urlConfigs } from "./url.config";

export type Routers = RouteObject[];

const LazyHomePage = lazy(() => import("@/layers/views/home"));
const LazyCanvasPage = lazy(() => import("@/layers/views/canvas"));
const LazyTablePage = lazy(() => import("@/layers/views/table"));

const createRoutes = (): Routers => {
  const routes: Routers = [
    {
      path: urlConfigs.default,
      element: createElement(MainLayout),
      children: [
        {
          path: urlConfigs.home.main,
          element: LazyLayout(LazyHomePage),
        },
        {
          path: "/canvas",
          element: LazyLayout(LazyCanvasPage),
        },
        {
          path: "/table",
          element: LazyLayout(LazyTablePage),
        },
      ],
    },
  ];

  return routes;
};

export const routerConfig = createBrowserRouter(createRoutes());
