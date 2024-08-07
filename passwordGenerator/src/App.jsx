import { useCallback, useState, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let password = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (num) str += "1234567890"
    if (char) str += "!@#$%^&*"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }
    setPass(password)

  }, [length, num, char, setPass])


  const copyPass = useCallback(() => {
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0, 8) sets a range to be copied
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl p-4 fixed inset-y-1/2 inset-x-0 h-fit text-white bg-slate-700' style={{ transform: 'translateY(-50%)' }}>
        <h2 className='text-2xl text-center pb-3 font-sans font-thin tracking-wide'>PASSWORD GENERATOR</h2>
        <div className='flex shadow rounded-full overflow-hidden mb-4'>
          <input
            type='text'
            value={pass}
            className='outline-none w-full py-2 px-3 text-black text-lg'
            placeholder='PASSWORD'
            readOnly
            ref={passRef}
          />
          <button className='bg-blue-500 px-3' onClick={copyPass}>COPY</button>
        </div>

        <div className="flex text-md justify gap-x-5 align-middle">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={18}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label > Length: {length}</label>
          </div>
          <div className="flex  align-middle gap-x-1">
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={num}
              onChange={() => {
                setNum((prev => !prev))
              }}
            />
            <label > Number</label>

            <input
              type="checkbox"
              id='charInput'
              defaultChecked={char}
              onChange={() => {
                setChar((prev => !prev))
              }}
            />
            <label > Character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
