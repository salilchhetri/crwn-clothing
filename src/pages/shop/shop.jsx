import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { SHOP_DATA } from "./shop-data";
import "./shop.scss";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        <h1>Shop</h1>
        {this.state.collections.map(({ id, ...collectionsProps }) => (
          <CollectionPreview key={id} {...collectionsProps} />
        ))}
      </div>
    );
  }
}
