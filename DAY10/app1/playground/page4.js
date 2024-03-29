//Conditional rendering using ternary operator

const person = {
  name: "person1",
  age: 23,
}
const template = (
  <div>
    <h2>Page4</h2>
    <h4>Conditional Rendering</h4>
    <div>
      <strong>Name : </strong>
      {person.name}
    </div>
    <div>
      <strong>Age : </strong>
      {person.age}
    </div>
    <div>
      <strong>email : </strong>
      {/* Conditional rendering or conditional compilation using ternary operator*/}
      {person.email ? person.email : "--NA--"}
    </div>
    <div>
      <strong>Address : </strong>
      {/* Conditional rendering or conditional compilation using ternary operator*/}
      {person.address ? person.address : "--NA--"}
    </div>
  </div>
)

const root = document.getElementById("app")

ReactDOM.render(template, root)
