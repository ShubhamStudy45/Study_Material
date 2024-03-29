"use strict";

console.log("welcome to ecommerce application");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "div",
    null,
    React.createElement(
      "h4",
      null,
      "eCommerce Website"
    )
  )
);

var root = document.getElementById("app");

ReactDOM.render(template, root);
