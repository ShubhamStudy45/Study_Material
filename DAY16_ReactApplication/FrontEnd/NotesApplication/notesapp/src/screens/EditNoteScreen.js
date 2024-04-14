import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { editNote } from "../actions/NoteAction"
const EditNoteScreen = () => {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const editNoteStore = useSelector((state) => state.editNotes)
  console.log("editNoteStore :", editNoteStore)

  const { error, loading, response } = editNoteStore
  useEffect(() => {
    if (response && response.data) {
      navigate("/notes")
    } else if (error) {
      alert("error while making API call")
    }
  }, [error, loading, response])
  const onEditnote = () => {
    const noteid = parseInt(sessionStorage.getItem("note_id"), 10)
    const note = {
      id: noteid,
      title: title,
      contents: contents,
    }
    // console.log(note)
    dispatch(editNote(note))
  }
  return (
    <div>
      <Header title="Edit Note" />
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
          <button onClick={onEditnote} className="btn btn-success float-end">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditNoteScreen
