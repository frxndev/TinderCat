import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Home } from '../Icons'

export interface NavbarInterface {}

const Navigation: React.FC<NavbarInterface> = () => {
  return (
    <nav className='w-full px-3 py-2 fixed bottom-0 left-0'>
      <ul className='max-w-2xl m-auto flex flex-row justify-evenly items-center py-1 rounded-lg bg-white border border-stroke'>
        <li>
          <Link to='/'>
            <div className='flex justify-center item-center p-3 rounded-lg'>
              <Home width={'24px'} height={'24px'} />
            </div>
          </Link>
        </li>
        <li>
          <Link to='/favorites'>
            <div className='flex justify-center item-center p-3'>
              <Heart width={'24px'} height={'24px'} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
