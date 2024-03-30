//Counter Application
import React from "react"
import Header from "./Header"
export default class CounterApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    //bind the class method
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
    console.log("inside in constructor")
  }

  //class life cycle method
  /**
   * componentDidMount() -> it will get called once UI loaded into memory
   * componentDidUpdate() - > this will get called once there is change in state
   * componentWillUnmount() -> this will get called once UI is ready to load into memory ( after constructor it get called)
   */

  componentDidMount() {
    console.log("inside in componentDidMount()")
    this.setState({
      counter: localStorage["counter"]
        ? parseInt(localStorage["counter"], 10)
        : 0,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("inside in componentDidUpdate()")

    if (prevState.counter != this.state.counter) {
      localStorage.setItem("counter", this.state.counter)
    }
  }
  onIncrement() {
    console.log("increment by 1")
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  }
  onDecrement() {
    console.log("decrement by 1")
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      }
    })
  }
  onReset() {
    console.log("Reset to 0")
    this.setState({
      counter: 0,
    })
  }
  render() {
    return (
      <div>
        <Header />

        <div className="counter">
          <h5>Counter : {this.state.counter} </h5>
          <button onClick={this.onIncrement} className="btn btn-success">
            +1
          </button>
          <button onClick={this.onDecrement} className="btn btn-success">
            -1
          </button>
          <button onClick={this.onReset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
    )
  }
}

//Exporting class to other can access
// export default CounterApp
