import Header from "../components/Header"
import { signin } from "../actions/UserAction"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
const SigninScreen = () => {
  const userSignin = useSelector((state) => state.userSignin)
  // console.log("userSignin : ", userSignin)
  const { loading, response, error } = userSignin
  useEffect(() => {
    if (response && response.status === "success") {
      sessionStorage.setItem("token", response.data.token)
      navigate("/notes")
    } else if (response && response.status === "error") {
      alert("error while making api call")
    }
  }, [loading, response, error])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSignin = () => {
    const user = {
      email: email,
      password: password,
    }

    dispatch(signin(user))
  }
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
            <button onClick={onSignin} className="btn btn-success">
              Sigin
            </button>
            <div className="float-end">
              New user?
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//sableshubham51@gmail.com
export default SigninScreen
