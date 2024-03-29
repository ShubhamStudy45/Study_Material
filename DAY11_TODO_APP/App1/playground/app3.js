let items = [
  //   { id: 1, title: "note 1", status: "Open" },
  //   { id: 2, title: "note 2", status: "Open" },
  //   { id: 3, title: "note 3", status: "Open" },
  //   { id: 4, title: "note 4", status: "Open" },
]

const onSubmitData = (e) => {
  e.preventDefault()
  console.log(e)
  const title = e.target.elements.TodoTitle.value
  console.log(title)

  items.push({
    id: items.length + 1,
    title: title,
    status: "open",
  })
  render()
}
const onCompleteNote = (ItemToDelete) => {
  //1st way to delete the note
  /*
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (item.id == ItemToDelete.id) {
      items.splice(index, 1)
      break
    }
  }*/

  items = items.filter((item) => item.id != ItemToDelete.id)
  render()
}
const render = () => {
  const template = (
    <div>
      {/* Title section */}
      <div className="title">
        <h3>ToDo App</h3>
        <p>What do you want to do today ?</p>
      </div>
      {/* Add To do Note section */}
      <div className="add-todo">
        <form onSubmit={onSubmitData}>
          <div className="input-group mb-3">
            <textarea
              row="3"
              name="TodoTitle"
              placeholder="Enter to do items here..."
              className="form-control"
            ></textarea>
            <button className="btn btn-success">Add</button>
          </div>
        </form>
      </div>
      {/* To do List section */}
      {items.length > 0 && (
        <div>
          <div className="Todo-List">
            {items.map((item) => {
              return (
                <div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      value={item.title}
                      class="form-control"
                      readOnly
                    />
                    <button
                      onClick={() => {
                        onCompleteNote(item)
                      }}
                      className="btn btn-danger"
                      type="submit"
                    >
                      complete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )

  ReactDOM.render(template, document.getElementById("app"))
}

render()
//1:01:15
