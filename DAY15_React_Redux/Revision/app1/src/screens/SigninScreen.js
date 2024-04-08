import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Header from "../components/Header"
import { Signin, Signup } from "../actions/isLoggedInAction"

const SignInScreen = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatch = useDispatch()

  const onSignin = () => {
    const loading = true
    dispatch(Signin(loading))
    // console.log(isLoggedIn)
  }

  
  return (
    <div>
      <div>
        <Header title="SignIn" />
      </div>
      <div className="signinform">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="text" className="form-control" />
              </div>
              <Link to="/signup" className="btn btn-warning">
                Signup
              </Link>
              <button onClick={onSignin} className="btn btn-success float-end">
                Signin
              </button>
            </form>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  )
}

export default SignInScreen
