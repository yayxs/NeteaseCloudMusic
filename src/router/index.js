import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import routesConfig from "./routesConfig";

export default memo(function index() {
  return renderRoutes(routesConfig);
});
