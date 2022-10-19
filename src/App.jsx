import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
