import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <li style={{ backgroundImage: `url(${imageUrl})` }} className="menu-item">
      <div className="frame">
        <div className="cta">
          <h3>{title}</h3>
          <span>جزئیات بیشتر</span>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
