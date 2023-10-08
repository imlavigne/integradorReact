import React from 'react'
import { FooterContainerStyled, LogoContainer } from './FooterStyled'
import { HiOutlineMail } from "react-icons/hi";
import { FiInstagram } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainerStyled>
            <LogoContainer>
                <a href="mailto:unomaspetfood@gmail.com">
                <HiOutlineMail />
                </a>
            </LogoContainer>
            <p>unomaspetfood@gmail.com</p>
            <LogoContainer>
                <p>Seguinos en:</p>
                <a href="https://www.instagram.com/unomas_petfood/">
                <FiInstagram />
                </a>
            </LogoContainer>
            <p>Hecho por Ignacio Lavigne</p>
        </FooterContainerStyled>

    )
}

export default Footer