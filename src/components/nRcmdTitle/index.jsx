import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import { WrapCon } from "./styled.js";

const NRcmdTitle = ({ title, tabs, tag }) => {
  return (
    <WrapCon className="v-hd2" tag={tag}>
      <a href="/discover/playlist/" className="tit f-ff2 f-tdn">
        {title}
      </a>
      <section className="tab">
        {tabs &&
          tabs.map((item) => {
            return (
              <Fragment key="item.name">
                <a href="" className="s-fc3">
                  {item.name}
                </a>
                <span className="line">|</span>
              </Fragment>
            );
          })}
      </section>
      <span className="more">
        <a href="/discover/playlist/" className="s-fc3">
          更多
        </a>
        <i className="cor">&nbsp;</i>
      </span>
    </WrapCon>
  );
};

NRcmdTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

NRcmdTitle.defaultProps = {
  title: "热门推荐",
};
export default memo(NRcmdTitle);
