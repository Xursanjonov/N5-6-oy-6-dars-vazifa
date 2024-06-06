import React, { memo, useEffect, useState } from 'react'
import HomeCarousel from '../../components/carousel'
import CartItem from '../../components/cart/CartItem'
import { useGetProductsQuery } from '../../context/api/productApi'
import { Button } from '@mui/material'
import './home.css'

const Home = () => {
    const [limit, setLimit] = useState(8)
    const getProducts = useGetProductsQuery()
    const { data, isLoading } = getProducts
    const alldata = data?.products;

    useEffect(() => { getProducts }, [limit])

    return (
        <section className='home'>
            <div className="home-hero">
                <HomeCarousel />
            </div>
            <div className="home-carts">
                <h1>Products</h1>
                {
                    isLoading ? <h1>Loading...</h1> : (
                        <div className='home-cart-items'>
                            {
                                alldata?.slice(0, limit).map(el => <CartItem key={el.id} product={el} />)
                            }
                        </div>
                    )
                }
                {
                    limit === 28 ? <></> : (
                        <Button onClick={() => setLimit(p => p + 4)} variant="outlined"
                            sx={{ margin: '0 auto', fontWeight: 700, padding: '.8rem 1rem', fontSize: 18 }}>
                            Show +4 products
                        </Button>
                    )
                }
            </div>
        </section>
    )
}

export default memo(Home)