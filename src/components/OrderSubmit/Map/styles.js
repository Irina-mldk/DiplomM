import styled from 'styled-components'
import {MEDIA_QUERIES} from '../../../constants/mediaQueriesList'


const MapContainer = styled.div`
  padding: 20px 0;
  height: 600px;
`

const Marker = styled.div`
  width: 160px;
  height: 50px;
  padding: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: #fff;
  position: relative;
  > span {
    display: inline-block;
    font-size: 14px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 20px; bottom: -20px;
    border: 10px solid transparent;
    border-top: 10px solid ${props => props.theme.colors.primary};
  }
`

const AddressContainer = styled.div`
  display: flex;
  padding: 40px 0;
  column-gap: 60px;
  row-gap: 40px;
  > * {
    &:nth-child(2) {
      max-width: 240px;
    }
    &:nth-child(3) {
      max-width: 240px;
    }
  }
  ${MEDIA_QUERIES.lg} {
    > * {
      &:nth-child(2) {
        max-width: 200px;
      }
      &:nth-child(3) {
        max-width: 200px;
      }
    }
  }
  ${MEDIA_QUERIES.md} {
    flex-wrap: wrap;
    > * {
      &:nth-child(2) {
        max-width: 180px;
      }
      &:nth-child(3) {
        max-width: 180px;
      }
    }
  }
  ${MEDIA_QUERIES.sm} {
    > * {
      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        max-width: calc(50% - 30px);
      }
      &:nth-child(3) {
        max-width: calc(50% - 30px);
      }
    }
  }
`

export {
  MapContainer,
  AddressContainer,
  Marker
}
