export const Header = (props) => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
    </div>
  )
}

Header.defaultProps = {
  title: "",
}
