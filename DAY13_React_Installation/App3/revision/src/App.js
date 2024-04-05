import "./App.css"
import About from "./component/About"
import Product from "./component/Product"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Search from "./component/Search"
import Profile from "./component/Profile"
function App() {
  return (
    <div>
      <h2>My Application</h2>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
