import styled, {css} from 'styled-components'
import InputMask from 'react-input-mask'
import {MEDIA_QUERIES} from '../../constants/mediaQueriesList'


const Label = styled.label`
  > input {
    border: 1px solid ${props => props.error ? 'red' : 'transparent'};
  }
`

const inputStyles = css`
  max-width: 100%;
  width: 100%;
  background-color: #f5f5f5;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  padding: 16px 24px;
  border-radius: 8px;
  outline: none;
  margin-top: 10px;
  transition: all 0.2s;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    background-color: #e0e0e0;
  }
  ${MEDIA_QUERIES.lg} {
    font-size: 16px;
  }
  ${MEDIA_QUERIES.md} {
    font-size: 14px;
  }
`

const Input = styled.input`
  ${inputStyles}
`

const PhoneInput = styled(InputMask)`
  ${inputStyles}
`

export {
  Label,
  Input,
  PhoneInput
}
