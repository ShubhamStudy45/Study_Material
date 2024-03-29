const person = {
  name: "person1",
  age: 23,
  address: "Amaravati",
}

const template = (
  <div>
    <h2>Page5</h2>
    <h4>Conditional rendering</h4>
    <div>
      <strong>Name : </strong>
      {person.name}
    </div>
    <div>
      <strong>Age : </strong>
      {person["age"]}
    </div>
    {/* Conditional Compilation or */}
    {person.email && (
      <div>
        <strong>Email :</strong>
        {person.email}
      </div>
    )}
    {person.address && (
      <div>
        <strong>Address : </strong>
        {person.address}
      </div>
    )}
  </div>
)
const root = document.getElementById("app")
ReactDOM.render(template, root)
