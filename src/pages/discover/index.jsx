import React, { memo } from "react";
import SubNav from "@/components/subnav";

import { renderRoutes } from "react-router-config";
export default memo(function index({ route: { routes } }) {
  return (
    <div>
      <SubNav></SubNav>
      {renderRoutes(routes)}
    </div>
  );
});
