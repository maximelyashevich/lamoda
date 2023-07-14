import React from 'react'
import { useAppDispatch } from '../../hooks'
import { fetchProductsByCategory } from '../../store/slice/productSlice'
import { motion } from 'framer-motion'
import { leftAnimation } from '../../animation'

interface IProps {
  category: string
}

const Category: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className='left-bar-cat'>
      <motion.p variants={leftAnimation} onClick={() => dispatch(fetchProductsByCategory(props.category))}>
        {props.category.toUpperCase()}
      </motion.p>
    </motion.div>
  )
}

export default Category