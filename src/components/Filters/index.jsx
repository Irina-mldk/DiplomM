import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'

import * as Styles from './styles'
import Button from '../Button'
import {setFilteredProductsAction} from '../../store'


const Filters = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  const [active, setActive] = useState({
    filterAll: true,
    filterClassic: false,
    filterMaki: false,
    filterDragons: false,
    filterBaked: false,
    filterFelix: false,
    filterSweet: false,
  })

  const setActivityState = (keyName) => {
    let newActives = {}
    Object.keys(active).forEach(key => {
      newActives = {...newActives, [key]: key === keyName}
    })
    return newActives
  }


  const filterAll = () => {
    dispatch(setFilteredProductsAction(products))
    setActive(setActivityState('filterAll'))
  }

  const filterClassic = () => {
    let filteredProducts = products.filter((product) => product.type === 'classic')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterClassic'))
  }

  const filterMaki = () => {
    let filteredProducts = products.filter((product) => product.type === 'maki')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterMaki'))
  }

  const filterDragons = () => {
    let filteredProducts = products.filter((product) => product.type === 'dragon')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterDragons'))
  }

  const filterBaked = () => {
    let filteredProducts = products.filter((product) => product.type === 'baked')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterBaked'))
  }

  const filterFelix = () => {
    let filteredProducts = products.filter((product) => product.type === 'felix')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterFelix'))
  }

  const filterSweet = () => {
    let filteredProducts = products.filter((product) => product.type === 'sweet')
    dispatch(setFilteredProductsAction(filteredProducts))
    setActive(setActivityState('filterSweet'))
  }


  return (
    <>
      <Styles.StyledSwiper slidesPerView={3} allowTouchMove={window.innerWidth < 769}  spaceBetween={0} freeMode={true} >
        <SwiperSlide><Button active={active.filterAll} onClick={filterAll}>Усе</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterClassic} onClick={filterClassic}>Класичні</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterMaki} onClick={filterMaki}>Маки</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterDragons} onClick={filterDragons}>Дракони</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterBaked} onClick={filterBaked}>Запечені</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterFelix} onClick={filterFelix}>Фелікси</Button></SwiperSlide>
        <SwiperSlide><Button active={active.filterSweet} onClick={filterSweet}>Солодкі</Button></SwiperSlide>
      </Styles.StyledSwiper>
    </>
  )
}

export default Filters
