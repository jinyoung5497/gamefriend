import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='bg-amber-100 flex justify-between p-5 w-full text-md font-bold px-20'>
        <NavLink to='/' className='text-lg'>
          Friend Game
        </NavLink>
        <div className='flex gap-x-10'>
          <NavLink to='trivia'>Trivia</NavLink>
          <NavLink to='who-am-i'>Who Am I?</NavLink>
          <NavLink to='movie-quiz'>Movie Quiz</NavLink>
        </div>
        <NavLink to='menu'>Menu</NavLink>
      </div>
    </>
  )
}
