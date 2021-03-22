import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ title, imageUrl, price }) => {
  return (
    <li className="collection-item">
      <div className="item-body">
        <img src={imageUrl} alt={title} />
        <div className="overlay">
          <button>افزودن</button>
        </div>
      </div>
      <div className="item-footer">
        <h3>{title}</h3>
        <span>{price} تومان</span>
      </div>
    </li>
  );
};

export default CollectionItem;
