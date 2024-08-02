import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 10){
      setCounter(++counter)
    }else{
      setCounter("Limit Reached | Reset the value")
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(--counter)
    }else{
      setCounter("You can't go in negative | Reset the Value")
    }
  }

  const resetValue = ()=>{
    setCounter(0)
  }

  return (
    <>
      <h1>Second Project (COUNTER)</h1>
      <h2>COUNTER : {counter}</h2>
      <button onClick={addValue}>+ VALUE</button>
      <br />
      <hr />
      <button onClick={removeValue}>- VALUE</button>
      <br />
      <hr />
      <button onClick={resetValue}>RESET VALUE</button>
    </>
  )
}

export default App
