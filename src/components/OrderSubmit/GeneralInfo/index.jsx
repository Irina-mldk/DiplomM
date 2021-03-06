import React, {useEffect, useState} from 'react'

import * as Styles from './styles'
import Input from '../../Input'
import Button from '../../Button'
import Typography from '../../Typography'
import {useDispatch, useSelector} from 'react-redux'
import {setDeliveryTypeAction, setDiscountPrice, setFullInfo} from '../../../store'
import {formInputsValidation, phoneInputErrorValidation, textInputErrorValidation} from '../../../utils/formInputsValidation'


const GeneralInfo = (props) => {
  const dispatch = useDispatch()

  const allowToSubmit = useSelector(state => state.isSubmitButtonActive)
  const cartPrice = useSelector(state => state.cartPrice)
  const discountPrice = useSelector(state => state.discountPrice)
  const deliveryType = useSelector(state => state.deliveryType)

  const [active, setActive] = useState({
    orderType1: true,
    orderType2: false,
  })

  const setActivityState = (keyName) => {
    let newActives = {}
    Object.keys(active).forEach(key => {
      newActives = {...newActives, [key]: key === keyName}
    })
    return newActives
  }

  const [name, setName] = useState({value: '', error: false})
  const [phoneNumber, setPhoneNumber] = useState({value: '', error: false})
  const [sum, setSum] = useState('')

  const [selfPickup, setSelfPickup] = useState(false)

  const changeNameHandler = (event) => {
    setName({
      value: event.target.value,
      error: textInputErrorValidation(event.target.value)
    })
  }
  const changePhoneHandler = (event) => {
    setPhoneNumber({
      value: event.target.value,
      error: phoneInputErrorValidation(event.target.value)
    })
  }
  const changeSumHandler = (event) => {
    if (event.target.value.match(/^(\s*|\d+)$/g)){
      setSum(event.target.value)
    }
  }

  const orderType1Handler = () => {
    setActive(setActivityState('orderType1'))
    setSelfPickup(false)
    dispatch(setDiscountPrice(0))
  }
  const orderType2Handler = () => {
    setActive(setActivityState('orderType2'))
    setSelfPickup(true)
    dispatch(setDiscountPrice(cartPrice * 0.85))
  }

  useEffect(() => {
    if(active.orderType2){
      dispatch(setDiscountPrice(cartPrice * 0.85))
    }
  }, [cartPrice])

  useEffect(() => {
    props.setUnlockButton({...props.unlockButton, orderInfo: formInputsValidation([name, phoneNumber])})
  }, [name, phoneNumber])

  useEffect(() => {
    if(selfPickup) {
      dispatch(setDeliveryTypeAction('??????????????????'))
    } else {
      dispatch(setDeliveryTypeAction('????????????????'))
    }
  }, [selfPickup])

  useEffect(() => {
    if(allowToSubmit === true) {
      dispatch(setFullInfo({clientInfo: {
          clientName: name.value,
          phoneNumber: phoneNumber.value,
          typeOfDelivery: selfPickup ? '??????????????????' : '????????????????',
          changeFrom: sum
        },
        price: deliveryType === '????????????????' ? cartPrice : discountPrice
      }))
    }
  }, [allowToSubmit, selfPickup])



  return (
    <Styles.OrderDetails>
      <Styles.FirstContainer>
        <Input
          label={'???????? ????\'??'}
          placeholder={'?????????????? ????\'??'}
          changeHandler={changeNameHandler}
          value={name.value}
          error={name.error}
          type={'text'}
        />
        <Input
          label={'??????????????'}
          placeholder={'+380'}
          changeHandler={changePhoneHandler}
          value={phoneNumber.value}
          error={phoneNumber.error}
          type={'phoneNumber'}
        />
      </Styles.FirstContainer>

      <Styles.SecondContainer>
        <Styles.ButtonWithLabel>
          <Typography size={'4'} textColor={'#ACACAC'}>????????????????</Typography>
          <Styles.OrderType>
            <Button active={active.orderType1} onClick={orderType1Handler}>????????????????</Button>
            <Button active={active.orderType2} onClick={orderType2Handler}>??????????????????</Button>
          </Styles.OrderType>
        </Styles.ButtonWithLabel>

        <Styles.ButtonWithLabel>
          <Typography size={'4'} textColor={'#ACACAC'}>{selfPickup ? '???????????????? ??????????' : '?????? ????????????????'}</Typography>
          <Styles.InfoSpan>{selfPickup ? '?????????????????? 30 ????????????' : '?????????????????? 50 ????????????'}</Styles.InfoSpan>
        </Styles.ButtonWithLabel>

      </Styles.SecondContainer>

      <Styles.ThirdContainer>
        <Styles.ButtonWithLabel>
          <Typography size={'4'} textColor={'#ACACAC'}>????????????</Typography>
          <Styles.InfoSpan>????????????????</Styles.InfoSpan>
        </Styles.ButtonWithLabel>

        {!selfPickup && (
          <Input
            label={'?????????? ??'}
            placeholder={'????????'}
            changeHandler={changeSumHandler}
            value={sum}
            type={'text'}
          />
        )}
      </Styles.ThirdContainer>
    </Styles.OrderDetails>
  )
}

export default GeneralInfo
