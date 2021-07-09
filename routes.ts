import { login } from "./handlers/auth";
import { style } from './handlers/style';
import { home } from "./handlers/home";
import { signup } from "./handlers/user";
import { requestLogger } from "./middleware/requestLogger";
import { Route } from "./types";

export const routes: Route[] = [
  {
    method: "get",
    path: "/",
    middleware: [],
    handler: home,
  },
  {
    method: "post",
    path: "/users",
    middleware: [],
    handler: signup,
  },
  {
    method: "post",
    path: "/login",
    middleware: [requestLogger],
    handler: login,
  },
  {
    method: "get",
    path: "/getStyle",
    middleware: [requestLogger],
    handler: style,
  },
];
