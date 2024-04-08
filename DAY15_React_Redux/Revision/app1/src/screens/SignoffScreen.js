import { Link } from "react-router-dom"
import Header from "../components/Header"
const SignOffScreen = () => {
  return (
    <div>
      <Header title="Signup" />
      <div>
        <div className="signinform">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label>FirstName</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="">LastName</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="text" className="form-control" />
                </div>
                <Link to="/signin" className="btn btn-warning">
                  Sigin
                </Link>
                <button className="btn btn-success float-end">Signup</button>
              </form>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignOffScreen
