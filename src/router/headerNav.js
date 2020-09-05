/*
 * @Author: yayxs
 * @Date: 2020-09-03 20:05:47
 * @LastEditTime: 2020-09-05 21:44:04
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\router\headerNav.js
 * @
 */
const ExternalLink = [
  // 商城
  {
    navTitle: "商城",
    externalLink: `https://music.163.com/store/product`,
  },
  // 音乐人
  {
    navTitle: "音乐人",
    externalLink: `https://music.163.com/nmusician/web/index#/`,
  },
];

const routes = [
  {
    path: "/discover",
    navTitle: "发现音乐",
  },
  {
    navTitle: "我的音乐",
    path: "/my",
  },
  // 朋友
  {
    navTitle: "朋友",
    path: "/friend",
  },
];

export default [
  ...routes,
  ...ExternalLink, // 下载客户端
  {
    navTitle: "下载客户端",
    path: "/download",
  },
];
