import React, {useState} from 'react'

import * as Styles from './styles'
import Button from '../Button'
import Typography from '../Typography'
import {useDispatch, useSelector} from 'react-redux'
import {setCartItemsAction, setCartItemsQuantityAction, setCartPrice} from '../../store'


const ProductCard = (props) => {
  const dispatch = useDispatch()
  const cartItemsQuantity = useSelector(state => state.cartItemsQuantity)
  const cartItems = useSelector(state => state.cartItems)
  let cartPrice = useSelector(state => state.cartPrice)

  let currentQuantity = 1
  if (cartItems.length !== 0) {
    cartItems.forEach(item => {
      if (item.productId === props.id) {
        currentQuantity = item.quantity + 1
      }
    })
  }

  let [quantity, setQuantity] = useState(currentQuantity)

  const addToCart = () => {
    setQuantity(prevState => prevState + 1)
    dispatch(setCartPrice(cartPrice += props.price))
    dispatch(setCartItemsQuantityAction(cartItemsQuantity + 1))
    dispatch(setCartItemsAction({
      productId: props.id,
      image: props.image,
      name: props.name,
      productAmount: props.amount,
      description: props.description,
      price: props.price,
      quantity: quantity
    }))
  }

  return (
    <Styles.ProductCardContainer>
      <Styles.ProductImage>
        <img src={props.image} alt={props.name} />
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <Typography size={'4'} fontWeight={'500'}>{props.name}</Typography>
        <div>
          <Typography textColor={'#F3A229'} fontWeight={'600'}>{props.amount} г</Typography>
          <Typography lineHeight={'1.5'}>{props.description}</Typography>
        </div>

        <Styles.ProductBuy>
          <Button onClick={addToCart}><Typography fontWeight={'600'}>В корзину</Typography></Button>
          <Typography size={'4'} fontWeight={'600'}>{props.price} грн</Typography>
        </Styles.ProductBuy>
      </Styles.ProductInfo>

    </Styles.ProductCardContainer>
  )
}

export default ProductCard
