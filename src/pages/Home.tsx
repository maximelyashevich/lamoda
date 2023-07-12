import React from 'react'
import Products from '../components/Products/Products'
import LeftBar from '../components/LeftBar/LeftBar'
import TopBar from '../components/TopBar/TopBar'
import { useAppSelector } from '../hooks'
import ClipLoader from 'react-spinners/ClipLoader'

const Home: React.FC = () => {
    const { loading } = useAppSelector(store => store.products)
    return (
        <div className='home'>
            {
                loading ?
                    <ClipLoader color="#black" /> :
                    <div className='home'>
                        <LeftBar />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TopBar />
                            <Products />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home