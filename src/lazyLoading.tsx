import React from "react";

const Homepage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const PageNotFound = React.lazy(() => import("./pages/404"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/dang-nhap",
    component: LoginPage,
  },
  {
    path: "/dang-ky",
    component: RegisterPage,
  },
  {
    path: "/con-so-may-man",
    component: LoginPage,
  },
  {
    path: "/lich-su",
    component: LoginPage,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
