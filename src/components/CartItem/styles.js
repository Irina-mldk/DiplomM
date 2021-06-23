import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${MEDIA_QUERIES.sm} {
  }
`

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 584px;
  width: 100%;
  ${MEDIA_QUERIES.lg} {
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
    max-width: 240px;
  }
  ${MEDIA_QUERIES.sm} {
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
    max-width: 140px;
  }
  ${MEDIA_QUERIES.xs} {
    max-width: 90px;
  }
`


const ProductImage = styled.span`
  > img {
    height: 96px;
  }
  margin-right: 40px;
  max-width: 184px;
  width: 100%;
  ${MEDIA_QUERIES.sm} {
    margin: 0;
    > img {
      height: 72px;
    }
  }
  ${MEDIA_QUERIES.xs} {
    margin: 0;
    > img {
      height: 48px;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  > * {
    :nth-child(1){
      margin-bottom: 10px;
    }
  }
  
  ${MEDIA_QUERIES.sm} {
    > div {
      display: none;
    }
  }
`

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  flex-grow: 1;
  ${MEDIA_QUERIES.md} {
    max-width: 140px;
  }
  ${MEDIA_QUERIES.sm} {
    max-width: 110px;
  }
  ${MEDIA_QUERIES.xs} {
    max-width: 90px;
  }
`

const ButtonExample = styled.span`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  user-select: none;
  ${MEDIA_QUERIES.md} {
    width: 32px;
    height: 32px;
  }
  ${MEDIA_QUERIES.xs} {
    width: 24px;
    height: 24px;
  }
`

const QuantityNumber = styled.div`
  padding: 4px 16px;
  max-width: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${MEDIA_QUERIES.sm} {
    padding: 4px 4px;
    max-width: 40px;
  }
`

const RemoveQuantityButton = styled(ButtonExample)``

const AddQuantityButton = styled(ButtonExample)``

const DeleteItemButton = styled(ButtonExample)`
  border: 2px solid #999999;
  color: #999999;
  ${MEDIA_QUERIES.sm} {
    position: absolute;
    right: 0;
    top: -10px;
  }
`

const ItemPrice = styled.div`
  max-width: 110px;
  width: 100%;
  text-align: center;
  ${MEDIA_QUERIES.sm} {
    max-width: 80px;
  }
`

export {
  CartItemContainer,
  Description,
  ProductImage,
  Info,
  Quantity,
  RemoveQuantityButton,
  AddQuantityButton,
  DeleteItemButton,
  QuantityNumber,
  ItemPrice
}

