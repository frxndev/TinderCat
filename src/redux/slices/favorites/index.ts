import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: []
  },
  reducers: {
    setImagesFavorites: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { setImagesFavorites } = favoritesSlice.actions
