import React from 'react'
import { MarcasContainer } from './MacasStyled'
import Marca from './Marca'
import {MarcasData} from '../data/MarcasData.js'
import { CabezalStyled, ProductsWrapper } from '../Productos/ProductsStyled'

const Marcas = () => {
    // const data=MarcasData;
    // console.log(data);
    return (
    
    
    <MarcasContainer>
         <CabezalStyled>
                <h3>Comprá por marcas</h3>
                </CabezalStyled>
              <ProductsWrapper>  
         {
            MarcasData.map((mark)=>(
                <Marca key={mark.id}{...mark}/>
            ))
        }  
        </ProductsWrapper>
    </MarcasContainer>
  )
}

export default Marcas