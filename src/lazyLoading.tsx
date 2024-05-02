import React from "react";

const Homepage = React.lazy(() => import("./pages/Home"));

const PageNotFound = React.lazy(() => import("./pages/404"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
