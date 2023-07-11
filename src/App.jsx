import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Navbar, Trivia } from './components'

function App() {
  return (
    <>
      <div className='h-full bg-amber-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='trivia' element={<Trivia />} />
        </Routes>
      </div>
    </>
  )
}

export default App
