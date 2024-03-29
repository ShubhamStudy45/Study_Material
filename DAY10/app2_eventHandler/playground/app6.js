const categories = [{ title: "product 1", description: "description 1" }]

const onSubmitData = (e) => {
  e.preventDefault()

  const title = e.target.elements.title.value
  const description = e.target.elements.description.value

  console.log(title)
  console.log(description)
  categories.push({
    title: title,
    description: description,
  })
  //   console.log(categories)
}

const template = (
  <div>
    <h3>App6</h3>
    <div>
      <form onSubmit={onSubmitData}>
        <div>
          Title : <input type="text" name="title" />
        </div>
        <div>
          Description : <input type="text" name="description" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr />
      <div>
        {/* {console.log("length : ", categories.length)} */}
        {categories.length > 0 && (
          <div>
            {categories.map((cat) => {
              return (
                <div>
                  <div>Title : {cat.title}</div>
                  <div>Description : {cat.description}</div>
                  <hr />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  </div>
)

ReactDOM.render(template, document.getElementById("app"))
