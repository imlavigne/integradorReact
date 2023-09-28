import React from 'react'
import { ProductoContainer, ProductoPrecio,ProductoImgStyled, PProductStyled, PieCardStyled, AgregarButon } from './ProductsStyled'
import { useDispatch } from 'react-redux'
import { addToCarro } from '../redux/carro/carroSlice';


const Product = ({id,marca,descripcion,animal,productImg,precio}) => {
const dispatch=useDispatch();

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
        <AgregarButon onClick={()=>dispatch(addToCarro({id,marca,descripcion,animal,productImg,precio}))}>
            Agregar al carrito
        </AgregarButon>
        </PieCardStyled>
    </ProductoContainer>
  )
}

export default Product