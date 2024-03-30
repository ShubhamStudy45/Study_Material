"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  //class constructor
  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.state = {
      notes: [
        // { id: 1, title: "note 1" },
        // { id: 2, title: "note 2" },
        // { id: 3, title: "note 3" },
      ],
      count: 0

      //binding class method to use *this*
    };_this.onAddNote = _this.onAddNote.bind(_this);
    _this.onCompleteNote = _this.onCompleteNote.bind(_this);
    return _this;
  }

  //Class methods


  _createClass(TodoApp, [{
    key: "onAddNote",
    value: function onAddNote(e) {
      console.log("inside in addnote");
      console.log(e);
      e.preventDefault();

      var title = e.target.elements.addNoteTitle.value;
      console.log(title);

      if (title.length > 0) {
        this.setState(function (prevState) {
          //   console.log(...prevState.notes)
          return {
            notes: [].concat(_toConsumableArray(prevState.notes), [{
              id: prevState.notes.length + 1,
              title: title
            }]),
            count: 0
          };
        });
        e.target.elements.addNoteTitle.value = "";
        console.log("count", this.state.count);
      } else {
        //   alert("Pls Enter a note..!!")
        this.setState(function () {
          return {
            count: 1
          };
        });
      }
    }
  }, {
    key: "onCompleteNote",
    value: function onCompleteNote(itemToDelete) {
      console.log("item to delete : ", itemToDelete);
      this.setState(function (prevState) {
        return {
          notes: prevState.notes.filter(function (note) {
            return note.id != itemToDelete.id;
          })
        };
      });
    }

    //Override the render method

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, {
          title: "My Todo Application",
          subtitle: "What do you want to do today?"
        }),
        React.createElement(AddTodoNote, {
          onAddNote: this.onAddNote,
          errorMsg: "Pls Enter a Note..!!",
          count: this.state.count
        }),
        React.createElement(TodoList, {
          notes: this.state.notes,
          onCompleteNote: this.onCompleteNote
        }),
        React.createElement(Footer, { footer: "Copyright@ by Shubham" })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoList = function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          this.props.notes.length > 0 && React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              null,
              this.props.notes.map(function (note) {
                return React.createElement(
                  "div",
                  { className: "Todo-List" },
                  React.createElement(
                    "div",
                    { className: "input-group" },
                    React.createElement("input", {
                      type: "text",
                      value: note.title,
                      className: "form-control",
                      readOnly: true
                    }),
                    React.createElement(
                      "button",
                      {
                        onClick: function onClick() {
                          _this3.props.onCompleteNote(note);
                        },
                        className: "btn btn-danger"
                      },
                      "Complete"
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return TodoList;
}(React.Component);

var AddTodoNote = function (_React$Component3) {
  _inherits(AddTodoNote, _React$Component3);

  function AddTodoNote() {
    _classCallCheck(this, AddTodoNote);

    return _possibleConstructorReturn(this, (AddTodoNote.__proto__ || Object.getPrototypeOf(AddTodoNote)).apply(this, arguments));
  }

  _createClass(AddTodoNote, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.props.onAddNote },
          React.createElement(
            "div",
            { className: "add-todo" },
            React.createElement(
              "div",
              { className: "input-group mb-3" },
              React.createElement("textarea", {
                placeholder: "Enter note here...",
                name: "addNoteTitle",
                className: "form-control"
              }),
              React.createElement(
                "button",
                { className: "btn btn-success", type: "submit" },
                "Add"
              )
            ),
            this.props.count == 1 && React.createElement(
              "p",
              { className: "ErrorNote" },
              this.props.errorMsg
            )
          )
        )
      );
    }
  }]);

  return AddTodoNote;
}(React.Component);

var Header = function (_React$Component4) {
  _inherits(Header, _React$Component4);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "h3",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Footer = function (_React$Component5) {
  _inherits(Footer, _React$Component5);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "footer" },
        React.createElement(
          "p",
          null,
          this.props.footer
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("app"));
