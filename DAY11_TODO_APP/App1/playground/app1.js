//Todo Application
let items = [
  //   { id: 1, title: "book 1", status: "open" },
  //   { id: 2, title: "book 2", status: "open" },
  //   { id: 3, title: "book 3", status: "open" },
  //   { id: 4, title: "book 4", status: "open" },
]

const onSubmitItem = (e) => {
  e.preventDefault()
  console.log(e)
  const title = e.target.elements.title.value
  console.log(title)

  items.push({
    id: items.length + 1,
    title: title,
    status: "open",
  })
  e.target.elements.title.value = ""
  //   console.log(items)
  render()
}

const DeleteNote = (ItemToDelete) => {
  //One way to delete item
  /*
  for (let index = 0; index < items.length; index++) {
    const item = items[index]

    if (item.id == ItemToDelete.id) {
      items.splice(index, 1)
      break
    }
  }*/

  //2nd way to do
  items = items.filter((item) => item.id != ItemToDelete.id)
  render()
}

const render = () => {
  const template = (
    <div>
      {/* Todo Title section */}
      <div className="title">
        <h3>ToDo App</h3>
        <p>What do you want to do today ?</p>
      </div>
      {/* Add Todo Item section */}
      <div className="add-todo">
        <form onSubmit={onSubmitItem}>
          <div className="input-group mb-3">
            <textarea
              name="title"
              row="3"
              placeholder="Enter the to do item here..."
              className="form-control"
            ></textarea>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      {/* Toto List Section */}
      {items.length > 0 && (
        <div>
          {items.map((item) => {
            return (
              <div>
                {item.title && (
                  <div className="Todo-List">
                    <div className="input-group">
                      <input
                        type="text"
                        value={item.title}
                        class="form-control"
                        readOnly
                      />
                      <button
                        onClick={() => {
                          DeleteNote(item)
                        }}
                        className="btn btn-danger"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

  ReactDOM.render(template, document.getElementById("app"))
}

render()
