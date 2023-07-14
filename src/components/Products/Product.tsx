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
          cartItems.find(el => el.id === props.product.id) ? <img style={{ width: '20px', height: '30px' }} src='https://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png' alt='trash' className='home__product-icon' onClick={() => dispatch(removeFromCart(props.product))} /> : <img src='https://cdn-icons-png.flaticon.com/512/34/34627.png' alt='cart' style={{ width: '25px', height: '25px' }} className='home__product-icon' onClick={() => {
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