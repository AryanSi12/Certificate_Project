import { useState } from 'react'

import Login from './Components/Login'
import { Link, Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/Login">login</Link>
      <Outlet />
    </>
  )
}

export default App
