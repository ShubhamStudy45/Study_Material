//Counter class component

class Counter extends React.Component {
  //We want to maintain the count so we need the state
  constructor(props) {
    //if we want to use the state inside the menthod then we need to bind the menthods
    //inside the constructor

    super(props)
    this.state = {
      count: 0,
    }
    //binding methods
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onIncrement() {
    //if we want to use *this* then we need to bind the method inside the contructor
    console.log("counter increment by 1")
    console.log(`Counter : ${this.state.count}`)

    //update the state
    this.setState((prevState) => {
      //   console.log("prevState : ", prevState)
      //   console.log("PrevState.count : ", prevState.count)
      return {
        count: prevState.count + 1,
      }
    })
  }
  onDecrement() {
    console.log("counter decrement by 1")
    console.log(`Counter : ${this.state.count}`)

    //decrement the state by 1
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }
  onReset() {
    console.log("counter set to 0")
    console.log(`Counter : ${this.state.count}`)
    this.setState(() => {
      return {
        count: 0,
      }
    })
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h4>Counter : {this.state.count}</h4>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}
ReactDOM.render(
  <Counter title="Counter Application" />,
  document.getElementById("app")
)

/*
class CounterApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    //binding
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onIncrement() {
    console.log("increment by 1")

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }
  onDecrement() {
    console.log("decrement by 1")

    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      }
    })
  }

  onReset() {
    console.log("Reset")

    this.setState(() => {
      return {
        count: 0,
      }
    })
  }
  render() {
    return (
      <div>
        <h5>Counter App</h5>
        {console.log(`counter :${this.state.count}`)}
        <p>Counter : {this.state.count}</p>
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}
ReactDOM.render(<CounterApp />, document.getElementById("app"))
*/
