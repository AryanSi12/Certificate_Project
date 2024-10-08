import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';

const router=createBrowserRouter([
  {
  path: "/",
    element: <App />,
    children :[
      
      {
        path : "login",
        element : <Login />
      },
      {
        path : "signup",
        element : <SignUp />
      },
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
