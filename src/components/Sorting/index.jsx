import React, {useRef, useState} from 'react'

import * as Styles from './styles'
import Typography from '../Typography'
import useOutsideClick from '../../hooks/clickOutside'
import {useDispatch, useSelector} from 'react-redux'
import {setFilteredProductsAction, setProductsAction} from '../../store'

import downArrow from '../../images/down-arrow.svg'
import downArrowSorting from '../../images/down-arrow-sorting.svg'
import upArrow from '../../images/up-arrow.svg'
import sortIcon from '../../images/sort-icon.svg'


const Sorting = () => {
  const dispatch = useDispatch()
  const filteredProducts = useSelector(state => state.filteredProducts)
  const products = useSelector(state => state.products)

  const [open, setOpen] = useState(false)
  const [currentSorting, setCurrentSorting] = useState('виберіть')

  const toggleHandler = () => {
    setOpen(!open)
  }

  const closeHandler = () => {
    setOpen(false)
  }

  const sortingContainer = useRef('')
  useOutsideClick(sortingContainer, closeHandler)

  const sortByName = () => {
    let sortedProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    let sortedAllProducts = products.sort((a, b) => a.name.localeCompare(b.name))
    setCurrentSorting('назвою')
    dispatch(setFilteredProductsAction([...sortedProducts]))
    dispatch(setProductsAction([...sortedAllProducts]))
    setOpen(false)
  }

  const sortByPriceUp = () => {
    let sortedProducts = filteredProducts.sort((a, b) => a.price - b.price)
    let sortedAllProducts = products.sort((a, b) => a.price - b.price)
    setCurrentSorting('ціною (зростання)')
    dispatch(setFilteredProductsAction([...sortedProducts]))
    dispatch(setProductsAction([...sortedAllProducts]))
    setOpen(false)
  }

  const sortByPriceDown = () => {
    let sortedProducts = filteredProducts.sort((a, b) => b.price - a.price)
    let sortedAllProducts = products.sort((a, b) => b.price - a.price)
    setCurrentSorting('ціною (спадання)')
    dispatch(setFilteredProductsAction([...sortedProducts]))
    dispatch(setProductsAction([...sortedAllProducts]))
    setOpen(false)
  }


  return (
    <Styles.Sorting  onClick={toggleHandler}>
      <img src={sortIcon} alt={''} />

      <Styles.SortingTitle>
        <img src={downArrow} alt="" />
        <Typography>Сортування за:</Typography>
        <Styles.HighLighted>{currentSorting}</Styles.HighLighted>
      </Styles.SortingTitle>

      <Styles.SortingContainer isOpen={open} ref={sortingContainer}>

        <Styles.SortingItem onClick={sortByName}>
          <Typography>назвою</Typography>
        </Styles.SortingItem>

        <Styles.SortingItem onClick={sortByPriceUp}>
          <img src={upArrow} alt="" />
          <Typography>ціною</Typography>
        </Styles.SortingItem>

        <Styles.SortingItem onClick={sortByPriceDown}>
          <img src={downArrowSorting} alt="" />
          <Typography>ціною</Typography>
        </Styles.SortingItem>

      </Styles.SortingContainer>
    </Styles.Sorting>
  )
}

export default Sorting
