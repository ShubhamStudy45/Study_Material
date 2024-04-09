import { Link } from "react-router-dom"
import Header from "../components/Header"
const NotesScreen = (props) => {
  const notes = [
    { id: 1, title: "title 1", contents: "contents 1" },
    { id: 2, title: "title 2", contents: "contents 2" },
    { id: 3, title: "title 3", contents: "contents 3" },
    { id: 4, title: "title 4", contents: "contents 4" },
  ]

  return (
    <div>
      <Header title="Notes" />
      <Link to="/add-notes">
        <button className="btn btn-primary float-end">Add Note</button>
      </Link>
      <div className="tablenotes">
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          {notes.map((note) => {
            return (
              <div>
                <tbody>
                  <th>
                    <tr>
                      <td>{note.id}</td>
                    </tr>
                  </th>
                </tbody>
              </div>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default NotesScreen
