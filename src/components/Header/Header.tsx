import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import debounce from 'lodash.debounce'
import { fetchSearch, setQFilter } from '../../store/slice/productSlice'
import { BsCart2 } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector(store => store.products)

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
    <div className='header'>
      <Link to="/">
        <h1 style={{ fontSize: '25px', color: 'black' }}>LAMODA</h1>
      </Link>
      <input onChange={debounceSearch} type="text" placeholder='search...' />
      <BsCart2 className='header_icon' />
    </div>
  )
}

export default Header