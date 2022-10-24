import { createSlice } from '@reduxjs/toolkit'

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    list: []
  },
  reducers: {
    setImagesCat: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setImagesCat } = catSlice.actions
