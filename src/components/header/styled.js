/*
 * @Author: yayxs
 * @Date: 2020-08-24 23:28:16
 * @LastEditTime: 2020-09-05 21:53:51
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\components\header\styled.js
 * @
 */
import styled from "styled-components";
import bgi from "../../assets/images/topbar.png";
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
  .m_nav {
    display: flex;
    line-height: 70px;

    li {
      position: relative;
      height: 70px;
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;

          background-image: url("${bgi}");
          background-position: -192px 0;
          top: 15px;
          right: -15px;
        }
      }
      font-size: 14px;
      a {
        padding: 0 19px;
        height: 70px;
        display: inline-block;
        text-align: center;
        line-height: 70px;
        color: #ccc;
        /* outline: none; */
        font-size: 14px;
        &:hover {
          background: #000;
          text-decoration: none;
          color: #fff;
          line-height: 70px;
        }
        &:active {
          background: #000;
          text-decoration: none;
          color: #fff;
          line-height: 70px;
        }
      }
    }
  }
`;
export const StyledRight = styled.div`
  width: 298px;
  height: 70px;
  margin-left: 118px;
`;
