"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Functional component

var NoteApp = function (_React$Component) {
  _inherits(NoteApp, _React$Component);

  function NoteApp(props) {
    _classCallCheck(this, NoteApp);

    //Create a State for notes
    var _this = _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).call(this, props));

    _this.state = {
      notes: [{ id: 1, title: "note 1" }],
      count: 0
      //binding class method to use *this* inside the method
    };_this.onAdd = _this.onAdd.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    return _this;
  }

  _createClass(NoteApp, [{
    key: "onAdd",
    value: function onAdd(note) {
      console.log("note added..");
      console.log(note);

      if (note.length > 0) {
        this.setState(function (prevState) {
          return {
            notes: [].concat(_toConsumableArray(prevState.notes), [{
              id: prevState.notes.length + 1,
              title: note
            }]),
            count: 0
          };
        });
      } else {
        this.setState(function () {
          return {
            count: 1
          };
        });
      }
    }
  }, {
    key: "onDelete",
    value: function onDelete(itemToDelete) {
      console.log("notes deleted..");
      // console.log(itemToDelete)

      this.setState(function (prevState) {
        return {
          notes: prevState.notes.filter(function (note) {
            return note.id != itemToDelete.id;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.props.title, subtitle: this.props.subtitle }),
        React.createElement(AddNote, {
          onAddNote: this.onAddNote,
          onAdd: this.onAdd,
          count: this.state.count
        }),
        React.createElement(NoteList, { notes: this.state.notes, onDelete: this.onDelete }),
        React.createElement(Footer, null)
      );
    }
  }]);

  return NoteApp;
}(React.Component);

NoteApp.defaultProps = {
  title: "My App"
  //Class Component
  /*
  class Header extends React.Component {
    render() {
      return (
        <div className="title">
          <h3>{this.props.title}</h3>
          <p>{this.props.subtitle}</p>
        </div>
      )
    }
  }*/
  //Functional compoment
};var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "title" },
    React.createElement(
      "h3",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.subtitle
    )
  );
};

var Footer = function Footer(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { className: "footer" },
      props.footermsg
    )
  );
};

Footer.defaultProps = {
  footermsg: "Copyright@ by ShubhamSable"
};

var AddNote = function (_React$Component2) {
  _inherits(AddNote, _React$Component2);

  function AddNote(props) {
    _classCallCheck(this, AddNote);

    //bind the method
    var _this2 = _possibleConstructorReturn(this, (AddNote.__proto__ || Object.getPrototypeOf(AddNote)).call(this, props));

    _this2.onAddNote = _this2.onAddNote.bind(_this2);
    return _this2;
  }

  _createClass(AddNote, [{
    key: "onAddNote",
    value: function onAddNote(e) {
      console.log(e);
      e.preventDefault();
      var title = e.target.elements.noteTitle.value;
      // console.log("State : ", this.props.notes)

      this.props.onAdd(title);
      e.target.elements.noteTitle.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.onAddNote },
          React.createElement(
            "div",
            { className: "add-todo" },
            React.createElement(
              "div",
              { className: "input-group" },
              React.createElement("input", {
                type: "text",
                name: "noteTitle",
                placeholder: "Enter notes here...",
                className: "form-control"
              }),
              React.createElement(
                "button",
                { type: "submit", className: "btn btn-success" },
                "Add"
              )
            ),
            this.props.count > 0 && React.createElement(
              "p",
              { className: "errorMSg" },
              this.props.errorMSg
            )
          )
        )
      );
    }
  }]);

  return AddNote;
}(React.Component);

AddNote.defaultProps = {
  errorMSg: "Pls enter a note...!!"
};
Header.defaultProps = {
  subtitle: "what do you want to do today?"

  //Class component
  /*
  class NoteList extends React.Component {
    constructor(props) {
      super(props)
  
      //binding class method
      this.onDeleteNote = this.onDeleteNote.bind(this)
    }
    onDeleteNote(NoteToDelete) {
      // console.log(NoteToDelete)
      this.props.onDelete(NoteToDelete)
    }
    render() {
      return (
        <div>
          <div>
            {this.props.notes.length > 0 && (
              <div>
                {this.props.notes.map((note) => {
                  return (
                    <div className="Todo-List">
                      <div className="input-group">
                        <input
                          type="text"
                          value={note.title}
                          className="form-control"
                          readOnly
                        />
                        <button
                          onClick={() => {
                            this.onDeleteNote(note)
                          }}
                          className="btn btn-danger button-complete"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )
    }
  }
  */

};var NoteList = function NoteList(props) {
  var onRemove = function onRemove(ItemsToDelete) {
    console.log("inside in onRemove /noteList");
    console.log(ItemsToDelete);
    props.onDelete(ItemsToDelete);
  };

  return React.createElement(
    "div",
    null,
    props.notes.length > 0 && React.createElement(
      "div",
      null,
      props.notes.map(function (note) {
        return React.createElement(
          "div",
          null,
          React.createElement(
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
                    onRemove(note);
                  },
                  className: "btn btn-danger button-complete"
                },
                "delete"
              )
            )
          )
        );
      })
    )
  );
};
ReactDOM.render(React.createElement(NoteApp, null), document.getElementById("app"));
