const Persons = [
  {
    name: "person1",
    email: "Person1@gmail.com",
    address: "Amaravati",
    Phone: "+913848484",
  },
  {
    name: "person2",
    email: "Person2@gmail.com",
    address: "Akola",
    Phone: "+913848484",
  },
  {
    name: "person3",
    email: "Person3@gmail.com",
    address: "Mumbai",
    Phone: "+913848484",
  },
  {
    name: "person4",
    email: "Person4@gmail.com",
    address: "Pune",
    Phone: "+913848484",
  },
  {
    name: "person5",
    email: "Person5@gmail.com",
    address: "delhi",
    Phone: "+913848484",
  },
  {
    name: "person6",
    email: "Person6@gmail.com",
    address: "chennai",
    Phone: "+913848484",
  },
]
const template = (
  <div>
    {Persons.map((person) => {
      return (
        <div>
          <div>
            <strong>Name : </strong>
            {person.name}
          </div>
          <div>
            <strong>email : </strong>
            {person["email"]}
          </div>
          <div>
            <strong>Address : </strong>
            {person["address"]}
          </div>
          <div>
            <strong>Phone : </strong>
            {person.Phone}
          </div>
          <hr></hr>
        </div>
      )
    })}
  </div>
)

const root = document.getElementById("app")
ReactDOM.render(template, root)
