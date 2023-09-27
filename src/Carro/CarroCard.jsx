import React from 'react'
import { ProductoContainer, ProductoPrecio,ProductoImgStyled, PProductStyled, PieCardStyled, AgregarButon } from '../Productos/ProductsStyled'
import { ButtonCantidad, CantidadProductCard, DescripcionStyled, ImgCarro, ItemPrecio, VistaCarroContainer } from './CarrosStyled'

const CarroCard = ({id,marca,descripcion,animal,productImg,precio}) => {
  return (

    <VistaCarroContainer>
     <ImgCarro>
    <img src={productImg}  />
    </ImgCarro>

    <DescripcionStyled>    
    {descripcion}
    </DescripcionStyled>
    <CantidadProductCard>
        <ButtonCantidad>-</ButtonCantidad>
            <spa>5</spa>
        <ButtonCantidad>+</ButtonCantidad>
    </CantidadProductCard>
   
    <ItemPrecio>
    ${precio}
    </ItemPrecio>
    
    
</VistaCarroContainer>
  )
}

export default CarroCard