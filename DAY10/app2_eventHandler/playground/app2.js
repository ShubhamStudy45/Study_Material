let counter = 0
const onIncrement = () => {
  //   console.log("inside in onIncrement")
  counter += 1
  console.log("increment : ", counter)
  //render the UI
  render()
}

const onDecrement = () => {
  //   console.log("inside in onDecrement")
  counter -= 1
  console.log("decrement : ", counter)
  //render UI
  render()
}

const render = () => {
  const template = (
    <div>
      <h2>App2</h2>
      <div>
        <strong>Counter :{counter} </strong>
      </div>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  )

  const root = document.getElementById("app")

  ReactDOM.render(template, root)
}

render()
