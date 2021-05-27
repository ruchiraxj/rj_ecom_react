import React, { Component } from "react";
class ShoppingCart extends Component {
  state = {};

  refreshShoppingCart = (props) => {
    const { items } = props.cartItems;

    console.log(items);
    const ret = items.map((item) => {
      return (
        <tr>
          <td>{item.title}</td>
          <td>${item.price}.00</td>
          <td>{item.qty}</td>
          <td>${item.total}.00</td>
        </tr>
      );
    });

    return ret;
  };

  render() {
    if (this.props.cartItems.items === undefined) {
      return "";
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>{this.refreshShoppingCart(this.props)}</tbody>
      </table>
    );
  }
}

export default ShoppingCart;
