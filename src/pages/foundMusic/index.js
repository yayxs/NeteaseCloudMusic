/*
 * @Author: yayxs
 * @Date: 2020-08-24 20:32:57
 * @LastEditTime: 2020-08-26 22:15:13
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\index.js
 * @
 */
import React, { memo } from "react";
import SubNavComp from "../../components/subnav";
import BannerComp from "./childrenPages/recommend/components/bannerComp/index";
const FoundMusic = memo((props) => {
  console.log(props);
  return (
    <>
      {/* 二级导航 */}
      <SubNavComp></SubNavComp>
      {/*  视图渲染出口*/}
      <BannerComp></BannerComp>
    </>
  );
});

export default FoundMusic;
