class NoteApp extends React.Component {
  constructor(props) {
    super(props)

    //Create a State for notes
    this.state = {
      notes: [{ id: 1, title: "note 1" }],
      count: 0,
    }
    //binding class method to use *this* inside the method
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onAdd(note) {
    console.log("note added..")
    console.log(note)

    if (note.length > 0) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: prevState.notes.length + 1,
              title: note,
            },
          ],
          count: 0,
        }
      })
    } else {
      this.setState(() => {
        return {
          count: 1,
        }
      })
    }
  }
  onDelete(itemToDelete) {
    console.log("notes deleted..")
    // console.log(itemToDelete)

    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id != itemToDelete.id),
      }
    })
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <AddNote
          onAddNote={this.onAddNote}
          onAdd={this.onAdd}
          count={this.state.count}
        />
        <NoteList notes={this.state.notes} onDelete={this.onDelete} />
      </div>
    )
  }
}

NoteApp.defaultProps = {
  title: "My App",
  subtitle: "This is my notes",
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

class AddNote extends React.Component {
  constructor(props) {
    super(props)

    //bind the method
    this.onAddNote = this.onAddNote.bind(this)
  }
  onAddNote(e) {
    console.log(e)
    e.preventDefault()
    const title = e.target.elements.noteTitle.value
    // console.log("State : ", this.props.notes)

    this.props.onAdd(title)
    e.target.elements.noteTitle.value = ""
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onAddNote}>
          <div className="add-todo">
            <div className="input-group">
              <input
                type="text"
                name="noteTitle"
                placeholder="Enter notes here..."
                className="form-control"
              />
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
            {this.props.count > 0 && (
              <p className="errorMSg">{this.props.errorMSg}</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

AddNote.defaultProps = {
  errorMSg: "Pls enter a note...!!",
}

class NoteList extends React.Component {
  constructor(props) {
    super(props)

    //binding class method
    this.onDeleteNote = this.onDeleteNote.bind(this)
  }
  onDeleteNote(NoteToDelete) {
    // console.log(NoteToDelete)
    this.props.onDelete(NoteToDelete)
  }
  render() {
    return (
      <div>
        <div>
          {this.props.notes.length > 0 && (
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
                          this.onDeleteNote(note)
                        }}
                        className="btn btn-danger button-complete"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }
}
ReactDOM.render(<NoteApp />, document.getElementById("app"))
