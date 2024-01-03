import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Signup from "./pages/Signup"
import Signin from './pages/Signin.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Accountdetails from "./pages/Accountdetails.tsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: '/signin',
    element:<Signin />
  },
  {
    path: '/dashboard',
    element:<Dashboard />
  },
  {
    path: '/dashboard/details',
    element:<Accountdetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)