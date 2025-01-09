import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Lead from './Lead'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login></Login>} />
        <Route path="/lead" element={<Lead></Lead>}/>
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
