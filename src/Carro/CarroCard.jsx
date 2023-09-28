import React from 'react'
import { ProductoContainer, ProductoPrecio,ProductoImgStyled, PProductStyled, PieCardStyled, AgregarButon } from '../Productos/ProductsStyled'
import { ButtonCantidad, CantidadProductCard, DescripcionStyled, ImgCarro, ItemPrecio, VistaCarroContainer } from './CarrosStyled'
import { useDispatch, useSelector } from 'react-redux'
import { addToCarro, removeToCarro } from '../redux/carro/carroSlice'

const CarroCard = ({id,marca,descripcion,animal,productImg,precio,cantidad}) => {
  const dispatch =useDispatch()
  const {carroItems}=useSelector(state=>state.carro)
  
  return (

    <VistaCarroContainer>
     <ImgCarro>
    <img src={productImg}  />
    </ImgCarro>

    <DescripcionStyled>    
    {descripcion}
    </DescripcionStyled>
    <CantidadProductCard>
        <ButtonCantidad onClick={()=>dispatch(removeToCarro(id))}>-</ButtonCantidad>
            <spa>{cantidad}</spa>
        <ButtonCantidad onClick={()=> dispatch(addToCarro({id,marca,descripcion,animal,productImg,precio,cantidad}))}>+</ButtonCantidad>
    </CantidadProductCard>
   
    <ItemPrecio>
    ${precio*cantidad}
    </ItemPrecio>
    
    
</VistaCarroContainer>
  
  )
}

export default CarroCard