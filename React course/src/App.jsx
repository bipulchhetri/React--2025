import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from 'react'
import ClassBasedComponent from './components/class'
import funCom from './components/fun-com'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello react</h1> 
    <fun-com></fun-com>
    <fun-com/>
    <class/>
    </>
  )
}

export default App
