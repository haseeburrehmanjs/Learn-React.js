import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <ul className="flex justify-center gap-10 text-5xl">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='about'>
          <li>About</li>
        </Link>
        <Link to='contact'>
          <li>Contact Us</li>
        </Link>
      </ul>
      <Outlet/>
    </div>
  )
}

export default App