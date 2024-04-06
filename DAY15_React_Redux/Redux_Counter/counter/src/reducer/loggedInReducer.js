const loggedInReducer = (state = false, action) => {
  switch (action) {
    case "signed_in":
      return true
    case "signed_out":
      return false
    default:
      return false
  }
}

export default loggedInReducer
