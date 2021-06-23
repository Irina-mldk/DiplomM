import React from 'react'

import * as Styles from './styles'
import CartItem from '../CartItem'
import Heading from '../Heading'
import Typography from '../Typography'
import {useSelector, useDispatch} from 'react-redux'
import {clearCartItemsAction, setCartItemsQuantityAction, setCartPrice, setLoadingAction} from '../../store'

import cart from '../../images/cart-icon.svg'
import trashCan from '../../images/trash-can.svg'


const CartItems = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartItems)
  const cartItemsQuantity = useSelector(state => state.cartItemsQuantity)
  const cartPrice = useSelector(state => state.cartPrice)
  const discountPrice = useSelector(state => state.discountPrice)

  const clearCart = () => {
    dispatch(clearCartItemsAction())
    dispatch(setCartItemsQuantityAction(0))
    dispatch(setCartPrice(0))
    dispatch(setLoadingAction(true))
  }


  return (
    <Styles.CartItems>
      <Styles.TopRow>
        <div>
          <img src={cart} alt="" />
          <Heading>Кошик</Heading>
        </div>
        <Styles.EmptyCart onClick={clearCart}>
          <img src={trashCan} alt="" />
          <Typography size={'4'}>Очистити кошик</Typography>
        </Styles.EmptyCart>
      </Styles.TopRow>

      <Styles.CartItemsContainer>
        {cartItems && cartItems.map(item => (
          <CartItem
            key={item.productId}
            id={item.productId}
            image={item.image}
            name={item.name}
            productAmount={item.productAmount}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </Styles.CartItemsContainer>

      <Styles.BottomRow>
        <div>
          <Typography size={5} fontWeight={'500'}>Усього сетів ролів:</Typography>
          <Typography size={5} fontWeight={'500'} textColor={props => props.theme.colors.primary}> {cartItemsQuantity} шт.</Typography>
        </div>
        <div>
          <Typography size={5} fontWeight={'500'}>Сума замовлення:</Typography>
          <Styles.Price discountPrice={discountPrice.toFixed(0)}>
            <Typography size={5} fontWeight={'500'} discountPrice={discountPrice.toFixed(0)} textColor={props => props.theme.colors.primary}> {cartPrice} грн</Typography>
          </Styles.Price>
        </div>
      </Styles.BottomRow>

    </Styles.CartItems>
  )
}

export default CartItems
