import React from 'react'
import { BuscarContainer, IniciarSesion, LogoContainer, LogoImg, NavbarContainerStyled, SpanStyled } from './NavbarStyle'
import logo1mas2 from '../imagenes/logo/logo1mas2.png'
import { BiSolidUser } from "react-icons/bi";
import { MdTrolley } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCarro } from '../redux/carro/carroSlice';
import { CarroStyled } from '../Carro/CarrosStyled';
import { Link } from 'react-router-dom';
import Carro from '../Carro/Carro';


const Navbar = () => {
const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const { carroItems } = useSelector(state => state.carro)
    const totalCartItem = useSelector(state => state.carro.carroItems).
        reduce((acc, item) => (acc += item.cantidad),
            0)




    return (
        <>
       
        <NavbarContainerStyled>

            <Link to='/'>
                <LogoImg>
                    <img src={logo1mas2} alt='logo' />
                </LogoImg>
                </Link>


            {/* <BuscarContainer>
                <input type='text' />
                <BsSearch />

            </BuscarContainer> */}
            <LogoContainer>
                <CarroStyled onClick={() => dispatch(toggleHiddenCarro())}>
                    <MdTrolley />
                    <SpanStyled>
                        {totalCartItem}
                    </SpanStyled>
                </CarroStyled>
                <Link to='/login'>
                <IniciarSesion >
                    <BiSolidUser />
                    <p>{currentUser ? `${currentUser.nombre}` : 'Inicia Sesión'}</p>
                </IniciarSesion>
                </Link>
            </LogoContainer>
        </NavbarContainerStyled>
        </>
    )
}

export default Navbar