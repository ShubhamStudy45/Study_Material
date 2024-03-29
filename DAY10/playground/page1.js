console.log("welcome to ecommerce application")
const PersonName = "person1"
const age = 23
const addrss = "amravati"
const phone = "+9199393993"
const template = (
  <div>
    <h2>Page1</h2>
    <div>
      <strong>Name : </strong>
      {PersonName}
    </div>
    <div>
      <strong>Age : </strong>
      {age}
    </div>
    <div>
      <strong>Address : </strong>
      {addrss}
    </div>
    <div>
      <strong>Phone : </strong>
      {phone}
    </div>
  </div>
)

const root = document.getElementById("app")

ReactDOM.render(template, root)
