import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { createElement, lazy } from "react";
import { LazyLayout, MainLayout } from "@/components";

export type Routers = RouteObject[];

const LazyHomePage = lazy(() => import("@/pages/home"));
const LazyCanvasPage = lazy(() => import("@/pages/canvas"));

const createRoutes = (): Routers => {
  const routes: Routers = [
    {
      path: "",
      element: createElement(MainLayout),
      children: [
        {
          path: "/",
          element: LazyLayout(LazyHomePage),
        },
        {
          path: "/canvas",
          element: LazyLayout(LazyCanvasPage),
        },
      ],
    },
  ];

  return routes;
};
export default createBrowserRouter(createRoutes());
