import { useState } from 'react'
import './App.css'

function App() {

  const colors = ["orange", "limegreen", "teal", "skyblue", "black"]

  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-500'
        style={{ backgroundColor: color }}
      >
        <h1 className='text-white text-4xl uppercase text-center pt-10'>Background Changer</h1>
        <div className='fixed inset-x-0 flex flex-wrap justify-evenly bottom-28 text-white bg-white w-1/3 m-auto rounded-full p-3 shadow-lg shadow-slate-600'>

          {colors.map((color, index) => (
            <button className=' px-2.5 py-0.5 rounded-full shadow-md shadow-slate-500'
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
              key={index}
            >
              <span className='uppercase'>{color}</span>

            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
