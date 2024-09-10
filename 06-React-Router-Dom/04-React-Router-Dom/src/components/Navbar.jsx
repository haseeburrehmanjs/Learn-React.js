import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between p-4 bg-blue-500 text-white'>
        <h1 className='text-2xl font-bold'>DEMO</h1>
        <div>
            <ul className='flex gap-4'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
                {/* <li><Link to='Singaluser'>Singal User</Link></li> */}
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
