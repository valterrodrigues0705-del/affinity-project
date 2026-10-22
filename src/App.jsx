import { useState } from 'react'
// import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Carrosel from './Carrosel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Carrosel/>
    </>
  )
}

export default App
