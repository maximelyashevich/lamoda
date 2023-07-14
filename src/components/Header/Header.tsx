import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import debounce from 'lodash.debounce'
import { fetchSearch, setQFilter } from '../../store/slice/productSlice'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { leftAnimation, upAnimation } from '../../animation'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector(store => store.products)
  const location = useLocation()
  const { cartTotalQuantity } = useAppSelector(store => store.cart)

  React.useEffect(() => {
    dispatch(fetchSearch(filter.q))
  }, [filter])

  const searchFunc = (e: any) => {
    if (e) {
      dispatch(setQFilter({ q: e.target.value }))
    }
  }
  const debounceSearch = debounce(searchFunc, 300)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className='header'>
      <Link aria-label="home" to="/">
        <motion.h1 variants={leftAnimation} style={{ fontSize: '25px', color: 'black' }}>LAMODA</motion.h1>
      </Link>
      <motion.input variants={upAnimation} onChange={debounceSearch} type="text" placeholder='search...' />
      {
        location.pathname.includes('cart') ?
          <Link aria-label="home"
            to='/'>
            <img style={{width: '25px'}} src='src\assets\home-icon-silhouette-svgrepo-com.svg' alt='home'  className='header_icon' />
          </Link> :
          <div style={{ display: 'flex', columnGap: '10px' }}>
            <Link aria-label="cart" to="/cart">
              <img style={{width: '25px'}} src='src\assets\shopping-cart-outline-svgrepo-com.svg' alt='cart' className='header_icon' />
            </Link>
            <p style={{ color: 'red' }}>
              {cartTotalQuantity > 0 && cartTotalQuantity}
            </p>
          </div>
      }
    </motion.div>
  )
}

export default Header