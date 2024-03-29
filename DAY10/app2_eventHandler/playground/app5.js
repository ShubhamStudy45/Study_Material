const Category = {}
const onSubmitData = (e) => {
  e.preventDefault()
  const title = e.target.elements.title.value
  const description = e.target.elements.description.value

  console.log(title)
  console.log(description)
  Category.title = title
  Category.description = description
  render()
}

const render = () => {
  const template = (
    <div>
      <h3>App5</h3>
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
          {Category.title && (
            <div>
              <h4>Category</h4>
              <div>Title : {Category.title}</div>
              <div>Description : {Category.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
  ReactDOM.render(template, document.getElementById("app"))
}

render()
