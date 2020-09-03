import React, { memo } from "react";
import { useRouteMatch, Link } from "react-router-dom";
export default memo(function CustomLink({ label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </div>
  );
});
