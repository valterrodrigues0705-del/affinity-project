import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Carrosel from './Carrosel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Body/>
      <Carrosel/>
    </>
  )
}

export default App
