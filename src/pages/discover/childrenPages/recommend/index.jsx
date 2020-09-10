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
          {/* 榜单的主要内容 */}
          <section className="n-bilst">
            <dl className="blk">
              <dt className="top">
                <div className="cover">
                  <img
                    src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                    data-src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                    alt=""
                    className="j-img"
                  />
                  <a
                    href="/discover/toplist?id=19723756"
                    className="msk"
                    title="云音乐飙升榜"
                  ></a>
                </div>
                <div className="tit">
                  <a href="/discover/toplist?id=19723756" title="云音乐飙升榜">
                    <h3 className="fs1">云音乐飙升榜</h3>
                  </a>
                  <div className="btn">
                    <a href="" className="play ">
                      播放
                    </a>
                    <a href="" className="favorites">
                      收藏
                    </a>
                  </div>
                </div>
              </dt>
              <dd className="list-container">
                <ol className="">
                  <li>
                    <span className="no no-top">1</span>
                    <a href="" className="nm">
                      是想你的声音啊
                    </a>
                    <div className="oper">
                      <a href="" className="btn play"></a>
                      <a href="" className="btn add"></a>
                      <a href="" className="btn shou"></a>
                    </div>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl className="blk">
              <dt className="top">
                <div className="cover">
                  <img
                    src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"
                    data-src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                    alt=""
                    className="j-img"
                  />
                  <a
                    href="/discover/toplist?id=19723756"
                    className="msk"
                    title="云音乐飙升榜"
                  ></a>
                </div>
                <div className="tit">
                  <a href="/discover/toplist?id=19723756" title="云音乐飙升榜">
                    <h3 className="fs1">云音乐新歌榜</h3>
                  </a>
                  <div className="btn">
                    <a href="" className="play ">
                      播放
                    </a>
                    <a href="" className="favorites">
                      收藏
                    </a>
                  </div>
                </div>
              </dt>
              <dd className="list-container">
                <ol className="">
                  <li>
                    <span className="no no-top">1</span>
                    <a href="" className="nm">
                      是想你的声音啊
                    </a>
                    <div className="oper">
                      <a href="" className="btn play"></a>
                      <a href="" className="btn add"></a>
                      <a href="" className="btn shou"></a>
                    </div>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl className="blk blk1">
              <dt className="top">
                <div className="cover">
                  <img
                    src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"
                    data-src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"
                    alt=""
                    className="j-img"
                  />
                  <a
                    href="/discover/toplist?id=19723756"
                    className="msk"
                    title="云音乐飙升榜"
                  ></a>
                </div>
                <div className="tit">
                  <a href="/discover/toplist?id=19723756" title="云音乐飙升榜">
                    <h3 className="fs1">网易原创歌曲榜</h3>
                  </a>
                  <div className="btn">
                    <a href="" className="play ">
                      播放
                    </a>
                    <a href="" className="favorites">
                      收藏
                    </a>
                  </div>
                </div>
              </dt>
              <dd className="list-container">
                <ol className="">
                  <li>
                    <span className="no no-top">1</span>
                    <a href="" className="nm">
                      是想你的声音啊
                    </a>
                    <div className="oper">
                      <a href="" className="btn play"></a>
                      <a href="" className="btn add"></a>
                      <a href="" className="btn shou"></a>
                    </div>
                  </li>
                </ol>
              </dd>
            </dl>
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
