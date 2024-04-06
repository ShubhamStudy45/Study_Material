import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navigation = (props) => {
  const cartItem = useSelector((state) => state.CartItem)
  // console.log(" Cart item : ", cartItem)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/home">
            <a className="navbar-brand">App1</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/counter">
                  <a className="nav-link">Counter</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dummycounter">
                  <a className="nav-link">Dummy Counter</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product">
                  <a className="nav-link">Product</a>
                </Link>
              </li>
            </ul>
          </div>
          {cartItem.length > 0 && (
            <div className="d-flex">
              <span className="cart-count">
                {"[" + cartItem.length + "]"}
                {console.log("Cart item : ", cartItem.length)}
              </span>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navigation
