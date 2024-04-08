const Header = (props) => {
  return (
    <div className="Header">
      <h4>{props.title}</h4>
    </div>
  )
}

Header.defaultProps = {
  title: "",
  subtitle: "",
}
export default Header
