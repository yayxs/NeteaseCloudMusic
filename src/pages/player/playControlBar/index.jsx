import React, { memo } from "react";
import "./index.scss";
export default memo(function PlayerBar() {
  return (
    <div className="play_container">
      <section className="wrap_980_center content ">
        <section className="btns">
          <button className="pre btn"></button>

          <button className="play btn"></button>

          <button className="next btn"></button>
        </section>
        <section className=""></section>
      </section>
    </div>
  );
});
