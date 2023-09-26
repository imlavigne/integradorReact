import React from 'react'
import { MarcaConteiner, MarcaStyled } from './MacasStyled'

import { useDispatch, useSelector } from 'react-redux'
import { selecteMarcas } from '../redux/marcas/marcasSlice'


const Marca = ({ id, marcaImg, marca }) => {
  const selectedMarcas=useSelector(state=>state.marcas.selectedMarcas)
  const dispatch=useDispatch()
  return (
    <MarcaConteiner  
      selected={marca===selectedMarcas}
      onClick={()=>dispatch(selecteMarcas(marca))}
      whileTap={{ scale: 0.95 }}
      >
        <img
          src={marcaImg} />
     
    </MarcaConteiner>
  )
}

export default Marca