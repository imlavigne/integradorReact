import React from 'react'
import { MarcaConteiner, MarcaStyled } from './MacasStyled'
import Belcan from '../imagenes/logo/Belcan.png'


const Marca = ({ id, marcaImg, marca }) => {
  return (
    <MarcaConteiner  >
      
        <img
          src={marcaImg} />
     
    </MarcaConteiner>
  )
}

export default Marca