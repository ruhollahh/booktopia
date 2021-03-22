import React from "react";
import CollectionPreview from "../../componenets/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop-page.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SHOP_DATA,
    };
  }
  render() {
    return this.state.SHOP_DATA.map(({ id, ...otherThings }) => (
      <CollectionPreview key={id} limit={4} {...otherThings} />
    ));
  }
}

export default ShopPage;
