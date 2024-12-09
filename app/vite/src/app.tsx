import { RouterProvider } from "react-router-dom";

import { routerConfig, styleConfig } from "./app/configs";

styleConfig();

export const App = () => <RouterProvider router={routerConfig} />;
