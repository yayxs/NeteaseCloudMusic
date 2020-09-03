/*
 * @Author: yayxs
 * @Date: 2020-08-25 23:36:13
 * @LastEditTime: 2020-08-25 23:44:12
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\components\subnav\styled.js
 * @
 */
import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100vw;
  height: 35px;
  background-color: #c20c0c;
  z-index: 90;
  border-bottom: 1px solid #a40011;
`;
export const MainCon = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;
