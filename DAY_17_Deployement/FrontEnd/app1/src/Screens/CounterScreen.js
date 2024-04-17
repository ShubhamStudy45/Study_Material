import React from "react"

export default class CounterScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      selectedFile: null,
      email: "test",
    }
    this.onIncrement = this.onIncrement.bind(this)
    this.onFileSeleted = this.onFileSeleted.bind(this)
    this.onUploadFile = this.onUploadFile.bind(this)
  }

  onIncrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  }

  onFileSeleted(event) {
    this.setState({
      selectedFile: event.target.files[0],
      email: "updatedinFileSelected",
    })
    console.log("current State : ", this.state)
  }
  onUploadFile() {
    // this.setState({
    //   email: "updated",
    // })
    console.log("fileupload : ", this.state)
  }
  render() {
    return (
      <div className="container">
        <h3>CounterScreen</h3>
        <h5>Counter : {this.state.counter}</h5>

        <button onClick={this.onIncrement}>increment</button>
        <button>decrement</button>
        <div>
          <label className="form-label">file upload</label>
          <input
            onChange={this.onFileSeleted}
            className="form-control"
            type="file"
          />
          <button onClick={this.onUploadFile}>upload</button>
        </div>
      </div>
    )
  }
}
