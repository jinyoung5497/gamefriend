import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Navbar, Trivia, Who_am_i } from './components'

function App() {
  return (
    <>
      <div className='h-full bg-amber-50'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='trivia' element={<Trivia />} />
          <Route path='who-am-i' element={<Who_am_i />} />
        </Routes>
      </div>
    </>
  )
}

export default App
