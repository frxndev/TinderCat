import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header, Navigation } from '@/components'
import { Favorites, Home } from '@/pages'

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
      <Navigation />
    </Fragment>
  )
}

export default App
