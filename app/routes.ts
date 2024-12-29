import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/layout.tsx", [
    index("./pages/home.tsx"),
    route("about", "./pages/about.tsx"),
  ]),

  layout("./layouts/admin-layout.tsx", [
    route("/admin", "./pages/admin/admin.tsx"),
    route("/admin/settings", "./pages/admin/settings.tsx"),
  ]),

  //   ...prefix("concerts", [
  //     index("./concerts/home.tsx"),
  //     route(":city", "./concerts/city.tsx"),
  //     route("trending", "./concerts/trending.tsx"),
  //   ]),
] satisfies RouteConfig;
