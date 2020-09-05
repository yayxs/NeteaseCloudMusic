/*
 * @Author: yayxs
 * @Date: 2020-09-05 20:33:29
 * @LastEditTime: 2020-09-05 20:55:21
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\discover\childrenPages\recommend\components\userLogin\styled.js
 * @
 */
import styled from "styled-components";
import bgi from "../../../../../../assets/images/index.png";
export const ContainerWrapper = styled.div`
  width: 250px;
  height: 126px;
`;

export const Main = styled.div`
  width: 250px;
  height: 126px;
  padding-top: 0;
  background: url(${bgi}) no-repeat 0 9999px;
  background-position: 0 0;

  p {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }
  .btn {
    margin: 0 auto;
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background: url(${bgi}) no-repeat 0 9999px;

    background-position: 0 -195px;
  }
`;
