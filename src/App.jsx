import{ Route, Routes } from 'react-router-dom'
import './App.css'

import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home-s.jsx'
import About from './components/Page component/about.jsx'
import CardDetails from './pages/CardDetials.jsx'


function App() {

  return (
    <>
    <Toolbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/card/:id" element={<CardDetails />} />
      <Route path="*" element ={<PageNotFound />} />
     
    </Routes>
    </>
  )
}


export default App