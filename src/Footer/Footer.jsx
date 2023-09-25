import React from 'react'
import { FooterContainerStyled, LogoContainer } from './FooterStyled'
import { HiOutlineMail } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <FooterContainerStyled>
            <LogoContainer>
                <HiOutlineMail />
            </LogoContainer>
            <p>unomaspetfood@gmail.com</p>
            <LogoContainer>
                <p>Seguinos en:</p>
                <FiInstagram />
            </LogoContainer>
            <p>Hecho por Ignacio Lavigne</p>
        </FooterContainerStyled>

    )
}

export default Footer