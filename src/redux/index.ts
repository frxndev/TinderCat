import { configureStore } from '@reduxjs/toolkit'
import { catSlice, favoritesSlice, profileSlice } from '@/redux/slices'

export const store = configureStore({
  reducer: {
    cat: catSlice.reducer,
    favorites: favoritesSlice.reducer,
    profile: profileSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
