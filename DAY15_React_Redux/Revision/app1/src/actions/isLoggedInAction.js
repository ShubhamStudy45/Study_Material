export const Signin = (loading) => {
  return {
    type: "signin",
    payload: loading,
  }
}
export const Signup = (loading) => {
  return {
    type: "signup",
    payload: loading,
  }
}
