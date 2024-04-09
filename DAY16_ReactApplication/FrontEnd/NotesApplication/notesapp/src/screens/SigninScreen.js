import Header from "../components/Header"
import { Link } from "react-router-dom"
const SigninScreen = () => {
  return (
    <div>
      <Header title="Signin" />
      <div>
        <div>
          <div className="mb-3">
            <label for="" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Example@123"
            />
          </div>
          <div>
            <button className="btn btn-success">Sigin</button>
            <div className="float-end">
              New user? <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigninScreen
