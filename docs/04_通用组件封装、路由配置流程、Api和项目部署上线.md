<!--
 * @Author: yayxs
 * @Date: 2020-08-31 23:17:19
 * @LastEditTime: 2020-09-05 19:51:45
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\docs\04_核心播放bar.md
 * @
-->



>项目源码地址,第一时间更新 [https://github.com/yayxs/NeteaseCloudMusic](https://github.com/yayxs/NeteaseCloudMusic)
>
>wiki 地址以及Api接口说明  [https://github.com/yayxs/NeteaseCloudMusic/blob/master/docs/README.md](https://github.com/yayxs/NeteaseCloudMusic/blob/master/docs/README.md)



## 前情提要

### 读读评论

- [x] ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac85299fca4148ac83afa7515a65139c~tplv-k3u1fbpfcp-zoom-1.image)
  
    >项目和其用到的API 已经 部署上线，详细请看  wiki 文档，感谢评论
    
- [x] ![![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac85299fca4148ac83afa7515a65139c~tplv-k3u1fbpfcp-zoom-1.image)](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3797bf768034c46815aa268a2fc9277~tplv-k3u1fbpfcp-zoom-1.image)

- [x] ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4096987921749398d2ae47b94e7794e~tplv-k3u1fbpfcp-zoom-1.image)

>感谢用户 [ @OldMan23837 ](https://juejin.im/user/2119514148314382)

### 系列文章

- [React16.13.1网抑云实战 （第一周）| axios封装、轮播图实现、alias别名](https://juejin.im/post/6866940379866857480#heading-36)

## 第二周成果展示

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a0f9284a5024944a025bf37ef71c713~tplv-k3u1fbpfcp-zoom-1.image)



### 完成部分

- 首先封装几个公用的组件，主要工作量在底部的**播放控制条**
- 跑通`react-router-dom` `react-router-config` 的配置
- **Api** 接口部署上线  ，项目部署上线



### 底部核心播放bar

底部最核心的功能就是对音乐的播放，还有就是进度条，对音乐的播放，利用 `HTML5` 新增的标签 ,动态的改变 `SRC` 属性

```jsx
audioRef.current.src = getAudioSrc("442869203");
    // 开始播放
    setNowIsPaly(false);
    audioRef.current
      .play()
      .then((res) => {
        setNowIsPaly(true);
      })
      .catch((err) => {
        setNowIsPaly(false);
      });
```

### 红色滑动条

利用`antd` 的 [Slider滑动输入条](https://ant.design/components/slider-cn/)  ，修改其样式

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f882d6d2c9df40aaa57195dddf5facbf~tplv-k3u1fbpfcp-zoom-1.image)

```scss
  .pbar {
        width: 493px;
        .ant-slider {
          padding: 0;
          margin: 0;
          width: 493px;
          height: 9px;
          .ant-slider-rail {
            width: 493px;
            border-radius: 2px;
            height: 9px;
            background-color: #535353;
          }
          .ant-slider-track {
            height: 9px;
            background-color: #c70c0c;
          }
          .ant-slider-step {
            border-radius: 2px;
            height: 9px;
          }
          .ant-slider-handle {
            width: 22px;
            height: 24px;
            margin-top: -7px;
            background: url("../../../assets//images/sprite_icon.png") 0 -250px;
            border: none;
          }
        }
        .time {
          position: absolute;
          top: 21px;
          right: 215px;
          color: #797979;
          span {
            color: #a1a1a1;
          }
          text-shadow: 0 1px 0 #121212;
        }
      }
```

**注意上文我们引入背景图片的方式** 通过 `background: url("../../../assets/images/sprite_icon.png") 0 -250px;`

这是我们使用 `sass`  但是使用  `styled-components` 就不能这样直接引入了，否则会找不到 ，可通过 

```
import arrowImg from "../../../../../../assets/images/arrow_banner_sprite.png";
```

然后使用的时候

```
background: url(${arrowImg});
```

还有一点，关于  鼠标滑过的高亮效果其实是精灵图的 位置发生了变化

```scss
&:hover {
     background-position: 0 -360px;
    }
```

## 路由配置

路由配置方案，采用  `react-router-config` 这也是  官方推荐的静态路由配置方案 ，具体的路由表 见项目 `@/router/routesConfig.js	`

从页面来分析的话

```
// 发现音乐 : 推荐 排行榜 歌单 主播电台 歌手 新碟上架
// 我的音乐 :
// 朋友 :
// 商城 :
// 音乐人
// 下载客户端
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/195b0b535e564f86beb0d31f85929b2e~tplv-k3u1fbpfcp-zoom-1.image)

```js
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
```



## 项目部署上线

###  Api接口

关于项目中所用到的网易云的接口 **已经完成部署** 短时间不会下线  ，你也可以直接 使用 基本的地址是 `http://101.201.148.180:3000`  (项目部署在   3000端口)

请求示例参考 

![![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/195b0b535e564f86beb0d31f85929b2e~tplv-k3u1fbpfcp-zoom-1.image)](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09de5eb66ee94b9dbf28c652ce2ce60b~tplv-k3u1fbpfcp-zoom-1.image)



### 项目的部署

项目目前通过手动部署的方式，已经部署在阿里云服务，有关 `nginx` 相关的配置以及一些常用的配置 可以看  [Nginx | 前端也应晓得常用Nginx命令及配置](https://juejin.im/post/6844904192146931719)

不过打包的时候如果遇到一些问题，比如  webpack的一些配置问题。可能需要注释掉

```js
// config/webpack.config.js

// importWorkboxFrom: "cdn",
```

具体见文末推荐阅读



## 关联阅读

- [https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v4](https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v4)

## 最后

个人项目，下班时间写，更新慢见谅。正如上文所说，已经部署上线，请关注  [http://101.201.148.180/](http://101.201.148.180/#/discover/recommend)

- 感谢评论关注 `star` 的铁汁儿，期待在下一次的读读评论见到你
- 文档中的外链比较多，见谅，因为是之前简单写过，就不再写一遍呢，在写就是深入了 over

## 彩蛋

### 精灵图篇

- [https://s2.music.126.net/style/web2/img/frame/playbar.png?4b285455950eeb8c77bec37cb2a2829c](https://s2.music.126.net/style/web2/img/frame/playbar.png?4b285455950eeb8c77bec37cb2a2829c)
- [底部播放 bar](https://s2.music.126.net/style/web2/img/frame/statbar.png?fe9bf6f2a8cee166bf1b2ea588744650)
- [公共的 title](https://s2.music.126.net/style/web2/img/index/index.png?4e57335302280b79024e0c6444d40fc2)
- [cover](https://s2.music.126.net/style/web2/img/coverall.png?8e9cf6b243b0ed197db8847d8905d064)

### 插件篇

上次忘了说了，如果使用 `styled-components` 这个方案处理样式的话，需要装个插件最好了

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8740c69f6c549bc839d4ae9b3c5fe7d~tplv-k3u1fbpfcp-zoom-1.image)