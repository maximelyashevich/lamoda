import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import Category from './Category'
import { fetchAllProducts } from '../../store/slice/productSlice'

const LeftBar: React.FC = () => {
    const { categories, loading } = useAppSelector(store => store.products)
    const dispatch = useAppDispatch()
    return (
        <div className='left-bar'>
            <p onClick={()=> dispatch(fetchAllProducts())} className='left-bar-cat'>ALL</p>
            {
                loading ? <p>Loading...</p> :
                categories.map(el => {
                    return (
                        <div key={el}>
                            <Category category={el}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LeftBar