import {
  URL,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/UserConstants"
import axios from "axios"

//Signup
export const signup = (firstName, lastName, email, password) => {
  console.log("password in signup action:", password)
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        "Content-type": "application/json",
      },
    }

    const url = URL + "/user/signup"

    const body = {
      firstName,
      lastName,
      email,
      password,
    }
    axios
      .post(url, body, header)
      .then((response) => {
        console.log("response : ", response)
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

//Signin
export const signin = (user = {}) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        "Content-type": "application/json",
      },
    }
    const url = URL + "/user/signin"

    axios
      .post(url, user, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          error: error,
        })
      })
  }
}

//logout
export const logout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("token")
    dispatch({
      type: USER_SIGNOUT,
    })
    document.location.href = "/signin"
  }
}
