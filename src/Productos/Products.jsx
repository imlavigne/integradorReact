import React from 'react'
import Product from './Product'
import { ProductsContainer, ProductsWrapper,CabezalStyled } from './ProductsStyled'
// import { ProductsData } from '../data/ProductsData'
import { useSelector } from 'react-redux'

const Products = () => {
    // console.log(ProductsData)
const Productos= useSelector(state=>state.products.products)  //state.produts(1).products(2)=> el 1 producte es el products reducer de la store y el products 2 es elproducts que hace referencia al productsdate

  return (
    <ProductsContainer>
        <CabezalStyled>
        <h3>Nuestros Productos</h3>
        </CabezalStyled>
        <ProductsWrapper>
        {
            Productos.map((producto)=>(
                <Product key={producto.id}{...producto}/>
            ))
        }
        </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products