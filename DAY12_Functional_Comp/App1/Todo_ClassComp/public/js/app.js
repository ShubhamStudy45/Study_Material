"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Class Life Cycle

var CounterComponent = function (_React$Component) {
  _inherits(CounterComponent, _React$Component);

  function CounterComponent(props) {
    _classCallCheck(this, CounterComponent);

    var _this = _possibleConstructorReturn(this, (CounterComponent.__proto__ || Object.getPrototypeOf(CounterComponent)).call(this, props));

    _this.state = {
      count: 0

      //bind the class method
    };_this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);

    console.log("inside constructor");
    return _this;
  }

  /*
  As a Classbased Component they are having some sopecial methods as below : 
    componentDidMount() -->Will get called at begining of lifecycle 
  ** we can persist the data from localstorage or Session Storage
    componentWillUnmount() ->this will get ready to load into UI
   
  componentDidUpdate(prevProps, prevState) --> When there is a change in state then it get called
     prevState (Can put any name): Will get the previous values of state
   prevProps (Can put any name): Will get the previous properties of the state 
  
  componentWillMount() --> This has been deprecated  
  */

  //Will get called at begining of lifecycle


  _createClass(CounterComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("inside the componentDidMount ");
      // let v = localStorage["counter"]
      // console.log(typeof v)

      this.setState({
        count: localStorage["counter"] ? parseInt(localStorage["counter"], 10) : 0
      });
    }

    //When there is a change in state then it get called

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log("inside in componentDidUpdate")
      // console.log("prevProps : ", prevProps)
      // console.log("prevState: ", prevState)

      //We can maintain the localstorage and session storage
      if (prevProps.count != this.state.count) {
        localStorage.setItem("counter", prevState.count);
      }
    }

    //This will get ready to load into UI

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("inside in componentWillUnmount");
    }

    // Class Methods

  }, {
    key: "onIncrement",
    value: function onIncrement() {
      console.log("increment by 1");
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "onDecrement",
    value: function onDecrement() {
      console.log("decrement by 1");
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h3",
            null,
            "Counter Application"
          ),
          React.createElement(
            "h5",
            null,
            "Counter : ",
            this.state.count
          )
        ),
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "button",
            { onClick: this.onIncrement, className: "btn btn-warning" },
            "+1"
          ),
          React.createElement(
            "button",
            { onClick: this.onDecrement, className: "btn btn-warning" },
            "-1"
          )
        )
      );
    }
  }]);

  return CounterComponent;
}(React.Component);

ReactDOM.render(React.createElement(CounterComponent, null), document.getElementById("app"));
