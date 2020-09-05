/*
 * @Author: yayxs
 * @Date: 2020-08-24 20:27:53
 * @LastEditTime: 2020-09-05 22:01:22
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\router\routesConfig.js
 * @
 */
// 发现音乐 : 推荐 排行榜 歌单 主播电台 歌手 新碟上架
// 我的音乐 :
// 朋友 :
// 商城 :
// 音乐人
// 下载客户端
import React from "react";
import { Redirect } from "react-router-dom";

const YYDiscoverPage = React.lazy((_) => import("../pages/discover"));

// 发现音乐/推荐
const YYRecommendPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/recommend")
);
// 发现音乐/排行榜
const YYTopListPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/toplist")
);
// 发现音乐/歌单
const YYPlayListPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/playlist")
);
// 发现音乐/主播电台
const YYDjRadioPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/djradio")
);
// 发现音乐/歌手
const YYArtistPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/artist")
);
// 发现音乐/新碟上架
const YYAlbumPage = React.lazy((_) =>
  import("../pages/discover/childrenPages/album")
);
// 我的音乐
const YYMyPage = React.lazy((_) => import("../pages/my"));
// 朋友
const YYFriendPage = React.lazy((_) => import("../pages/friend"));
// 下载客户端
const YYDownloadPage = React.lazy((_) => import("../pages/download"));

export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  //  发现音乐
  {
    path: "/discover",
    component: YYDiscoverPage,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      // 推荐
      {
        path: "/discover/recommend",
        component: YYRecommendPage,
      },
      // 排行榜
      {
        component: YYTopListPage,
        path: "/discover/toplist",
      },
      // 歌单
      {
        component: YYPlayListPage,
        path: "/discover/playlist",
      },
      // 主播电台
      {
        component: YYDjRadioPage,
        path: "/discover/djradio",
      },
      // 歌手
      {
        component: YYArtistPage,
        path: "/discover/artist",
      },
      // 新碟上架
      {
        component: YYAlbumPage,
        path: "/discover/album",
      },
    ],
  },
  // 我的音乐
  {
    component: YYMyPage,
    path: "/my",
  },
  // 朋友
  {
    component: YYFriendPage,
    path: "/friend",
  },
  // 下载客户端
  {
    component: YYDownloadPage,
    path: "/download",
  },
];
