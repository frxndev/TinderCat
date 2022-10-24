import React, { useEffect } from 'react'
import { getFavorite } from '@/utils'
import Layout from '../_layout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import LazyLoad from 'react-lazy-load'

export interface LikeInterface {}

const Favorites: React.FC<LikeInterface> = () => {
  const { list: favorites } = useAppSelector((state) => state.favorites)
  const { username } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorite(username))
  }, [])

  return (
    <Layout>
      <div className='max-w-2xl m-auto'>
        {favorites.map((item: any) => (
          <LazyLoad
            threshold={0.95}
            key={item.id}
            onContentVisible={() => {
              console.log('loaded!')
            }}
          >
            <img key={item.id} src={item.image.url} alt={item.image.id} />
          </LazyLoad>
        ))}
      </div>
    </Layout>
  )
}

export default Favorites
