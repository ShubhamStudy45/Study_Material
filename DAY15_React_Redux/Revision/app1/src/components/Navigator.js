import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navigator = () => {
  const Products = useSelector((state) => state.productsList)
  // console.log("nav :", Products.length)
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/home">
            <a class="navbar-brand">App1</a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about">
                  <a class="nav-link active">About</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile">
                  <a class="nav-link active">Profile</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/counter">
                  <a class="nav-link active">Counter</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/ducounter">
                  <a class="nav-link active">DuCounter</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/product">
                  <a class="nav-link active">Product</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Link to="/signin">
              <a class="nav-link active">Signin</a>
            </Link>
            /
            <div>
              <Link to="/signup">
                <a class="nav-link active">Signup</a>
              </Link>
              {Products.length > 0 && (
                <div>
                  <strong>Cart</strong> [ {Products.length} ]
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navigator
