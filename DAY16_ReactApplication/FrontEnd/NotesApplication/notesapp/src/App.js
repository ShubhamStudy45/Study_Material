import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import SigninScreen from "./screens/SigninScreen"
import NotesScreen from "./screens/NotesScreen"
import SignupScreen from "./screens/SignupScreen"
import AddNoteScreen from "./screens/AddNoteScreen"
import AboutScreen from "./screens/AboutScreen"
function App() {
  return (
    <div>
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/signup" element={<SignupScreen />}></Route>
            <Route path="/notes" element={<NotesScreen />}></Route>
            <Route path="/add-notes" element={<AddNoteScreen />}></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
