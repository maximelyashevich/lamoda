import React from 'react'
import { useAppDispatch } from '../../hooks'
import { orderByDiscountBottom, orderByPopularBottom, orderByPriceBottom, orderByPriceTop } from '../../store/slice/productSlice'


const TopBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const [eActive, setEActive] = React.useState<boolean>(false)
  const [cActive, setCActive] = React.useState<boolean>(false)
  const [dActive, setDActive] = React.useState<boolean>(false)
  const [pActive, setPActive] = React.useState<boolean>(false)

  return (
    <div className='top-bar'>
      <button onClick={() => {
        setEActive(!eActive)
        dispatch(orderByPriceBottom())
        setCActive(false)
        setDActive(false)
        setPActive(false)
      }} className={`${eActive && 'btn-active'}`}>Expensive first</button>
      <button onClick={() => {
        setCActive(!cActive)
        dispatch(orderByPriceTop())
        setPActive(false)
        setDActive(false)
        setEActive(false)
      }} className={`${cActive && 'btn-active'}`}>Cheaper first</button>
      <button onClick={() => {
        dispatch(orderByPopularBottom())
        setPActive(!pActive)
        setCActive(false)
        setDActive(false)
        setEActive(false)
      }} className={`${pActive && 'btn-active'}`}>More popular</button>
      <button onClick={() => {
        dispatch(orderByDiscountBottom())
        setDActive(!dActive)
        setCActive(false)
        setEActive(false)
        setPActive(false)
      }} className={`${dActive && 'btn-active'}`}>Big discount</button>
    </div>
  )
}

export default TopBar