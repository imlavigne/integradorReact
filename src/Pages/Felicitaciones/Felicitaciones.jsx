import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { Button, FelicitacionesContainer, FelicitacionesLogo } from './FelicitacionesStyled';
import { Link } from 'react-router-dom';

const Felicitaciones = () => {
  return (
    <FelicitacionesContainer>
        <h1> FELICITACIONES!!!</h1>
        <FelicitacionesLogo>
    <FaRegCheckCircle/>
    </FelicitacionesLogo>

    <h3> Tu pedido realizado con exito </h3>
    <Button>
        <Link to='/home'>
        Volver
        </Link>
    </Button>
    </FelicitacionesContainer>
        
  )
}

export default Felicitaciones