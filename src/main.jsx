import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home.jsx';
import Blogs from './assets/Pages/Blogs';
import Bookmarks from './assets/Pages/Bookmarks.jsx';
import MainComponents from './Layouts/MainComponents.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents></MainComponents>,
    children: [
      {
        // path: "/",
        index:true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader : () => fetch('https://dev.to/api/articles?per_page=20&top=7')
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
