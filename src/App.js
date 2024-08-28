import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
