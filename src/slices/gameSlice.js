import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    pvpToggle: false,
  },
}

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    pvpToggle: (state) => {
      state.value.pvpToggle = !state.value.pvpToggle
    },
  },
})

export const { pvpToggle } = gameSlice.actions
export default gameSlice.reducer
