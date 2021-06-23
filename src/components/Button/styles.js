import styled, {css} from 'styled-components'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const Button = styled.span`
  cursor: pointer;
  padding: 14px 24px;
  border-radius: 30px;
  display: inline-block;
  font-weight: 600;
  border: 1px solid ${props => props.theme.colors.primary};
  transition: all 0.2s;
  ${props => props.active ? css`
    background-color: ${props.allowToSubmit ? props.theme.colors.primary : '#aaaaaa'};
    color: #fff;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${props.allowToSubmit ? '#fab548' : '#e0e0e0'};
      }
    }
    &:active {
      background-color: ${props.allowToSubmit ? '#dc8900' : '#a8a8a8'};
    }
  ` : css`
    background-color: #fff;
    color: ${props => props.theme.colors.black};
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    }
  `}
  ${MEDIA_QUERIES.lg} {
    padding: 10px 18px;
    font-size: 14px;
  }
`

Button.defaultProps = {
  active: true,
  allowToSubmit: true
}

export {
  Button
}
