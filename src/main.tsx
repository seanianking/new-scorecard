import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
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

// 2. Define the route structure with HashRouter
const router = (
  <HashRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
      </Route>
    </Routes>
  </HashRouter>
)

// 3. Render the app
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {router}
    </React.StrictMode>,
  )
}
