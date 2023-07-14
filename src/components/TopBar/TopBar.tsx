import React from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../hooks'
import { orderByDiscountBottom, orderByPopularBottom, orderByPriceBottom, orderByPriceTop } from '../../store/slice/productSlice'
import { downAnimation, leftAnimation, rightAnimation } from '../../animation'


const TopBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [eActive, setEActive] = React.useState<boolean>(false)
  const [cActive, setCActive] = React.useState<boolean>(false)
  const [dActive, setDActive] = React.useState<boolean>(false)
  const [pActive, setPActive] = React.useState<boolean>(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className='top-bar'>
      <motion.button variants={leftAnimation} onClick={() => {
        setEActive(!eActive)
        dispatch(orderByPriceBottom())
        setCActive(false)
        setDActive(false)
        setPActive(false)
      }} className={`${eActive && 'btn-active'}`}>Expensive first</motion.button>
      <motion.button variants={downAnimation} onClick={() => {
        setCActive(!cActive)
        dispatch(orderByPriceTop())
        setPActive(false)
        setDActive(false)
        setEActive(false)
      }} className={`${cActive && 'btn-active'}`}>Cheaper first</motion.button>
      <motion.button variants={downAnimation} onClick={() => {
        dispatch(orderByPopularBottom())
        setPActive(!pActive)
        setCActive(false)
        setDActive(false)
        setEActive(false)
      }} className={`${pActive && 'btn-active'}`}>More popular</motion.button>
      <motion.button variants={rightAnimation} onClick={() => {
        dispatch(orderByDiscountBottom())
        setDActive(!dActive)
        setCActive(false)
        setEActive(false)
        setPActive(false)
      }} className={`${dActive && 'btn-active'}`}>Big discount</motion.button>
    </motion.div>
  )
}

export default TopBar