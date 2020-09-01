import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { getBannerListAsyncAction } from "../../store/actionCreators";
import {
  WrapperContainer,
  LeftContainer,
  RightContainer,
  BannerControl,
} from "./styled";

const BannerComp = memo((props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerListAsyncAction());
  }, [dispatch]);
  const { banners } = useSelector(
    (state) => ({
      banners: state.getIn(["recommendReducer", "bannersList"]),
    }),
    shallowEqual
  );
  const bannerRef = useRef();
  const bannerChange = useCallback((from, to) => {
    // console.log(from);

    setCurrIndex(to);
  }, []);
  const bgImage =
    banners[currIndex] &&
    `${banners[currIndex]["imageUrl"]}?imageView&blur=40x20`;
  return (
    <WrapperContainer bgImage={bgImage}>
      <section className="banner wrap_730_center">
        <LeftContainer>
          <Carousel
            effect="fade"
            beforeChange={bannerChange}
            ref={bannerRef}
            autoplay
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </LeftContainer>
        <RightContainer></RightContainer>
        <BannerControl>
          <a className="left btn" onClick={(e) => bannerRef.current.prev()}></a>
          <button
            className="right btn"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </section>
    </WrapperContainer>
  );
});

export default BannerComp;
