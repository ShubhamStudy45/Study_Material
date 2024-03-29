const Persons = ["person1", "person2", "person3", "person4", "person5"]
const template = (
  <div>
    <h2>Page3</h2>
    <div>
      <p>person1</p>
      <p>person2</p>
      <p>person3</p>
      <p>person4</p>
    </div>
    <hr />
    {Persons.map((per) => {
      return (
        <div>
          <p>{per}</p>
        </div>
      )
    })}
  </div>
)
const root = document.getElementById("app")
ReactDOM.render(template, root)
