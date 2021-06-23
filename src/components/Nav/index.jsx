import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

import * as Styles from './styles'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'

import logo from '../../images/logo.png'
import phone from '../../images/phone-icon.svg'
import location from '../../images/location-icon.svg'
import cart from '../../images/cart-icon.svg'


const Nav = () => {
  let history = useHistory()
  const cartItemsQuantity = useSelector(state => state.cartItemsQuantity)


  const handleClick = () => {
    history.push('/')
  }

  return (
    <Styles.Navigation>
      <BaseContainer>

        <Styles.Logo onClick={handleClick}>
          <img src={logo} alt="kiotorich" />
        </Styles.Logo>

        <div>
          <Styles.PhoneNumber href="tel: 380667735808">
            <img src={phone} alt="phone number" />
            <Typography size={'3'}>+38 (066) 773 58 08</Typography>
          </Styles.PhoneNumber>

          <Styles.Location rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=49.58619434%2C34.55096394" target="_blank">
            <img src={location} alt="location" />
            <Typography size={'2'}>м. Полтава, вул. Європейська 10. <br /> Працюємо с 11:00 до 23:00</Typography>
          </Styles.Location>

          <Link to="/cart">
            <Styles.Cart>
              <span>
                <Styles.ItemsInCart>{cartItemsQuantity}</Styles.ItemsInCart>
                <img src={cart} alt="product cart" />
              </span>
            </Styles.Cart>
          </Link>
        </div>

      </BaseContainer>
    </Styles.Navigation>

  )
}

export default Nav
