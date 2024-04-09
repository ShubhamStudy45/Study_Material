import { Link } from "react-router-dom"

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/notes">
            <a className="navbar-brand">Notes</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/notes">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link active">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/notes">
                  <a className="nav-link active">Notes</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navigation
