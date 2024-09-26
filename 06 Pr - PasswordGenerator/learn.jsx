// We start by importing hooks from the React library
// useCallback: Optimizes functions so they don't get recreated unnecessarily
// useState: Manages state (data that changes) in the component
// useEffect: Allows side-effects like running functions after render
// useRef: Lets us reference DOM elements directly (like inputs)
import { useCallback, useState, useEffect, useRef } from 'react'

function App() {

  // useState is used to create state variables that store the length of the password,
  // whether it includes numbers (num), special characters (char), and the actual password (pass).
  const [length, setLength] = useState(8) // 'length' is set to 8 by default
  const [num, setNum] = useState(false) // 'num' is initially false, so no numbers in the password by default
  const [char, setChar] = useState(false) // 'char' is false, so no special characters by default
  const [pass, setPass] = useState("") // 'pass' will hold the generated password

  // useRef is used here to reference the input field that will display the password
  const passRef = useRef(null)

  // passwordGenerator is a function that generates a random password.
  // useCallback is used here to ensure this function doesn't get recreated unless its dependencies (length, num, char, setPass) change.
  const passwordGenerator = useCallback(() => {
    let password = ""
    // 'str' contains the characters for the password (letters)
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    // If 'num' is true, add numbers to the possible characters
    if (num) str += "1234567890"
    // If 'char' is true, add special characters to the possible characters
    if (char) str += "!@#$%^&*"

    // This loop will run for the specified length and select random characters from 'str'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char) // Append the selected character to 'password'
    }
    // Finally, we update the 'pass' state with the generated password
    setPass(password)
  }, [length, num, char, setPass]) // Dependencies: the function will rerun if these change

  // copyPass is a function to copy the generated password to the clipboard
  // We use useCallback to prevent this function from recreating unless 'pass' changes
  const copyPass = useCallback(() => {
    // Selects the password text in the input field
    passRef.current?.select()
    // Copies the selected text to the clipboard
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  // useEffect runs after the component renders
  // In this case, it will call 'passwordGenerator' whenever the 'length', 'num', or 'char' states change
  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator]) // This effect depends on these values

  return (
    // JSX: What is returned here will be rendered as HTML on the page
    <>
      {/* A div wrapping the whole password generator component, styled with Tailwind CSS */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl p-4 fixed inset-y-1/2 inset-x-0 h-fit text-white bg-slate-700' style={{ transform: 'translateY(-50%)' }}>
        <h2 className='text-2xl text-center pb-3 font-sans font-thin tracking-wide'>PASSWORD GENERATOR</h2>

        {/* This section contains the generated password and a copy button */}
        <div className='flex shadow rounded-full overflow-hidden mb-4'>
          {/* The input field displaying the password */}
          <input
            type='text'
            value={pass} // The value here is the generated password
            className='outline-none w-full py-2 px-3 text-black text-lg'
            placeholder='PASSWORD'
            readOnly // Prevents users from manually editing the password
            ref={passRef} // References the input for copying
          />
          {/* Button to copy the password to the clipboard */}
          <button className='bg-blue-500 px-3' onClick={copyPass}>COPY</button>
        </div>

        {/* Controls for customizing the password */}
        <div className="flex text-md justify gap-x-5 align-middle">

          {/* Length of the password slider */}
          <div className="flex items-center gap-x-2">
            <input
              type="range" // A range slider to adjust password length
              min={8} // Minimum length of 8 characters
              max={18} // Maximum length of 18 characters
              value={length} // Bound to the 'length' state
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} // Updates the length when changed
            />
            <label > Length: {length}</label> {/* Shows the current length */}
          </div>

          {/* Checkbox options to include numbers and special characters */}
          <div className="flex align-middle gap-x-1">
            {/* Checkbox for including numbers */}
            <input
              type="checkbox"
              id='numberInput'
              defaultChecked={num} // Initially set to the 'num' state
              onChange={() => {
                setNum((prev => !prev)) // Toggles the 'num' state on change
              }}
            />
            <label> Number</label> {/* Label for number checkbox */}

            {/* Checkbox for including special characters */}
            <input
              type="checkbox"
              id='charInput'
              defaultChecked={char} // Initially set to the 'char' state
              onChange={() => {
                setChar((prev => !prev)) // Toggles the 'char' state on change
              }}
            />
            <label> Character</label> {/* Label for character checkbox */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
