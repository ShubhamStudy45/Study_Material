import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import { Link } from "react-router-dom"

import { signup } from "../actions/UserAction"

const SignupScreen = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userSignup = useSelector((state) => state.userSignup)
  const { loading, response, error } = userSignup

  const navigate = useNavigate()

  //useEffect is the hook which will get if any [loading, response, error] values been changed
  useEffect(() => {
    if (response && response.status === "success") {
      // document.location.href = "/signin"
      // window.location.reload("/signin")
      navigate("/signin")
    } else if (error && error.status === "error") {
      alert("error while making API call")
    }
  }, [loading, response, error])

  // console.log("loadingRequest : ", userSignup)
  const dispatch = useDispatch()
  const onSignup = () => {
    // console.log("firstName : ", firstName)
    // console.log("LastName : ", lastName)
    // console.log("Email : ", Email)
    // console.log("Password : ", Password)

    dispatch(signup(firstName, lastName, Email, password))
  }
  return (
    <div>
      <Header title="Registration" />
      <div>
        <div>
          <div className="mb-3">
            <label for="" className="form-label">
              FirstName
            </label>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder="Enter firstName here.."
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">
              LastName
            </label>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder="Enter LastName here.."
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
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
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              type="text"
              className="form-control"
              placeholder="Example@123"
            />
          </div>
          <div>
            <button onClick={onSignup} className="btn btn-success">
              Signup
            </button>
            <div className="float-end">
              Existing user? <Link to="/signin">Signin</Link>
            </div>
          </div>
          {userSignup.loading && <p>registering..</p>}
        </div>
      </div>
    </div>
  )
}

export default SignupScreen

//1:53:37
