import { BrowserRouter as  Router,Outlet, Link } from 'react-router-dom';

import { useState } from 'react'
function App() {
  return (
    <>
    <Link to="/Signup">Sign up</Link>
    <Link to="/Login">Log in</Link>
    <Outlet />
    </>
  )
}

export default App
