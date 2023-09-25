import React from 'react'
import { BuscarContainer, IniciarSesion, LogoContainer, LogoImg, NavbarContainerStyled } from './NavbarStyle'
import logo1mas2 from '../imagenes/logo/logo1mas2.png'
import { BiSolidUser } from "react-icons/bi";
import { MdTrolley } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            

            <LogoImg>
                <img src={logo1mas2} alt='logo' />
            </LogoImg>



            {/* <BuscarContainer>
                <input type='text' />
                <BsSearch />

            </BuscarContainer> */}
            <LogoContainer>
                
                <MdTrolley />
                <IniciarSesion>
                    <BiSolidUser />
                    <p>INICIAR SESION</p>
                </IniciarSesion>
            </LogoContainer>
        </NavbarContainerStyled>
    )
}

export default Navbar