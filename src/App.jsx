import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div style={{backgroundColor:"black", height:"300px", textAlign:"center",padding:"20px"}}>
          <h1 style={{color:"white",fontWeight:"bolder"}}> Hello Everyone,</h1>

          <p style={{color:"white",fontSize:"12px"}}> Here is 
            the exciting and intresting Quiz Questions  </p>

          <h4 style={{color:"white",fontWeight:"bolder"}}> ALL THE VERY BEST, DO WELL DEAR LEANERS</h4>

          <button onClick={()=> alert("LETS GO")}>
             LETS GO
          </button>
          <p style={{color:"white",fontSize:"12px"}}> Click the Button </p>

      </div> 
    </>
  )
}

export default App
