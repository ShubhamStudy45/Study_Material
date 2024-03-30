class TodoApp extends React.Component {
  //class constructor
  constructor(props) {
    super(props)

    this.state = {
      notes: [
        // { id: 1, title: "note 1" },
        // { id: 2, title: "note 2" },
        // { id: 3, title: "note 3" },
      ],
      count: 0,
    }

    //binding class method to use *this*
    this.onAddNote = this.onAddNote.bind(this)
    this.onCompleteNote = this.onCompleteNote.bind(this)
  }

  //Class methods
  onAddNote(e) {
    console.log("inside in addnote")
    console.log(e)
    e.preventDefault()

    const title = e.target.elements.addNoteTitle.value
    console.log(title)

    if (title.length > 0) {
      this.setState((prevState) => {
        //   console.log(...prevState.notes)
        return {
          notes: [
            ...prevState.notes,
            {
              id: prevState.notes.length + 1,
              title: title,
            },
          ],
          count: 0,
        }
      })
      e.target.elements.addNoteTitle.value = ""
      console.log("count", this.state.count)
    } else {
      //   alert("Pls Enter a note..!!")
      this.setState(() => {
        return {
          count: 1,
        }
      })
    }
  }

  onCompleteNote(itemToDelete) {
    console.log("item to delete : ", itemToDelete)
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id != itemToDelete.id),
      }
    })
  }

  //Override the render method
  render() {
    return (
      <div>
        <Header
          title="My Todo Application"
          subtitle="What do you want to do today?"
        />
        <AddTodoNote
          onAddNote={this.onAddNote}
          errorMsg="Pls Enter a Note..!!"
          count={this.state.count}
        />
        <TodoList
          notes={this.state.notes}
          onCompleteNote={this.onCompleteNote}
        />
        <Footer footer="Copyright@ by Shubham" />
      </div>
    )
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.notes.length > 0 && (
            <div>
              <div>
                {this.props.notes.map((note) => {
                  return (
                    <div className="Todo-List">
                      <div className="input-group">
                        <input
                          type="text"
                          value={note.title}
                          className="form-control"
                          readOnly
                        />
                        <button
                          onClick={() => {
                            this.props.onCompleteNote(note)
                          }}
                          className="btn btn-danger"
                        >
                          Complete
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
class AddTodoNote extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddNote}>
          <div className="add-todo">
            <div className="input-group mb-3">
              <textarea
                placeholder="Enter note here..."
                name="addNoteTitle"
                className="form-control"
              ></textarea>
              <button className="btn btn-success" type="submit">
                Add
              </button>
            </div>
            {this.props.count == 1 && (
              <p className="ErrorNote">{this.props.errorMsg}</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.footer}</p>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"))
