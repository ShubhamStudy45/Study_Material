import { Link } from "react-router-dom"
import Header from "../components/Header"

const AddNoteScreen = () => {
  //   const onSubmitNote = (e) => {
  //     e.preventDefault()
  //     console.log(e)
  //   }

  const onAdd = (e) => {
    e.preventDefault()
    console.log("notes added")
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
            type="email"
            className="form-control"
            placeholder="Enter title here.."
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Contents
          </label>
          <textarea
            className="form-control"
            placeholder="Enter contents here.."
            rows="3"
          ></textarea>
        </div>
        <div>
          <Link to="/notes">
            <button className="btn btn-danger">Cancel</button>
          </Link>
          <button onClick={onAdd} className="btn btn-success float-end">
            Add Note
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddNoteScreen
