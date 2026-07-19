import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

// npm install react-router-dom