import React, { useState } from 'react'
import { Image } from '@/types'
import { Heart, ThumbsDown, ThumbsUp } from '@/components/Icons'
import { getRandomImage, voteNow, addFavorite } from '@/utils'
import { useAppSelector, useAppDispatch } from '@/hooks'

export interface CardComponentInterface {
  data: Image
}

const CardComponent: React.FC<CardComponentInterface> = ({ data }) => {
  const { id, url } = data
  const { username: name } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<number>(1)

  const newVote = async () => {
    voteNow(name, id, value)
    dispatch(getRandomImage())
  }

  function handleLike() {
    setValue(1)
    newVote()
  }

  function handleDislike() {
    setValue(0)
    newVote()
  }

  function handleFavorite() {
    addFavorite(name, id)
  }

  return (
    <article className='flex w-full max-w-2xl  flex-col gap-6'>
      <div className='w-full h-[600px] rounded-lg overflow-hidden'>
        <picture>
          <source srcSet={url} />
          <img className='w-full h-full object-cover' src={url} alt={id} />
        </picture>
      </div>
      <div className='flex justify-center gap-12 m-2'>
        <button
          onClick={handleLike}
          className='group p-2 rounded-lg bg-green-200 text-green-800 hover:bg-green-500 hover:text-green-100 transition-all'
        >
          <ThumbsUp width={'28px'} height={'28px'} />
        </button>
        <button
          onClick={handleFavorite}
          className='p-2 rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-500 hover:text-blue-100 transition-all'
        >
          <Heart width={'28px'} height={'28px'} />
        </button>
        <button
          onClick={handleDislike}
          className='p-2 rounded-lg bg-red-200 text-red-800 hover:bg-red-500 hover:text-red-100 transition-all'
        >
          <ThumbsDown width={'28px'} height={'28px'} />
        </button>
      </div>
    </article>
  )
}

export default CardComponent
