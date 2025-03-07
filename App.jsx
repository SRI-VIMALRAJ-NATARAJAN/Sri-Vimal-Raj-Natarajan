import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Hello Friends </h1>

     <p> THIS IS MY VLOG PAGE</p>

     <button onClick={()=> alert("ThankYOU MY FRIEND")} style={{padding:"10px 20px", fontSize:"15px",cursor:"pointer"}}>

        FRIENDS
     </button>
    </>
  )
}

export default App
