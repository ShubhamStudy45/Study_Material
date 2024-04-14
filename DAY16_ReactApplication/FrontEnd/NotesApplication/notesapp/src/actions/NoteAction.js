import axios from "axios"
import {
  NOTES_ADD_FAIL,
  NOTES_ADD_REQUEST,
  NOTES_ADD_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_EDIT_FAIL,
  NOTES_EDIT_REQUEST,
  NOTES_EDIT_SUCCESS,
  NOTES_FETCH_FAIL,
  NOTES_FETCH_REQUEST,
  NOTES_FETCH_SUCCESS,
} from "../constants/NotesConstants"
import { URL } from "../constants/UserConstants"

//Add notes
export const addNote = (notes = {}) => {
  return (dispatch) => {
    dispatch({
      type: NOTES_ADD_REQUEST,
    })

    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    }
    const url = URL + "/notes/add-notes"
    console.log(sessionStorage["token"])
    axios
      .post(url, notes, header)
      .then((response) => {
        dispatch({
          type: NOTES_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTES_ADD_FAIL,
          payload: error,
        })
      })
  }
}

//Fetch notes
export const fetNote = () => {
  return (dispatch) => {
    dispatch({
      type: NOTES_FETCH_REQUEST,
    })

    const url = URL + "/notes/get-notes"
    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    }

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: NOTES_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTES_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

//Delete note
export const deleteNote = (note = {}) => {
  return (dispatch) => {
    dispatch({
      type: NOTES_DELETE_REQUEST,
    })

    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    }
    const url = URL + "/notes/delete-note/" + note.id

    axios
      .delete(url, header)
      .then((response) => {
        dispatch({
          type: NOTES_DELETE_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTES_DELETE_FAIL,
          payload: error,
        })
      })
  }
}

//Edit note
export const editNote = (note = {}) => {
  return (dispatch) => {
    dispatch({
      type: NOTES_EDIT_REQUEST,
    })

    const header = {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage["token"],
      },
    }
    const url = URL + "/notes/edit-note/" + note.id

    axios
      .put(url, note, header)
      .then((response) => {
        console.log("action response : ", response)
        dispatch({
          type: NOTES_EDIT_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: NOTES_EDIT_FAIL,
          payload: error,
        })
      })
  }
}
