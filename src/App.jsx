import { useState } from 'react'
import './App.css'
import LoginForm from "./Component/Login";
import Home from "./Component/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <LoginForm /> 
    </>
  )
}

export default App
