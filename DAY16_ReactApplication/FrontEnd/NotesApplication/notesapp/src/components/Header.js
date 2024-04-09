const Header = (props) => {
  return (
    <div className="Header">
      <h3>{props.title}</h3>
      {props.subtitle.length > 0 && <p>{props.subtitle}</p>}
    </div>
  )
}
Header.defaultProps = {
  title: "",
  subtitle: "",
}

export default Header
