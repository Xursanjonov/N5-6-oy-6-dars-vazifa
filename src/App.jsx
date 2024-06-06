import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
// components
import Layout from './layout'
import Home from './pages/home'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)