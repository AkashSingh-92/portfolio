import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar> 
    <Hero></Hero>
    <About></About>
    </>
  )
}

export default App
