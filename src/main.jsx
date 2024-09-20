import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'

const router=createBrowserRouter([
  {
  path: "/",
    element: <App />,
    children :[
      
      {
        path : "/Login",
        element : <Login />
      },
      {
        path : "/Signup",
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
