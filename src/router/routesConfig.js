/*
 * @Author: yayxs
 * @Date: 2020-08-24 20:27:53
 * @LastEditTime: 2020-08-24 20:49:46
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\router\routesConfig.js
 * @
 */
// 发现音乐 推荐 排行榜 歌单 主播电台 歌手 新碟上架
// 我的音乐 朋友 商城 音乐人 下载客户端
import React from "react";
import { Redirect } from "react-router-dom";
const YYFoundMusicPage = React.lazy((_) => import("../pages/foundMusic/index"));
const YYRecommendPage = React.lazy((_) =>
  import("../pages/foundMusic/childrenPages/recommend")
);
export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/found" />,
  },
  {
    path: "/found",
    exact: true,
    component: YYFoundMusicPage,
    children: [
      {
        path: "/found/recommend",
        component: YYRecommendPage,
      },
    ],
  },
];
