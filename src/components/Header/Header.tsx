import React, { useState } from 'react'
import { Setting } from '@/components/Icons'
import { Settings } from '@/components'
import logo from '/logo.png'

export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <header className='max-w-2xl w-full px-3 py-4 m-auto flex items-center'>
      <button
        onClick={() => {
          setShowModal(true)
        }}
      >
        <Setting width={24} height={24} />
      </button>
      <img className='h-10 m-auto' src={logo} alt='logo' />
      {showModal && <Settings setOpenModal={setShowModal} />}
    </header>
  )
}

export default Header
