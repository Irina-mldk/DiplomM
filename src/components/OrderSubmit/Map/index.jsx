import React, {useEffect, useState} from 'react'
import GoogleMapReact from 'google-map-react'

import * as Styles from './styles'
import Input from '../../Input'
import Heading from '../../Heading'
import Typography from '../../Typography'
import {formInputsValidation, textInputErrorValidation} from '../../../utils/formInputsValidation'

import gps from '../../../images/gps.svg'
import {useDispatch, useSelector} from 'react-redux'
import {setFullInfo} from '../../../store'


const WeAreOnTheMap = (props) => {
  return (
    <Styles.Marker>
      <Typography>{props.text}</Typography>
      <Typography textColor={'#2980b9'}>Вул. Європейська, 10</Typography>
    </Styles.Marker>
  )
}

const SelectedPosition = () => {
  return (
    <>
      <img width={'40px'} src={gps} alt={''} />
    </>
  )
}


const Map = (props) => {
  const dispatch = useDispatch()

  const deliveryType = useSelector(state => state.deliveryType)
  const allowToSubmit = useSelector(state => state.isSubmitButtonActive)

  const [latLng, setLangLng] = useState({lat: 49.58619434, lng: 34.55096394})

  const [street, setStreet] = useState({value: '', error: false})
  const [flatNumber, setFlatNumber] = useState({value: '', error: false})
  const [floorNumber, setFloorNumber] = useState({value: '', error: false})


  const changeStreetHandler = (event) => {
    setStreet({
      value: event.target.value,
      error: textInputErrorValidation(event.target.value)
    })
  }

  const changeFlatNumberHandler = (event) => {
    if (event.target.value.match(/^(\s*|\d+)$/g)) {
      setFlatNumber({
        value: event.target.value,
        error: textInputErrorValidation(event.target.value)
      })
    }
  }

  const changeFloorNumberHandler = (event) => {
    if (event.target.value.match(/^(\s*|\d+)$/g)) {
      setFloorNumber({
        value: event.target.value,
        error: textInputErrorValidation(event.target.value)
      })
    }
  }

  useEffect(() => {
    props.setUnlockButton({...props.unlockButton, addressInfo: formInputsValidation([street, flatNumber, floorNumber])})
  }, [street, flatNumber, floorNumber])

  useEffect(() => {
    if (allowToSubmit === true && deliveryType === 'Доставка') {
      dispatch(setFullInfo({
        address: {
          streetName: street.value,
          flatNumber: flatNumber.value,
          floorNumber: floorNumber.value,
        }
      }))
    }
  }, [allowToSubmit, deliveryType])


  const getLanLng = (event) => {
    const lat = event.lat
    const lng = event.lng
    setLangLng({lat: lat, lng: lng})

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setStreet({
          ...street,
          value: `${data.results[0].address_components[1].long_name}, ${data.results[0].address_components[0].long_name}`
        })
      })
  }

  return (
    <>
      <Heading>Оберіть адресу доставки за допомогою карти!</Heading>
      <Styles.MapContainer id={'map'}>
        <GoogleMapReact
          bootstrapURLKeys={{key: `${process.env.REACT_APP_API_KEY}`}}
          defaultZoom={15}
          defaultCenter={{lat: 49.58619434, lng: 34.55096394}}
          yesIWantToUseGoogleMapApiInternals
          onClick={getLanLng}
        >
          <WeAreOnTheMap
            lat={49.58619434}
            lng={34.55096394}
            text={'Ми знаходимось тут!'}
          />
          <SelectedPosition
            lat={latLng.lat}
            lng={latLng.lng}
          />
        </GoogleMapReact>
      </Styles.MapContainer>


      {deliveryType === 'Доставка' &&
      <Styles.AddressContainer>
        <Input
          label={'Вулиця'}
          placeholder={'Вулиця, номер будинку'}
          changeHandler={changeStreetHandler}
          value={street.value}
          error={street.error}
          type={'text'}
        />
        <Input
          label={'Номер квартири'}
          placeholder={'Номер квартири'}
          changeHandler={changeFlatNumberHandler}
          value={flatNumber.value}
          error={flatNumber.error}
          type={'text'}
        />
        <Input
          label={'Поверх'}
          placeholder={'Поверх'}
          changeHandler={changeFloorNumberHandler}
          value={floorNumber.value}
          error={floorNumber.error}
          type={'text'}
        />
      </Styles.AddressContainer>
      }
    </>
  )
}

export default Map
