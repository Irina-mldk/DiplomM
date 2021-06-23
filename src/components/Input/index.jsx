import React from 'react'

import * as Styles from './styles'
import Typography from '../Typography'


const Input = (props) => {
  const onChangeHandler = event => {
    props.changeHandler(event)
  }

  return (
    <Styles.Label error={props.error}>
      <Typography size={'4'} textColor={'#ACACAC'}>{props.label}</Typography>
      {props.type === 'phoneNumber' ? (
        <Styles.PhoneInput
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChangeHandler}
          mask="+380 99-999-99-99"
          maskChar=" "
        />
      ) : (
        <Styles.Input
          placeholder={props.placeholder}
          value={props.value}
          type={props.type}
          onChange={onChangeHandler}
        />
      )}

    </Styles.Label>
  )
}

export default Input
