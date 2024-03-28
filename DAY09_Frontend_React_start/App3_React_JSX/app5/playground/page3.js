const person = {
  name: "person1",
  email: "person@gmail.com",
  phone: +"937747747",
  address: "Amaravati",
}

const template = (
  <div>
    <div>
      <strong>Name : </strong>
      {person.name}
    </div>
    <div>
      <strong>Email : </strong>
      {person["email"]}
    </div>
    <div>
      <strong>Phone : </strong>
      {person.phone}
    </div>
    <div>
      <strong>Address : </strong>
      {person["address"]}
    </div>
  </div>
)

const root = document.getElementById("app")

ReactDOM.render(template, root)
