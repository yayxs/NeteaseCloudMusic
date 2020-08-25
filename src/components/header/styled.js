/*
 * @Author: yayxs
 * @Date: 2020-08-24 23:28:16
 * @LastEditTime: 2020-08-25 23:28:36
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\components\header\styled.js
 * @
 */
import styled from "styled-components";

export const WarpperContainer = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #242424;
  .container {
    display: flex;
  }
`;

export const StyledLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  ul {
    width: 508px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      font-size: 14px;
      color: #ccc;
    }
  }
`;
export const StyledRight = styled.div``;
