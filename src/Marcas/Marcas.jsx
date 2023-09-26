import React from 'react'
import { MarcasContainer } from './MacasStyled'
import Marca from './Marca'
// import {MarcasData} from '../data/MarcasData.js'
import { CabezalStyled, ProductsWrapper } from '../Productos/ProductsStyled'
import { useSelector } from 'react-redux'

const Marcas = () => {
    // const data=MarcasData;
    // console.log(data);

    const Marks =useSelector(state=>state.marcas.marcas)
    return (
    
    
    <MarcasContainer>
         <CabezalStyled>
                <h3>Comprá por marcas</h3>
                </CabezalStyled>
              <ProductsWrapper>  
         {
            Marks.map((mark)=>(
                <Marca key={mark.id}{...mark}/>
            ))
        }  
        </ProductsWrapper>
    </MarcasContainer>
  )
}

export default Marcas