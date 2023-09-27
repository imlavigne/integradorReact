import React, { useRef } from 'react'
import Marcas from '../../Marcas/Marcas'

import { HomeContainer, Button } from './HomeStyled'
import Products from '../../Productos/Products'
import { AgregarButon, CabezalStyled } from '../../Productos/ProductsStyled'
import Carro from '../../Carro/Carro'

const Home = () => {

    const productsRef=useRef()
    const doScroll=()=>{
        window.scrollTo({productsRef})
    }

    return (
        <HomeContainer>
            <Carro/>
            <Marcas />
            <Products ref={productsRef} />

          
        </HomeContainer>
        
    )
}

export default Home