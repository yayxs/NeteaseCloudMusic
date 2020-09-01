import React, { memo, useState } from "react";
import { Slider } from "antd";
import "./index.scss";
export default memo(function PlayerBar() {
  const [defaultValue, setDefaultValue] = useState(30);
  return (
    <div className="play_container">
      <section className="lock">
        <a href="" className="btn"></a>
      </section>
      <section className="wrap_980_center content ">
        <section className="btns">
          <a href="" className="pre btn"></a>

          <a href="" className="play btn"></a>

          <a href="" className="next btn"></a>
        </section>
        <section className="space"></section>
        <section className="song_cover">
          <img
            src="https://p2.music.126.net/ZXByCLzRjyIQTyTCGXS3zg==/109951165277008551.jpg?param=34y34"
            alt="cover"
          />
          <a href="" hidefocus="true" className="mask"></a>
        </section>
        <section className="play">
          <section
            className="j-flag words"
            style={{ height: "28px", lineHeight: "28px" }}
          >
            <a
              href=""
              hidefocus="true"
              className="f-thide name fc1 f-fl"
              title=""
              style={{ color: "#fff" }}
            >
              分手跳跃
            </a>
            <span className="by f-thide f-fl" style={{ marginLeft: "15px" }}>
              <span title="隔壁老樊">
                <a href="" hidefocus="true" title="" className="singer">
                  隔壁老樊
                </a>
              </span>
            </span>
          </section>
          <section className="pbar">
            <Slider defaultValue={defaultValue} />
            <span className="j-flag time">
              <span>03:14</span> / 04:10
            </span>
          </section>
        </section>
        <section className="warp_con ">
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <section className="right">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist">112</button>
          </section>
        </section>
      </section>
    </div>
  );
});
