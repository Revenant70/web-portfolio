import { Routes, Route } from 'react-router-dom'


import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
