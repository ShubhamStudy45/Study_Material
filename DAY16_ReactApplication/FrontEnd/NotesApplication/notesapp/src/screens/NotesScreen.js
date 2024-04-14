import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Header from "../components/Header"
import { fetNote, deleteNote } from "../actions/NoteAction"
const NotesScreen = (props) => {
  //store
  const notes = useSelector((state) => state.notes)
  const NotesDelete = useSelector((state) => state.deletenotes)

  console.log("NotesDelete : ", NotesDelete.response)
  useEffect(() => {
    dispatch(fetNote())
    // navigate("/notes")
  }, [NotesDelete.response, NotesDelete.error, NotesDelete.loading])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, response, error } = notes
  useEffect(() => {
    dispatch(fetNote())
  }, [])

  const onDelete = (note) => {
    console.log(note)
    dispatch(deleteNote(note))
  }

  const onEdit = (note) => {
    console.log(note)
    sessionStorage.setItem("note_id", note.id)
    navigate("/edit-notes")
  }
  return (
    <div>
      <div>
        <Header title="Notes" />
        <div>
          <Link to="/add-notes">
            <button className="btn btn-primary float-end">Add Note</button>
          </Link>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Title</th>
                <th>Content</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.data.length > 0 &&
                response.data.map((note) => {
                  return (
                    <tr>
                      <td>{note.id}</td>
                      <td>{note.title}</td>
                      <td>{note.contents}</td>
                      <td>
                        <button
                          onClick={() => {
                            onEdit(note)
                          }}
                          className="notesbtn btn btn-warning"
                        >
                          edit
                        </button>
                        <button
                          onClick={() => {
                            onDelete(note)
                          }}
                          className="notesbtn btn btn-danger"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NotesScreen

//2:14:48
