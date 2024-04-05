import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
