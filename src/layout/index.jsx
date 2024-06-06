import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import './layout.css'

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='main'> <Outlet /> </main>
        </div>
    )
}

export default memo(Layout)