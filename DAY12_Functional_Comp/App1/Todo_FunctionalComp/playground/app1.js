//Basic program of Functional based component

//functional component
const Header = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
    </div>
  )
}

ReactDOM.render(<Header title="My Notes" />, document.getElementById("app"))
