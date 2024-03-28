const personName = "Person1"
const personAge = 40
const personAddrss = "Amaravati"
const email = "sable@gamil.com"
const template = (
  <div>
    <h3>Person Details</h3>
    <div>
      <strong>Name : </strong>
      {personName} {/* To get the Person detail dynamically */}
    </div>
    <div>
      <strong>Age : </strong>
      {personAge}
    </div>
    <div>
      <strong>Address : </strong>
      {personAddrss}
    </div>
    <div>
      <strong>Email : </strong>
      {email}
    </div>
  </div>
)

const root = document.getElementById("app")

ReactDOM.render(template, root)
