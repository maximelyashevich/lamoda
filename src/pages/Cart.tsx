import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { removeAllFromCart, removeFromCart } from '../store/slice/cartSlice'
import Purchase from '../components/Purchase/Purchase'


const Cart: React.FC = () => {

    const { cartItems, cartTotalPrice } = useAppSelector(store => store.cart)
    const dispatch = useAppDispatch()
    const [popup, setPopup] = React.useState<boolean>(false)

    return (
        <div>
            {
                cartItems.length === 0 ? <p style={{ padding: '40px' }}>Empty...</p> :
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        <button onClick={() => {
                            dispatch(removeAllFromCart()
                            )
                        }} style={{ margin: '40px' }}>Empty cart</button>
                        <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                            <span>
                                Total price:
                            </span>
                            <p> {cartTotalPrice}</p>
                        </div>
                        <button onClick={() => setPopup(true)}>Buy everything</button>
                    </div>
            }
            <div className="cart">
                {
                    popup && <Purchase popup={popup} setPopup={setPopup} />
                }
                {
                    cartItems.map(el => {
                        return (
                            <div className="cart__item" key={el.id}>
                                <div className="cart__item-photo">
                                    <img alt={el.title} src={el.thumbnail} />
                                </div>
                                <div className="cart__item-right">
                                    <div className="cart__item-title">
                                        <span>
                                            title:
                                        </span>
                                        <h2>
                                            {el.title}
                                        </h2>
                                    </div>
                                    <div className="cart__item-description">
                                        <span>
                                            description:
                                        </span>
                                        <p>
                                            {el.description}
                                        </p>
                                    </div>
                                    <div className="cart__item-brand">
                                        <span>
                                            brand:
                                        </span>
                                        <p>
                                            {el.brand}
                                        </p>
                                    </div>
                                    <div className="cart__item-category">
                                        <span>
                                            category:
                                        </span>
                                        <p>
                                            {el.category}
                                        </p>
                                    </div>
                                    <div className="cart__item-rating">
                                        <span>
                                            rating:
                                        </span>
                                        <p>
                                            {el.rating}
                                        </p>
                                    </div>
                                    <div className="cart__item-price">
                                        <span>
                                            price:
                                        </span>
                                        <p>
                                            {el.price}
                                        </p>
                                    </div>

                                    <div>
                                        <img style={{ width: '20px', height: '30px' }} src='https://s1.iconbird.com/ico/2013/9/452/w448h5121380477116trash.png' alt='trash' className="cart__item-icon" onClick={() => { dispatch(removeFromCart(el)) }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart