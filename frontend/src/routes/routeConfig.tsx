import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    }
]