import React, { Component } from "react";
class ShoppingCart extends Component {
  state = {
    discount_code: "",
  };

  refreshShoppingCart = (props) => {
    const { items } = props.cartItems;

    const ret = items.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
          <td>{item.title}</td>
          <td>${item.price}.00</td>
          <td>{item.qty}</td>
          <td>${item.total}.00</td>
        </tr>
      );
    });

    return ret;
  };

  refreshSum = (props) => {
    const { sum } = props.cartItems;

    return (
      <React.Fragment>
        <tr>
          <td colSpan="4">Sub Total</td>
          <td className="text-right">${sum.subTotal}</td>
        </tr>
        <tr>
          <td colSpan="2">Coupon</td>
          <td colSpan="3">
            <input
              placeholder={sum.code}
              className="form-control"
              type="textbox"
              onChange={(event) => props.onDiscountAdd(event.target.value)}
            ></input>
          </td>
        </tr>
        <tr>
          <td colSpan="4">Discount</td>
          <td className="text-right">${sum.discount}</td>
        </tr>
        <tr>
          <td colSpan="4">Total</td>
          <td className="text-right">${sum.total}</td>
        </tr>
      </React.Fragment>
    );

    //return ret;
  };

  render() {
    if (
      this.props.cartItems === undefined ||
      this.props.cartItems.items === undefined ||
      this.props.cartItems.items.length < 1
    ) {
      return (
        <h3 className="text-center">
          Your Cart Is Empty
          <br />
          <i className="fa fa-shopping-cart"></i>
        </h3>
      );
    }

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.refreshShoppingCart(this.props)}
            {this.refreshSum(this.props)}
          </tbody>
        </table>
        <div className="row">
          <button type="button" className="col-12 btn btn-danger mt-0">
            <i className="fa fa-shopping-cart"></i> Proceed To Checkout
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
