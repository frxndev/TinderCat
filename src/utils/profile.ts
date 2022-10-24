import { setProfile } from '@/redux/slices'
import { Dispatch } from '@reduxjs/toolkit'

export const profile = (username: string) => (dispatch: Dispatch) => (
  localStorage.setItem('username', username),
  dispatch(setProfile({ username }))
)
