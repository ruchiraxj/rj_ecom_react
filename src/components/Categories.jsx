import React, { Component } from "react";
class Categories extends Component {
  createCategoryList = (props) => {
    const categories = props.categories;
    
    if(categories.length === undefined){
        return '';
    }
    const list = categories.map(function (cata) {
        let cls = "nav-link";
        if(cata.id == props.selected){
            cls += " active";
        }
      return (
        <li className="nav-item" key={cata.id}>
          <h6 className={cls} onClick={() => props.onClick(cata.id)}>{cata.title}</h6>
        </li>
      );
    });
    return list;
  };
  render() {
    if(this.props.categories === undefined || this.props.categories.length < 1){
      return '';
    }

    return (
      <ul className="nav flex-column">
        <li className="nav-item">
          <h5 className="nav-link disabled">
            Categories
          </h5>
        </li>
        {this.createCategoryList(this.props)}
      </ul>
    );
  }
}

export default Categories;
