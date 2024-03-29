let count = 0

const onIncrement = () => {
  count += 1
  console.log("increment : ", count)
  render()
}
const onDecrement = () => {
  count -= 1
  console.log("increment : ", count)
  render()
}
const onDouble = () => {
  count *= 2
  console.log("increment : ", count)
  render()
}
const onTripple = () => {
  count *= 3
  console.log("increment : ", count)
  render()
}
const onReset = () => {
  count = 0
  console.log("increment : ", count)
  render()
}
const render = () => {
  const template = (
    <div>
      <h3>App3</h3>
      <div>
        <strong>Counter : </strong>
        {count}
      </div>
      <div className="IDB">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <div className="DTB">
        <button onClick={onDouble}>double</button>
        <button onClick={onTripple}>tripple</button>
      </div>
      <div className="ResetB">
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )

  const root = document.getElementById("app")

  ReactDOM.render(template, root)
}

render()
