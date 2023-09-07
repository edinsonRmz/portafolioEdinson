import './App.css'
import React, { useState } from 'react'
import MyComponet from './Components/Componet'
import MyComonenttext from './Components/ComponetText'
import copyright from './Components/copyright'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <MyComponet/>
     <ComponetText/>
     <copyright/>
     
     </>
  )
}

export default App
