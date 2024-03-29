//Event Handling
console.log("inside App1")

const eventHandle = () => {
  alert("button clicked..")
}
const template = (
  <div>
    <h2>App1</h2>
    <button onClick={eventHandle}>Click Here</button>
  </div>
)
const root = document.getElementById("app")

ReactDOM.render(template, root)
