import React from 'react'
import data from './data.json'

export default function Who_am_i() {
  const tester = () => {
    console.log(data[6].image)
  }

  return (
    <>
      <div className='bg-yellow flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-center justify-center w-96'>
          <img
            src={data[5].image}
            alt='image'
            className='max-w-[500px] max-h-[500px]'
          />
        </div>
        <div className='flex flex-col '>
          <p>Answer</p>
          <button onClick={tester}>test me</button>
          <input type='text' placeholder='Type your answer' />
        </div>
      </div>
    </>
  )
}
