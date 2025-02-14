import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {

  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company">Empresa</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/new-project">Novo Projeto</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-project" element={<NewProject />}/>
      </Routes>
    </Router>

  )
}

export default App
