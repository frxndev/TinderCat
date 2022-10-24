import React from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { setProfile } from '@/redux/slices'

export interface SettingsInterface {
  setOpenModal: (value: boolean) => void
}

const Settings: React.FC<SettingsInterface> = ({ setOpenModal }) => {
  const { username } = useAppSelector((state) => state.profile)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setOpenModal(false)}></div>
        <div className='flex items-center min-h-screen px-4 py-8'>
          <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
            <div className='mt-3 sm:flex'>
              <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                <h4 className='text-lg font-medium text-gray-800'>Actualizar Perfil</h4>
                <div className='mt-6'>
                  <label htmlFor='username'>Username</label>
                  <input
                    id='username'
                    type='text'
                    className='block p-3 border-2 border-stroke rounded-lg hover:bg-gray-50'
                    placeholder={username}
                    onChange={(e) => dispatch(setProfile({ username: e.target.value }))}
                  />
                </div>

                <div className='items-center gap-2 mt-3 sm:flex'>
                  <button
                    className='w-full mt-2 p-2.5 flex-1 text-white bg-primary rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2'
                    onClick={() => setOpenModal(false)}
                  >
                    Guardar
                  </button>
                  <button
                    className='w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2'
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
