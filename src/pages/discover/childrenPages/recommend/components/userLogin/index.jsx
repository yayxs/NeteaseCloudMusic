import React, { memo } from "react";
import { ContainerWrapper, Main } from "./styled";
import { NavLink } from "react-router-dom";
export default memo(function UserLogin() {
  return (
    <ContainerWrapper>
      <Main>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a className="btn ">用户登录</a>
      </Main>
    </ContainerWrapper>
  );
});
