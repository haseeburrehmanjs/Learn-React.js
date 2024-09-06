import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between bg-green-600 text-white p-5'>
        <h1>Hello World</h1>
        <div>
          <div className='flex gap-3'>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <Link to="service">Services</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
