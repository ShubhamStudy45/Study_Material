"use strict";

console.log("inside in page7");
var products = [{ id: 1, description: "description 1", price: 100 }, { id: 2, title: "product 2", description: "description 2" }, { id: 3, title: "product 3", description: "description 3", price: 300 }, { id: 4, description: "description 4", price: 400 }, { id: 5, title: "product 5", price: 500 }, { id: 6, title: "product 6", description: "description 6", price: 600 }, { id: 7, title: "product 7", price: 400 }];

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    "Page7"
  ),
  products.map(function (product) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Id : "
        ),
        product.id
      ),
      product.title ? React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Title : "
        ),
        product.title,
        " "
      ) : React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          " ",
          "--NA--",
          " "
        )
      ),
      product.description && React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Description : "
        ),
        product.description
      ),
      product.price && React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Price : "
        ),
        product.price
      ),
      React.createElement("hr", null)
    );
  })
);

var root = document.getElementById("app");

ReactDOM.render(template, root);
