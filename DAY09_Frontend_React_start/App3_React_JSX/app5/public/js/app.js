"use strict";

var Persons = [{
  name: "person1",
  email: "Person1@gmail.com",
  address: "Amaravati",
  Phone: "+913848484"
}, {
  name: "person2",
  email: "Person2@gmail.com",
  address: "Akola",
  Phone: "+913848484"
}, {
  name: "person3",
  email: "Person3@gmail.com",
  address: "Mumbai",
  Phone: "+913848484"
}, {
  name: "person4",
  email: "Person4@gmail.com",
  address: "Pune",
  Phone: "+913848484"
}, {
  name: "person5",
  email: "Person5@gmail.com",
  address: "delhi",
  Phone: "+913848484"
}, {
  name: "person6",
  email: "Person6@gmail.com",
  address: "chennai",
  Phone: "+913848484"
}];
var template = React.createElement(
  "div",
  null,
  Persons.map(function (person) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Name : "
        ),
        person.name
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "email : "
        ),
        person["email"]
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Address : "
        ),
        person["address"]
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "strong",
          null,
          "Phone : "
        ),
        person.Phone
      ),
      React.createElement("hr", null)
    );
  })
);

var root = document.getElementById("app");
ReactDOM.render(template, root);
