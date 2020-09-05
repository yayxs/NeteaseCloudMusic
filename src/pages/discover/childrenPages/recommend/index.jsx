import React, { memo, useEffect } from "react";
import NRcmdTitleComp from "components/nRcmdTitle";
import BannerComp from "./components/bannerComp";
import CommonItem from "components/commonItem";
import UserLoginComp from "./components/userLogin";
import "./index.scss";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchPersonalizedAsyncAction } from "./store/actionCreators";
const Recommend = memo(() => {
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
          <NRcmdTitleComp />
          <section className="lists">
            {listData.map((item) => {
              return <CommonItem key={item.id} itemData={item} />;
            })}
          </section>
        </section>
        <section className="container_right">
          <UserLoginComp />
        </section>
      </section>
    </>
  );
});

export default Recommend;
