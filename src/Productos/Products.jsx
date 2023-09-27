import React, { useState } from 'react'
import Product from './Product'
import { ProductsContainer, ProductsWrapper, CabezalStyled, PaginacionStyled } from './ProductsStyled'
// import { ProductsData } from '../data/ProductsData'
import { useSelector } from 'react-redux'
import { Button } from '../Pages/Home/HomeStyled'

const Products = () => {
  // console.log(ProductsData)
  const initialState = 3;
  const [limit, setLimit] = useState(initialState);
  let Productos = useSelector(state => state.products.products)  //state.produts(1).products(2)=> el 1 producte es el products reducer de la store y el products 2 es elproducts que hace referencia al productsdate
  const selectedMarcas = useSelector(state => state.marcas.selectedMarcas);

  const totalProducts = useSelector(state => state.products.totalProducts);
  // console.log(`limi:${limit}`)
  // console.log(`total:${totalProducts}`)
  // console.log(limit!=totalProducts)

  // console.log(selectedMarcas)
  if (selectedMarcas) {
    Productos = Productos.filter(p => p.marca == selectedMarcas)
  }
  // console.log(Productos)
  return (
    <ProductsContainer>
      <CabezalStyled>
        <h3>Nuestros Productos</h3>
      </CabezalStyled>
      <ProductsWrapper>
        {
          Productos.map((producto) => {
            if (limit >= producto.id || selectedMarcas) {
              return (
                <Product key={producto.id}{...producto} />
              )
            }
            else return null
          })
        }
      </ProductsWrapper>
      
        {!selectedMarcas && (
        
        <PaginacionStyled>
      <Button
       onClick={()=>setLimit(previLimit=>previLimit-initialState)}
      disabled={limit<=initialState}
      >
           VER MENOS
        </Button>
  
        

        
      
        <Button onClick={()=>setLimit(previLimit=>previLimit+initialState)}
          disabled={limit>=totalProducts}>
             VER MAS
          </Button>
        
      </PaginacionStyled>
      )}
    </ProductsContainer>
  )
}

export default Products