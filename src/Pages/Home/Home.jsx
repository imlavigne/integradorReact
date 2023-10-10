import React, { useRef } from 'react'
import Marcas from '../../Marcas/Marcas'

import { HomeContainer, Button, WhatssapLogoStyled } from './HomeStyled'
import Products from '../../Productos/Products'
import { AgregarButon, CabezalStyled } from '../../Productos/ProductsStyled'
import Carro from '../../Carro/Carro'
import {BsWhatsapp} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { toggleHiddenCarro } from '../../redux/carro/carroSlice'

const Home = () => {
    
    return (
        <HomeContainer >
            {/* <Carro/> */}
            <Marcas />
            <Products  />
            <WhatssapLogoStyled>
            <a href="https://api.whatsapp.com/send?phone=5492944502697&text=" class="whatsapp">
            <BsWhatsapp/>
            </a>
            </WhatssapLogoStyled>
            
        </HomeContainer>
        
    )
}

export default Home