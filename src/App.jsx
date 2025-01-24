import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
