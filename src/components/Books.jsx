import React, { Component } from "react";
class Books extends Component {
  state = {};
  booklist = (data) => {
    const {bookList} = data;
    if (bookList.length === undefined) {
      return "";
    }

    const list = bookList.map(function (book) {
      return (
        <div className="col col-md-4 text-center p-3 d-flex d-flex flex-column" key={book.id}>
        <img src="https://via.placeholder.com/150x200" alt="book cover"></img>
        <h5>{book.title}</h5>
        <p className="m-0">by: {book.author}</p>
        <p className="m-0">isbn: {book.isbn}</p>
        <h6 className="mt-3">$ {book.price}.00</h6>
        <div className="row">
          <div className="col-12">
            <button type="button" onClick={() => data.onClick(book.id)} className="col-12 btn btn-primary btn-block align-self-end">
              <i className="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
      );
    });

    return list;
  };


  render() {
    return <div className="row">{this.booklist(this.props)}</div>;
  }
}

export default Books;
