import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> {/* Sign-Up Page Route */}
        {/* Other routes */}
      </Routes>
    </Router>
    // <>
    //   <Login/>
    //   <SignUp/>
    // </>
  )
}

export default App
