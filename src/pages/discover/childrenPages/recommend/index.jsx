import React, { memo } from "react";
import NRcmdTitleComp from "components/nRcmdTitle";
import BannerComp from "./components/bannerComp";
import "./index.scss";
const Recommend = memo(() => {
  return (
    <>
      <BannerComp />
      <section className="recommend_container wrap_980_center">
        <section className="container_left">
          <NRcmdTitleComp />
        </section>
        <section className="container_right"></section>
      </section>
    </>
  );
});

export default Recommend;
