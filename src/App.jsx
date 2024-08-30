import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const [mode, setMode] = useState("dark");

  return (
    <Navbar />
  )
}

export default App
