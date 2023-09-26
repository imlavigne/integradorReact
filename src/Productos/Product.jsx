import React from 'react'
import { ProductoContainer, ProductoPrecio,ProductoImgStyled, PProductStyled, PieCardStyled, AgregarButon } from './ProductsStyled'


const Product = ({id,marca,descripcion,animal,productImg,precio}) => {
  return (
    <ProductoContainer>
        <ProductoImgStyled>
        <img src={productImg}  />
        <PProductStyled>
        {descripcion}
        </PProductStyled>
        </ProductoImgStyled>
        <PieCardStyled>
        <ProductoPrecio>
        ${precio}
          
        </ProductoPrecio>
        <AgregarButon>
            Agregar al carrito
        </AgregarButon>
        </PieCardStyled>
    </ProductoContainer>
  )
}

export default Product