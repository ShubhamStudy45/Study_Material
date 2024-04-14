import {
  NOTES_ADD_FAIL,
  NOTES_ADD_REQUEST,
  NOTES_ADD_RESET,
  NOTES_ADD_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_RESET,
  NOTES_DELETE_SUCCESS,
  NOTES_EDIT_FAIL,
  NOTES_EDIT_REQUEST,
  NOTES_EDIT_RESET,
  NOTES_EDIT_SUCCESS,
  NOTES_FETCH_FAIL,
  NOTES_FETCH_REQUEST,
  NOTES_FETCH_RESET,
  NOTES_FETCH_SUCCESS,
} from "../constants/NotesConstants"

export const addNoteReducer = (state = [], action) => {
  switch (action.type) {
    case NOTES_ADD_REQUEST:
      return {
        loading: true,
      }
    case NOTES_ADD_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_ADD_FAIL:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_ADD_RESET:
      return {}

    default:
      return state
  }
}

//fetch notes reducer
export const fetchNoteReducer = (state = [], action) => {
  switch (action.type) {
    case NOTES_FETCH_REQUEST:
      return {
        loading: true,
      }
    case NOTES_FETCH_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_FETCH_FAIL:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_FETCH_RESET:
      return {}

    default:
      return state
  }
}

//Delete note reducer
export const deleteNoteReducer = (state = [], action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return {
        loading: true,
      }
    case NOTES_DELETE_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case NOTES_DELETE_RESET:
      return {}
    default:
      return state
  }
}
//Edit Note Reducer
export const editNoteReducer = (state = [], action) => {
  switch (action.type) {
    case NOTES_EDIT_REQUEST:
      return {
        loading: true,
      }
    case NOTES_EDIT_SUCCESS:
      return {
        loading: false,
        response: action.payload,
      }
    case NOTES_EDIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case NOTES_EDIT_RESET:
      return {}
    default:
      return state
  }
}
