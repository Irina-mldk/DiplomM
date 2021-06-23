import React from 'react'

import * as Styles from './styles'
import Typography from '../Typography'
import {useSelector, useDispatch} from 'react-redux'
import {addCartItemAction, removeCartItemAction, setCartItemsQuantityAction, setCartPrice} from '../../store'


const CartItem = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)
  const cartItemsQuantity = useSelector(state => state.cartItemsQuantity)
  let cartPrice = useSelector(state => state.cartPrice)


  const removeItemFromCart = () => {
    const currentItem = cartItems.filter(item => item.productId === props.id)[0].quantity
    dispatch(setCartPrice(cartPrice -= props.price))
    dispatch(setCartItemsQuantityAction(cartItemsQuantity - 1))
    if (currentItem > 1) {
      const newCartItems = cartItems.map(item => {
        if (item.productId === props.id) {
          item.quantity = item.quantity - 1
          return {...item}
        } else {
          return {...item}
        }
      })
      dispatch(removeCartItemAction(newCartItems))
    } else {
      const newCartItems = cartItems.filter(item => item.productId !== props.id)
      dispatch(removeCartItemAction(newCartItems))
    }
  }

  const removeWholeItem = () => {
    dispatch(setCartPrice(cartPrice -= props.price * props.quantity))
    dispatch(setCartItemsQuantityAction(cartItemsQuantity - props.quantity))
    const newCartItems = cartItems.filter(item => item.productId !== props.id)
    dispatch(removeCartItemAction(newCartItems))
  }

  const addItemToCart = () => {
    dispatch(setCartPrice(cartPrice += props.price))
    dispatch(setCartItemsQuantityAction(cartItemsQuantity + 1))

    const newCartItems = cartItems.map(item => {
      if (item.productId === props.id) {
        item.quantity = item.quantity + 1
        return {...item}
      } else {
        return {...item}
      }
    })
    dispatch(addCartItemAction(newCartItems))
  }

  return (
    <Styles.CartItemContainer>
      <Styles.Description>
        <Styles.ProductImage>
          <img src={props.image} alt={props.name} />
        </Styles.ProductImage>

        <Styles.Info>
          <Typography size={'5'} fontWeight={'600'}>{props.name}</Typography>
          <div>
            <Typography textColor={'#F3A229'} fontWeight={'600'}>{props.productAmount} г</Typography>
            <Typography lineHeight={'1.5'}>{props.description}</Typography>
          </div>
        </Styles.Info>
      </Styles.Description>

      <Styles.Quantity>
        <Styles.RemoveQuantityButton onClick={removeItemFromCart}>
          <Typography fontWeight={'600'} size={'6'}>-</Typography>
        </Styles.RemoveQuantityButton>

        <Styles.QuantityNumber><Typography fontWeight={'600'} size={'5'}>{props.quantity}</Typography></Styles.QuantityNumber>

        <Styles.AddQuantityButton onClick={addItemToCart}>
          <Typography fontWeight={'600'} size={'6'}>+</Typography>
        </Styles.AddQuantityButton>
      </Styles.Quantity>

      <Styles.ItemPrice>
        <Typography fontWeight={'600'} size={'5'}>{props.price * props.quantity} грн</Typography>
      </Styles.ItemPrice>


      <Styles.DeleteItemButton onClick={removeWholeItem}>
        <Typography fontWeight={'600'} size={'6'}>x</Typography>
      </Styles.DeleteItemButton>
    </Styles.CartItemContainer>
  )
}

export default CartItem
