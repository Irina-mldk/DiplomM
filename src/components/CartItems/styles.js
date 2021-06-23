import styled, {css} from 'styled-components'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const CartItems = styled.div`
  padding-bottom: 70px;
  ${MEDIA_QUERIES.md} {
    padding-bottom: 40px;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    > * {
      :nth-child(1){
        width: 48px;
        margin-right: 24px;
        ${MEDIA_QUERIES.sm} {
          width: 32px;
          margin-right: 8px;
        }
      }
    }
  }
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  
`

const EmptyCart = styled.div`
  display: flex;
  color: #A39F9F;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: ${props => props.theme.colors.black};
    transform: translateY(2px);
  }
  img {
    max-width: 30px;
  }
`

const CartItemsContainer = styled.div`
  padding: 40px 0;
  > * {
    margin: 28px 0;
  }
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERIES.sm} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
  }
`

const Price = styled.span`
  > * {
    ${props => props.discountPrice > 0 ? css`
      text-decoration: line-through;
      position: relative;
      ::after {
        content: '${props.discountPrice} грн';
        position: absolute;
        top: -20px;
        right: -14px;
        font-weight: 700;
        ${MEDIA_QUERIES.sm} {
          top: -12px;
        }
      }
    ` :null
  }
`

export {
  CartItems,
  EmptyCart,
  TopRow,
  CartItemsContainer,
  BottomRow,
  Price
}
