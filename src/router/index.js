/*
 * @Author: yayxs
 * @Date: 2020-08-24 20:27:45
 * @LastEditTime: 2020-08-25 22:03:49
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\router\index.js
 * @
 */
import React, { memo } from "react";
import routesConfig from "./routesConfig";
import { Route, Switch } from "react-router-dom";
const RouterPage = memo(() => {
  return (
    <Switch>
      {routesConfig.map((item) => (
        <Route
          path={item.path}
          exact={item.exact}
          component={item.component}
          render={item.render}
          key={item.path}
        />
      ))}
    </Switch>
  );
});

export default RouterPage;
