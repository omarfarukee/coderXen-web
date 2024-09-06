import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className='flex gap-5'>
        <NavLink to='/home'><p>home</p></NavLink>
        <p>about us</p>
        <p>contact</p>
      </div>
    </div>
  )
}
