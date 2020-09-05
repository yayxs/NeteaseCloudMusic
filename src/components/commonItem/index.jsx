import React, { memo } from "react";
import { formatPlayCount } from "@/utils";
import "./index.scss";
export default memo(function CommonItem({ itemData }) {
  console.log(itemData);
  return (
    <div className="commonItem_container">
      <section className="cover">
        <img src={`${itemData.picUrl}?param=140y140`} alt="" />
        <a href="" className="msk"></a>
        <section className="bottom">
          <a href="" className="icon_play"></a>
          <span className="icon-headset"></span>
          <span className="nb">{formatPlayCount(itemData.playCount)}</span>
        </section>
      </section>
      <p className="desc">
        <a href="" title={itemData.name} className="tit">
          {itemData.name}
        </a>
      </p>
    </div>
  );
});
