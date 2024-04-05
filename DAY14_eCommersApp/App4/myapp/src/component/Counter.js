import React from "react"
class CounterApp extends React.Component {
  constructor(props) {
    super(props)
    console.log("inside constructor")
  }
}
const MyApplication = () => {
  return (
    <div>
      <Header />
      <CounterApp />
    </div>
  )
}
export default MyApplication

const Header = (props) => {
  return (
    <div>
      <div>{props.title}</div>
    </div>
  )
}
Header.defaultProps = {
  title: "MyCounter",
  subtitle: "what do you want to do today?",
}
