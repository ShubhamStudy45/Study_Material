//Class Life Cycle

class CounterComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    //bind the class method
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)

    console.log("inside constructor")
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
  componentDidMount() {
    console.log("inside the componentDidMount ")
    // let v = localStorage["counter"]
    // console.log(typeof v)

    this.setState({
      count: localStorage["counter"]
        ? parseInt(localStorage["counter"], 10)
        : 0,
    })
  }

  //When there is a change in state then it get called
  componentDidUpdate(prevProps, prevState) {
    // console.log("inside in componentDidUpdate")
    // console.log("prevProps : ", prevProps)
    // console.log("prevState: ", prevState)

    //We can maintain the localstorage and session storage
    if (prevProps.count != this.state.count) {
      localStorage.setItem("counter", prevState.count)
    }
  }

  //This will get ready to load into UI
  componentWillUnmount() {
    console.log("inside in componentWillUnmount")
  }

  // Class Methods
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

  render() {
    return (
      <div>
        <div className="title">
          <h3>Counter Application</h3>
          <h5>Counter : {this.state.count}</h5>
        </div>
        <div className="title">
          <button onClick={this.onIncrement} className="btn btn-warning">
            +1
          </button>
          <button onClick={this.onDecrement} className="btn btn-warning">
            -1
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<CounterComponent />, document.getElementById("app"))
