import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Books from "./components/Books";
import { getCategories } from "./services/CategoriesService";
import { getBooks } from "./services/BooksService";
import ShoppingCart from "./components/ShoppingCart";
import {addToCart, getCart} from "./services/ShoppingCartService";

class App extends Component {
  state = {
    categories: {},
    selectedCategory: 1,
    books: {},
    cart: [{ id: 1 }],
  };

  componentDidMount() {
    this.fetchCategories();
    this.fetchBooks(this.state.selectedCategory);
    this.getCart();
  }

  //API call to fetch categories
  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories: categories.data });
  }

  //API call to fetch books under the category
  async fetchBooks(id) {
    const books = await getBooks(id);
    this.setState({ books: books.data });
  }

  //API call - Add a book to the cart
  async addToCart(id) {
    const c = await addToCart(id);
    this.setState({cart : c.data});
  }

  //API call - Get Cart Content
  async getCart() {
    const c = await getCart();
    this.setState({cart : c.data});
  }

  //Handle method when user click on a category from left menu
  handleCategoryClick = (id) => {
    this.setState({ selectedCategory: id });
    this.fetchBooks(id);
  };

  //Handle method when user click on add to cart button
  handleBookAddToCart = (id) => {
    this.addToCart(id);
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-2">
              <Categories
                categories={this.state.categories}
                onClick={this.handleCategoryClick}
                selected={this.state.selectedCategory}
              />
            </div>
            <div className="col-12 col-md-7">
              <Books
                bookList={this.state.books}
                onClick={this.handleBookAddToCart}
              />
            </div>
            <div className="col-12 col-md-3">
              <ShoppingCart cartItems={this.state.cart} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
