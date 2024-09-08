import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-3 p-5 font-bold text-2xl'>
        <li><Link to=''>Home</Link></li>
        <li><Link to='about'>about</Link></li>
        <li><Link to='contact'>Contact us</Link></li> 
      </ul>
    </div>
  )
}

export default Navbar
