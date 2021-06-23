import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const Navigation = styled.nav`
  padding: 16px 0;
  > * {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    > div {
      display: flex;
      ${MEDIA_QUERIES.sm} {
        justify-content: space-between;
      }
    }
  }
`

const Logo = styled.div`
  cursor: pointer;
  ${MEDIA_QUERIES.sm} {
    margin-right: 0;
    img {
      max-width: 116px;
    }
  }
`

const PhoneNumber = styled.a`
  > img {
    margin-right: 10px;
    max-width: unset;
  }
  max-width: 300px;
  display: flex;
  align-items: center;
  margin-right: 40px;
  
  ${MEDIA_QUERIES.lg} {
    margin-right: 20px;
  }
  ${MEDIA_QUERIES.md} {
    > span {
      display: none;
    }
  }
  ${MEDIA_QUERIES.sm} {
    margin-right: 14px;
    > img {
      max-width: 22px;
    }
  }
`

const Location = styled(PhoneNumber)`
`

const ItemsInCart = styled.div`
  position: absolute;
  top: 48px;
  left: 24px;
  width: 30px;
  height: 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  ${MEDIA_QUERIES.lg} {
    top: 36px;
    left: 20px;
    width: 24px;
    height: 16px;
    font-size: 12px;
  }
`

const Cart = styled.div`
  position: relative;
  cursor: pointer;
  span {
    position: relative;
    display: flex;
    background: #F9F9F9;
    border-radius: 21px;
    width: 90px;
    height: 132px;
    margin-top: -52px;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 16px;
  }
  ${MEDIA_QUERIES.lg} {
    span {
      width: 70px;
      height: 108px;
      margin-top: -70px;
      > img {
        max-width: 54px;
      }
    }
  }
  ${MEDIA_QUERIES.sm} {
    span {
      margin-top: -50px;
    }
  }
`

export {
  Navigation,
  Logo,
  PhoneNumber,
  Location,
  ItemsInCart,
  Cart
}
