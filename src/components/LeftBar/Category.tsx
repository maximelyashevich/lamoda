import React from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchProductsByCategory } from '../../store/slice/productSlice'

interface IProps {
    category: string
}

const Category: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch() 
  return (
    <div className='left-bar-cat'>
        <p onClick={()=> dispatch(fetchProductsByCategory(props.category))}>
            {props.category.toUpperCase()}
        </p>
    </div>
  )
}

export default Category