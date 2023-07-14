import React from 'react'
import { IProduct } from '../../interfaces'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart, removeFromCart } from '../../store/slice/cartSlice';
import { leftAnimation, rightAnimation } from '../../animation';

interface IProps {
  product: IProduct
}

const Product: React.FC<IProps> = (props) => {

  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector(store => store.cart)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className='home__product'>
      <motion.div variants={leftAnimation} className="home__product-images">
        {
          cartItems.find(el => el.id === props.product.id) ? <img style={{ width: '20px' }} src='src\assets\trash-can-svgrepo-com.svg' alt='trash' className='home__product-icon' onClick={() => dispatch(removeFromCart(props.product))} /> : <img src='src\assets\shopping-cart-outline-svgrepo-com.svg' alt='cart' style={{ width: '20px' }} className='home__product-icon' onClick={() => {
            dispatch(addToCart(props.product))
          }} />
        }
        <img src={props.product.images[0]} alt={props.product.title} />
      </motion.div>
      <motion.div variants={rightAnimation}>
        <div className="home__product-price">
          <span>
            price:
          </span>
          <h1>
            {props.product.price}$
          </h1>
        </div>
        <div className="home__product-title">
          <span>
            title:
          </span>
          <h2>
            {props.product.title}
          </h2>
        </div>
        <div className="home__product-stock">
          <span>
            stock:
          </span>
          <h3>
            {props.product.stock}
          </h3>
        </div>
        <div className="home__product-category">
          <span>
            category:
          </span>
          <p>
            {props.product.category}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Product