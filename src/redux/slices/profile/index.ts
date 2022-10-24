import { getLocalStorage, setLocalStorage } from '@/hooks'
import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    username: getLocalStorage('profile')
  },
  reducers: {
    setProfile: (state, action) => {
      setLocalStorage('profile', action.payload.username)
      return action.payload
    }
  }
})

export const { setProfile } = profileSlice.actions
