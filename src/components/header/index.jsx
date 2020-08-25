import React, { memo } from "react";
import classnames from "classnames";
import { WarpperContainer, StyledLeft, StyledRight } from "./styled";
import { NavLink } from "react-router-dom";
import { headerNavConfig } from "../../common/config";
const HeaderComp = memo(() => {
  return (
    <WarpperContainer>
      <div className="wrap_1100_center container">
        <StyledLeft>
          <a hidefocus="true" href="/#" className="logo sprite_topbar">
            网易云音乐
          </a>
          <ul>
            {headerNavConfig.map((item) => (
              <li key={item.title} className={classnames("setected_nav")}>
                <NavLink to={item.path}>
                  {item.title}
                  <i className="sprite_topbar icon"></i>
                </NavLink>
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
