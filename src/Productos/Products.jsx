import React from 'react'
import Product from './Product'
import { ProductsContainer, ProductsWrapper,CabezalStyled } from './ProductsStyled'
import { ProductsData } from '../data/ProductsData'

const Products = () => {
    console.log(ProductsData)
  return (
    <ProductsContainer>
        <CabezalStyled>
        <h3>Nuestros Productos</h3>
        </CabezalStyled>
        <ProductsWrapper>
        {
            ProductsData.map((producto)=>(
                <Product key={producto.id}{...producto}/>
            ))
        }
        </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products