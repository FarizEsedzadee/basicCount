import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)


  return (
    <>
      <button onClick={() => setCount(count = (count <= 0) ? 0 : count - 1)}> - </button>
      <span> {count} </span>
      <button onClick={() => setCount(count = (count == 10) ? 10 : count + 1)}> + </button>
    </>
  )
}

export default App
