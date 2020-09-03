import React, { memo } from "react";
import "./index.scss";
export default memo(function index() {
  return (
    <div className="v-hd2">
      <a href="/discover/playlist/" className="tit f-ff2 f-tdn">
        热门推荐
      </a>
      <section className="tab">
        <a href="" className="s-fc3">
          华语
        </a>
        <span className="line">|</span>
        <a href="" className="s-fc3">
          流行
        </a>
        <span className="line">|</span>
        <a href="" className="s-fc3">
          摇滚
        </a>
        <span className="line">|</span>
        <a href="" className="s-fc3">
          民谣
        </a>
        <span className="line">|</span>
        <a href="" className="s-fc3">
          电子
        </a>
        <span className="line">|</span>
      </section>
      <span className="more">
        <a href="/discover/playlist/" className="s-fc3">
          更多
        </a>
        <i className="cor">&nbsp;</i>
      </span>
    </div>
  );
});
