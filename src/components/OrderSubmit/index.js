import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import GeneralInfo from './GeneralInfo'
import Map from './Map'
import {setSubmitButtonActiveAction} from '../../store'


const OrderSubmit = () => {
  const dispatch = useDispatch()

  const deliveryType = useSelector(state => state.deliveryType)

  const [unlockButton, setUnlockButton] = useState({
    orderInfo: false,
    addressInfo: false
  })


  useEffect(() => {
    if (deliveryType === 'Самовивіз') {
      dispatch(setSubmitButtonActiveAction(unlockButton.orderInfo))
    }
    if (deliveryType === 'Доставка') {
      dispatch(setSubmitButtonActiveAction(Object.values(unlockButton).every(Boolean)))
    }
  }, [unlockButton, deliveryType])

  return (
    <>
      <GeneralInfo unlockButton={unlockButton} setUnlockButton={setUnlockButton} />
      <Map unlockButton={unlockButton} setUnlockButton={setUnlockButton} />
    </>
  )
}

export default OrderSubmit
