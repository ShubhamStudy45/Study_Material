const Header = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}

Header.defaultProps = {
  title: "Counter App",
  subtitle: "This is class based component",
}

export default Header
