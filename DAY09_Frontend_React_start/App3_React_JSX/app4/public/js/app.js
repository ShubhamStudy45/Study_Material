"use strict";

console.log('welcome to ecommerce application');

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Person"
    ),
    React.createElement(
        "h3",
        null,
        "Name : shubham"
    ),
    React.createElement(
        "h3",
        null,
        "lastname : sable"
    ),
    React.createElement(
        "h3",
        null,
        "email : sable@gmail.com"
    ),
    React.createElement(
        "h3",
        null,
        "address : amravati"
    )
);

var root = document.getElementById("app");

ReactDOM.render(template, root);
