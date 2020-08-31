/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-08-31 23:13:19
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\App.js
 * @
 */

import "./styles/Base.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePage from "./router/index";

const YYHeaderComp = lazy(() => import("./components/header/index"));
const YYFooterComp = lazy(() => import("./components/footer/index"));
const YYPlayerBarPage = lazy(() => import("./pages/player/playControlBar"));
const App = () => (
  <Router>
    <Suspense fallback={<div>加载中...</div>}>
      <YYHeaderComp />
      <RoutePage />
      <YYFooterComp />
      <YYPlayerBarPage />
    </Suspense>
  </Router>
);

export default App;
