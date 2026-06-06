import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './index.css'
import Dev from './pages/Dev'

// 1. Create a Layout component to hold navigation links
const Layout: React.FC = () => {
  return (
    <div>
      <nav className="flex gap-2.5 p-2.5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dev">Dev</Link>
      </nav>
      <hr />
      {/* Outlet renders the matched child route element */}
      <Outlet />
    </div>
  )
}

// 2. Define the route structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dev",
        element: <Dev />,
      }
    ],
  },
])

// 3. Render the app using RouterProvider
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
