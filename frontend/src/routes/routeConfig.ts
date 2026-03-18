import Home from "../pages/Home";

export interface RouteConfig {
    path: string;
    component: React.ComponentType;
    title: string;
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        component: Home,
        title: 'Home'
    },
];