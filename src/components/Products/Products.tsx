import React from 'react'
import { useAppSelector } from '../../hooks'
import Product from './Product'


const Products: React.FC = () => {
    const { products } = useAppSelector(store => store.products)

      
    return (
        <div className='home__products'>
            {
                products.map(el => {
                    return (
                        <div key={el.id}>
                            <Product product={el}/>
                        </div>
                        
                    )
                })
            }
            {
                products.length === 0 && <p>There are no such products...</p>
            }
        </div>
    )
}

export default Products