import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
