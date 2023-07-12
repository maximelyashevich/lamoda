import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './scss/style.scss'
import { useAppDispatch } from './hooks'
import { fetchAllCategories, fetchAllProducts } from './store/slice/productSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound'

const App: React.FC = () => {

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategories())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App