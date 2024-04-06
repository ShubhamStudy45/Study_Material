const Header = (props) => {
  return (
    <div className="container">
      <h3>{props.title}</h3>
      {props.subtitle.length > 0 && <h5>{props.subtitle}</h5>}
    </div>
  )
}

Header.defaultProps = {
  title: "",
  subtitle: "",
}

export default Header
