import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UserDetails from './components/UserDetails.jsx';
import AddNewUser from './components/AddNewUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
      path:'/userDetails',
      element:<UserDetails></UserDetails>
    },
    {
      path:'/',
      element:<AddNewUser></AddNewUser>
    }
  ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
