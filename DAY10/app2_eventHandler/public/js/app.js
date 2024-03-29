"use strict";

var categories = [{ title: "product 1", description: "description 1" }];

var onSubmitData = function onSubmitData(e) {
  e.preventDefault();

  var title = e.target.elements.title.value;
  var description = e.target.elements.description.value;

  console.log(title);
  console.log(description);
  categories.push({
    title: title,
    description: description
  });
  //   console.log(categories)
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h3",
    null,
    "App6"
  ),
  React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { onSubmit: onSubmitData },
      React.createElement(
        "div",
        null,
        "Title : ",
        React.createElement("input", { type: "text", name: "title" })
      ),
      React.createElement(
        "div",
        null,
        "Description : ",
        React.createElement("input", { type: "text", name: "description" })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { type: "submit" },
          "Submit"
        )
      )
    ),
    React.createElement("hr", null),
    React.createElement(
      "div",
      null,
      categories.length > 0 && React.createElement(
        "div",
        null,
        categories.map(function (cat) {
          return React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              null,
              "Title : ",
              cat.title
            ),
            React.createElement(
              "div",
              null,
              "Description : ",
              cat.description
            ),
            React.createElement("hr", null)
          );
        })
      )
    )
  )
);

ReactDOM.render(template, document.getElementById("app"));
