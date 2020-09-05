import React, { memo, useEffect, useState } from "react";
import NRcmdTitleComp from "components/nRcmdTitle";
import BannerComp from "./components/bannerComp";
import CommonItem from "components/commonItem";
import UserLoginComp from "./components/userLogin";
import NewDis from "./components/newdiscs";
import "./index.scss";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchPersonalizedAsyncAction } from "./store/actionCreators";
const Recommend = memo(() => {
  const [tabsState, setTabsState] = useState([
    {
      name: "华语",
    },
    {
      name: "流行",
    },
    {
      name: "摇滚",
    },
    {
      name: "民谣",
    },
    {
      name: "电子",
    },
  ]);
  const dispatch = useDispatch();
  const { listData } = useSelector(
    (state) => ({
      listData: state.getIn(["recommendReducer", "personalizedList"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchPersonalizedAsyncAction());
  }, [dispatch]);
  return (
    <>
      <BannerComp />
      <section className="recommend_container wrap_980_center">
        <section className="container_left">
          <NRcmdTitleComp title="热门推荐" tabs={tabsState} />
          <section className="lists">
            {listData.map((item) => {
              return <CommonItem key={item.id} itemData={item} />;
            })}
          </section>
          <NRcmdTitleComp title="新碟上架" tag="new" />
          <NewDis />
          <NRcmdTitleComp title="榜单" tag="new" />
        </section>
        <section className="container_right">
          <UserLoginComp />
        </section>
      </section>
    </>
  );
});

export default Recommend;
