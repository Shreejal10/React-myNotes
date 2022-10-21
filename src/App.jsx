import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, color) => {
    setAlert({
      msg: message,
      clr: color
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <div>
            <Alert alert={alert} />
            <Routes>
              <Route path="/home" element={<Home showAlert={showAlert} />}></Route>
              <Route index path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route path="/signup" element={<SignUp showAlert={showAlert} />}></Route>
              <Route path="/" element={<Navigate to="/login" />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
