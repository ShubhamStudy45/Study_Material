import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/UserConstants"
import axios from "axios"
export const signup = (firstName, lastName, email, Password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        "Content-type": "application/json",
      },
    }

    const url = "http://localhost:4000/user/signup"

    const body = {
      firstName,
      lastName,
      email,
      Password,
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
