import React from 'react'
import { IProduct } from '../../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdAddShoppingCart } from 'react-icons/md'

interface IProps {
  product: IProduct
}

const Product: React.FC<IProps> = (props) => {
  return (
    <div className='home__product'>
      <div className="home__product-images">
        <MdAddShoppingCart className='home__product-icon' />
        <LazyLoadImage
          alt='https://kazut.pl/ru/wp-content/themes/Aether/library/img/default-image.jpg'
          effect="blur"
          src={props.product.images[0]} />
      </div>
      <div className="home__product-price">
        <h3>
          price: {props.product.price}$
        </h3>
      </div>
      <div className="home__product-discount">
        <p>
          discount: {props.product.discountPercentage}%
        </p>
      </div>
      <div className="home__product-title">
        <h3>
          title: {props.product.title}
        </h3>
      </div>
      <div className="home__product-stock">
        <h4>
          stock: {props.product.stock}
        </h4>
      </div>
      <div className="home__product-category">
        <p>
          category: {props.product.category}
        </p>
      </div>
    </div>
  )
}

export default Product