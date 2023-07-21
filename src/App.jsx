import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-5 p-4 font-semibold text-3xl text-center text-white bg-black hover:text-black hover:bg-sky-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a, id iure perferendis, ducimus deleniti magnam minus fugiat earum velit vitae quaerat soluta repellat, et eligendi? Dignissimos est earum inventore.</div>
    </>
  )
}

export default App
