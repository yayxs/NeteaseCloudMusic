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
  // 下载客户端
  {
    navTitle: "下载客户端",
    path: "/download",
  },
];

export default [...ExternalLink, ...routes];
