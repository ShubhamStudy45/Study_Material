"use strict";

var items = [
  //   { id: 1, title: "note 1", status: "Open" },
  //   { id: 2, title: "note 2", status: "Open" },
  //   { id: 3, title: "note 3", status: "Open" },
  //   { id: 4, title: "note 4", status: "Open" },
];

var onSubmitData = function onSubmitData(e) {
  e.preventDefault();
  console.log(e);
  var title = e.target.elements.TodoTitle.value;
  console.log(title);

  items.push({
    id: items.length + 1,
    title: title,
    status: "open"
  });
  render();
};
var onCompleteNote = function onCompleteNote(ItemToDelete) {
  //1st way to delete the note
  /*
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item.id == ItemToDelete.id) {
      items.splice(index, 1)
      break
    }
  }*/

  items = items.filter(function (item) {
    return item.id != ItemToDelete.id;
  });
  render();
};
var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h3",
        null,
        "ToDo App"
      ),
      React.createElement(
        "p",
        null,
        "What do you want to do today ?"
      )
    ),
    React.createElement(
      "div",
      { className: "add-todo" },
      React.createElement(
        "form",
        { onSubmit: onSubmitData },
        React.createElement(
          "div",
          { className: "input-group mb-3" },
          React.createElement("textarea", {
            row: "3",
            name: "TodoTitle",
            placeholder: "Enter to do items here...",
            className: "form-control"
          }),
          React.createElement(
            "button",
            { className: "btn btn-success" },
            "Add"
          )
        )
      )
    ),
    items.length > 0 && React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "Todo-List" },
        items.map(function (item) {
          return React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              { className: "input-group mb-3" },
              React.createElement("input", {
                type: "text",
                value: item.title,
                "class": "form-control",
                readOnly: true
              }),
              React.createElement(
                "button",
                {
                  onClick: function onClick() {
                    onCompleteNote(item);
                  },
                  className: "btn btn-danger",
                  type: "submit"
                },
                "complete"
              )
            )
          );
        })
      )
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
//1:01:15
