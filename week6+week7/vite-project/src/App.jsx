import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/terms' element={<Terms />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
