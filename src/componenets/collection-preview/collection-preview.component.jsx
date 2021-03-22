import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreviw = ({ name, items, limit }) => {
  return (
    <article className="collection-preview">
      <h2>{name}</h2>
      <ul className="preview">
        {items
          .filter((_, index) => index < limit)
          .map(({ id, ...otherThings }) => (
            <CollectionItem key={id} {...otherThings} />
          ))}
      </ul>
    </article>
  );
};

export default CollectionPreviw;
