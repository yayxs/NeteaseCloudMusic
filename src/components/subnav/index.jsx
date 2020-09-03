import React, { memo } from "react";
import routesConfig from "@/router/routesConfig.js";
import { WrapperContainer, MainCon } from "./styled";
import CustomLink from "@/components/customLink";
import subNav from "@/router/subNav";
const SubNavComp = memo(function SubNavComp(props) {
  return (
    <WrapperContainer>
      <MainCon className="wrap_1100_center">
        {subNav.map((item) => (
          <section className="item" key={item.path}>
            <CustomLink to={item.path} label={item.navTitle} />
          </section>
        ))}
      </MainCon>
    </WrapperContainer>
  );
});

export default SubNavComp;
