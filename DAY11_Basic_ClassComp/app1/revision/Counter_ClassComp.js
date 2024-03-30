//Revision of Counter Application using Class Component

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    //bind the methods
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
    console.log("Reset to 0")
    this.setState({
      count: 0,
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h5>Counter : {this.state.count}</h5>
        <div>
          <button onClick={this.onIncrement}>+1</button>
          <button onClick={this.onDecrement}>-1</button>
          <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter title="Counter Application" />,
  document.getElementById("app")
)
