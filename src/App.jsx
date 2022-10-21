import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route index path="/login" element={<Login />}></Route>
              <Route index path="/signup" element={<SignUp />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
