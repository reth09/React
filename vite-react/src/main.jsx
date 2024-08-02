import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>CUStom APP</h2>
    </div>
  )
}

const testVariable = "RETH"

const SyntaxElement = React.createElement(
  'a',
  {href: "https://react.dev", target:"blank"},
  'ill move you to the react website',
  // after it injects and converts html it takes variables
  testVariable
)

ReactDOM.createRoot(document.getElementById('root')).render(
    SyntaxElement
)
