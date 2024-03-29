const person = {}
const onSubmitData = (e) => {
  e.preventDefault()

  //   console.log(e)
  const personName = e.target.elements.personName.value
  const age = e.target.elements.age.value
  const email = e.target.elements.email.value
  const address = e.target.elements.address.value

  person.firstname = personName
  person.age = age
  person.email = email
  person.address = address

  e.target.elements.personName.value = ""
  e.target.elements.email.value = ""
  e.target.elements.age.value = ""
  e.target.elements.address.value = ""
  render()
}

const render = () => {
  const template = (
    <div>
      <h4>App4</h4>
      <div>
        <form onSubmit={onSubmitData}>
          <div>
            name : <input type="text" name="personName" />
          </div>
          <div>
            age : <input type="text" name="age" />
          </div>
          <div>
            email : <input type="text" name="email" />
          </div>
          <div>
            address : <input type="text" name="address" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <hr />
        {person.firstname && (
          <div>
            <h4>Person Detail</h4>
            <div>Name : {person.firstname}</div>
            <div>Age : {person.age}</div>
            <div>email : {person.email}</div>
            <div>address : {person.address}</div>
          </div>
        )}
      </div>
    </div>
  )

  ReactDOM.render(template, document.getElementById("app"))
}

render()
