import React, { memo } from "react";
import classnames from "classnames";
import { WarpperContainer, StyledLeft, StyledRight } from "./styled";
import { NavLink } from "react-router-dom";
// import { headerNavConfig } from "../../common/config";
import headerNav from "../../router/headerNav";
const HeaderComp = memo(() => {
  return (
    <WarpperContainer>
      <div className="wrap_1100_center container">
        <StyledLeft>
          <a hidefocus="true" href="/#" className="logo sprite_topbar">
            网易云音乐
          </a>
          <ul>
            {headerNav.map((item) => (
              <li key={item.navTitle} className={classnames("setected_nav")}>
                {item.path ? (
                  <NavLink to={item.path}>
                    {item.navTitle}
                    <i className="sprite_topbar icon"></i>
                  </NavLink>
                ) : (
                  <a href={item.externalLink} target="_blank">
                    {item.navTitle}{" "}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </StyledLeft>
        <StyledRight></StyledRight>
      </div>
    </WarpperContainer>
  );
});

export default HeaderComp;
