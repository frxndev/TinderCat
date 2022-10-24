import React, { useEffect } from 'react'
import { Layout } from '@/pages/'
import { Image } from '@/types'
import { getRandomImage } from '@/utils'
import { CardComponent } from '@/components'
import { useAppSelector, useAppDispatch } from '@/hooks'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  // const { list: image } = useSelector((state: any) => state.cat)
  // const dispatch = useDispatch()
  const { list: image } = useAppSelector((state) => state.cat)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRandomImage())
  }, [dispatch])

  return (
    <Layout>
      <div className='flex justify-center items-center'>
        {image.map((item: Image) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  )
}

export default Home
