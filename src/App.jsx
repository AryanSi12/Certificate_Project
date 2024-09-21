import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Don't forget to import Link and Outlet

// import Login from './Components/Login';
// import SignUp from './Components/SignUp';

function App() {

  return (
    <>
    {/* <nav>
        <Link to="/signup">Sign up</Link>
        <Link to="/login" style={{ marginLeft: '10px' }}>Log in</Link>
      </nav> */}


    <Outlet />
    </>
  );
}

export default App
