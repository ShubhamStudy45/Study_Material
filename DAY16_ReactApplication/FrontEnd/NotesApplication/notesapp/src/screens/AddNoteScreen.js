import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { addNote } from "../actions/NoteAction"
const AddNoteScreen = () => {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addnotes = useSelector((state) => state.addnote)
  console.log(addnotes)
  const { loading, response, error } = addnotes
  useEffect(() => {
    if (response && response.data) {
      navigate("/notes")
    } else if (error) {
      alert("error while making api call")
    }
  }, [loading, response, error])
  const onAddnote = () => {
    const notes = {
      title,
      contents,
    }
    dispatch(addNote(notes))
  }
  return (
    <div>
      <Header title="Add Note" />
      <div>
        <div className="mb-3">
          <label for="" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="Enter title here.."
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Contents
          </label>
          <textarea
            onChange={(e) => {
              setContents(e.target.value)
            }}
            className="form-control"
            placeholder="Enter contents here.."
            rows="3"
          ></textarea>
        </div>
        <div>
          <Link to="/notes">
            <button className="btn btn-danger">Cancel</button>
          </Link>
          <button onClick={onAddnote} className="btn btn-success float-end">
            Add Note
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNoteScreen
