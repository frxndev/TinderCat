import { setImagesCat, setImagesFavorites } from '@/redux/slices/'
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'redaxios'

const options = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_API_KEY
  }
}

export const getRandomImage = () => (dispatch: Dispatch<any>) => {
  axios.get('https://api.thecatapi.com/v1/images/search', options).then((res) => {
    dispatch(setImagesCat(res.data))
  })
}

export const getFavorite = (name: string) => (dispatch: Dispatch<any>) => {
  axios.get(`https://api.thecatapi.com/v1/favourites?sub_id=${name}`, options).then((res) => {
    dispatch(setImagesFavorites(res.data))
  })
}

export function voteNow(sub_id: string, image_id: string, value: number) {
  return axios
    .post(
      `https://api.thecatapi.com/v1/votes`,
      {
        sub_id: sub_id,
        image_id: image_id,
        value: value
      },
      options
    )
    .then((res) => console.log(res.data))
}

export function addFavorite(sub_id: string, image_id: string) {
  return axios
    .post(
      `https://api.thecatapi.com/v1/favourites`,
      {
        image_id: image_id,
        sub_id: sub_id
      },
      options
    )
    .then((res) => console.log(res.data))
}
