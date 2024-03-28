"use strict";

console.log('welcome to the ecommers application');

// const template = <p2>This is test data</p2>
var template = /*#__PURE__*/_jsx("p2", {
    children: "This is test data"
});

var root = document.getElementById("app");

ReactDOM.render(template, root);
