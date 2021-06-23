import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../../constants/mediaQueriesList'


const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  gap: 50px 40px;
  flex-wrap: wrap;
  ${MEDIA_QUERIES.sm} {
    gap: 40px 20px;
  }
`

const OrderType = styled.div`
  background-color: #E3E3E3;
  border-radius: 30px;
  display: flex;
  flex-grow: 1;

  > * {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;

    &:nth-child(2) {
      position: relative;

      &::after {
        content: '-15%';
        width: 44px;
        height: 44px;
        position: absolute;
        border-radius: 50%;
        border: 4px solid #fff;
        background-color: ${props => props.theme.colors.black};
        font-size: 14px;
        top: -12px;
        color: #fff;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${MEDIA_QUERIES.md} {
          top: -20px;
          right: -20px;
      }
    }
  }
}
`

const ButtonWithLabel = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    :nth-child(2) {
      margin-top: 10px;
    }
  }
`

const InfoSpan = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  border-radius: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
  ${MEDIA_QUERIES.lg} {
    font-size: 14px;
    padding: 16px 0;
  }
`

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  row-gap: 30px;
  ${MEDIA_QUERIES.lg} {
    max-width: 240px;
  }
  ${MEDIA_QUERIES.md} {
    max-width: 200px;
  }
  ${MEDIA_QUERIES.sm} {
    max-width: 180px;
    order: 1;
  }
`

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  flex-grow: 1;
  row-gap: 30px;
  ${MEDIA_QUERIES.lg} {
    max-width: 260px;
  }
`

const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 170px;
  width: 100%;
  justify-content: space-between;
  row-gap: 28px;
  ${MEDIA_QUERIES.lg} {
    max-width: 140px;
  }
  ${MEDIA_QUERIES.sm} {
    max-width: 120px;
    order: 2;
  }
  ${MEDIA_QUERIES.xs} {
    max-width: 100px;
  }
`

export {
  OrderDetails,
  OrderType,
  ButtonWithLabel,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  InfoSpan
}
