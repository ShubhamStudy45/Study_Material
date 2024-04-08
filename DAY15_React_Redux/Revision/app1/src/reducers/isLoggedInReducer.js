const isLoggedInReducer = (state = false, action) => {
  console.log("state : ", state, " action : ", action.type)
  switch (action.type) {
    case "signin":
      return {
        state: action.payload,
      }
    case "signup":
      return false
    default:
      return state
  }
}

export default isLoggedInReducer
