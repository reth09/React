import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import lottie from 'lottie-react'
import animationData from './assets/Animation - 1726494919903.json'
import Lottie from 'lottie-react'

function App() {

  return (
    <>
      <h1>Cool Animations </h1>
      <Lottie animationData={animationData}/>
    </>
  )
}

export default App
