/*
 * @Author: yayxs
 * @Date: 2020-08-26 21:53:17
 * @LastEditTime: 2020-08-27 22:29:28
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\components\bannerComp\styled.js
 * @
 */
import styled from "styled-components";

export const WrapperContainer = styled.div`
  height: 285px;
  width: 100vw;
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    display: flex;
    position: relative;
  }
`;
export const LeftContainer = styled.div`
  height: 285px;
  width: 685px;
  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 285px;
    }
  }
`;
export const RightContainer = styled.div`
  height: 285px;
  width: 254px;
  background: url(${require("../../../../../../assets/images/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  .btn {
    border: none;
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/images/arrow_banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
