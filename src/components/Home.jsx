import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pvpToggle } from '../slices/gameSlice'

export default function Home() {
  const dispatch = useDispatch()
  const games = useSelector((state) => state.games.value)

  return (
    <>
      <div>Home</div>
    </>
  )
}
