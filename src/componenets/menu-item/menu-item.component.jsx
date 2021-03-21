import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <li className="menu-item" onClick={() => history.push(match.url + linkUrl)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background"
      ></div>
      <div className="frame">
        <div className="cta">
          <h3>{title}</h3>
          <span>جزئیات بیشتر</span>
        </div>
      </div>
    </li>
  );
};

export default withRouter(MenuItem);
