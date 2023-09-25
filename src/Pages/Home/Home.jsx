import React from 'react'
import Marcas from '../../Marcas/Marcas'
import { HomeContainer, Button } from './HomeStyled'
import Products from '../../Productos/Products'
import { AgregarButon, CabezalStyled } from '../../Productos/ProductsStyled'

const Home = () => {
    return (
        <HomeContainer>
           
            <Marcas />
            <Products />

            <Button>
           VER MAS
        </Button>
        </HomeContainer>
        
    )
}

export default Home