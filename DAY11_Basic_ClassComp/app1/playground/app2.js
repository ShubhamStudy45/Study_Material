//ToDo App using Class Component

class TodoApp extends React.Component {
  onAddNote(e) {
    // console.log("inside in addnote")
    console.log(e)
    e.preventDefault()

    const title = e.target.elements.addNote.value
    // console.log(title)
    this.setState((prevState) => {
      return {
        items: [
          ...prevState.items,
          {
            id: prevState.items.length + 1,
            title: title,
            status: "Open",
          },
        ],
      }
    })

    // console.log(this.state.items)
  }
  onCompleteNote(ItemToDelete) {
    console.log("inside in complete note")

    // console.log(ItemToDelete)
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id != ItemToDelete.id),
      }
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }

    //bind the method
    this.onAddNote = this.onAddNote.bind(this)
    this.onCompleteNote = this.onCompleteNote.bind(this)
  }
  render() {
    // let items = [
    //   { id: 1, title: "note1", status: "open" },
    //   { id: 2, title: "note2", status: "open" },
    //   { id: 3, title: "note3", status: "open" },
    //   { id: 4, title: "note4", status: "open" },
    //   { id: 5, title: "note5", status: "open" },
    // ]
    return (
      <div>
        {/* Props :  */}
        <Header title="ToDo App" subtitle="What do you want to do" />

        {/* <Header title="My App" subtitle="This is the test data" /> */}

        <TodoAddNote onAddNote={this.onAddNote} />
        <TodoList
          items={this.state.items}
          onCompleteNote={this.onCompleteNote}
        />
        <Footer footerText="copyright by@shubham" />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          {/* getting the props from Headers component */}
          <h3>{this.props.title}</h3>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.footerText}</p>
      </div>
    )
  }
}

class TodoAddNote extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddNote}>
          <div className="add-todo">
            <div className="input-group mb-3">
              <textarea
                name="addNote"
                placeholder="Enter a note here..."
                className="form-control"
                row="3"
              ></textarea>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.length > 0 && (
          <div>
            {this.props.items.map((item) => {
              return (
                <div>
                  <div className="Todo-List">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        value={item.title}
                        className="form-control"
                        readOnly
                      />
                      <button
                        onClick={() => {
                          this.props.onCompleteNote(item)
                        }}
                        className="btn btn-danger"
                        type="submit"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"))
