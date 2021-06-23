import React, {useEffect} from 'react'

import * as Styles from './styles'
import ProductCard from '../ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {setInitialProducts} from '../../store/productsAction'


const ProductCardsList = () => {
  const dispatch = useDispatch()

  const filteredProducts = useSelector(state => state.filteredProducts)

  useEffect(() => {
    dispatch(setInitialProducts())
  }, [])


  return (
    <Styles.ProductCardsListContainer>
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          amount={product.amount}
          description={product.description}
          price={product.price}
        />
      ))}
    </Styles.ProductCardsListContainer>
  )
}

export default ProductCardsList
