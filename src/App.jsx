import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
