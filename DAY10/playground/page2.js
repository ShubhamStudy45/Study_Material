const person = {
  name: "person1",
  age: 23,
  addrss: "Amravati",
  phone: "+99239994",
}

const template = (
  <div>
    <h2>Page2</h2>
    <div>
      <strong>Name : </strong>
      {person.name}
    </div>
    <div>
      <strong>Age : </strong>
      {person["age"]}
    </div>
    <div>
      <strong>Address : </strong>
      {person["addrs"]}
    </div>
    <div>
      <strong>phone : </strong>
      {person.phone}
    </div>
  </div>
)
const root = document.getElementById("app")

ReactDOM.render(template, root)
