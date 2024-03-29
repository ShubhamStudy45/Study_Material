const onEventHandler = () => {
  alert("button clicked..")
}
let count1 = 0
let count2 = 0
const onIncrement = () => {
  count1 += 1
  console.log("increment by : ", count1)
  render()
}
const onDecrement = () => {
  count1 -= 1
  console.log("increment by : ", count1)
  render()
}
const onIncrement2 = () => {
  count2 += 1
  console.log("increment by : ", count2)
  render()
}
const onDecrement2 = () => {
  count2 -= 1
  console.log("increment by : ", count2)
  render()
}
const render = () => {
  const template = (
    <div>
      <h3>App2</h3>
      <div>Counter1 :{count1} </div>
      <div>Counter2 :{count2} </div>
      <div>
        <button onClick={onIncrement}>Counter1 +1</button>
        <button onClick={onDecrement}>Counter1 -1</button>
      </div>
      <div>
        <button onClick={onIncrement2}>Counter2 +1</button>
        <button onClick={onDecrement2}>Counter2 -1</button>
      </div>
    </div>
  )
  ReactDOM.render(template, document.getElementById("app"))
}
render()
