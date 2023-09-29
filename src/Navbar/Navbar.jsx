import React from 'react'
import { BuscarContainer, IniciarSesion, LogoContainer, LogoImg, NavbarContainerStyled, SpanStyled } from './NavbarStyle'
import logo1mas2 from '../imagenes/logo/logo1mas2.png'
import { BiSolidUser } from "react-icons/bi";
import { MdTrolley } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCarro } from '../redux/carro/carroSlice';
import { CarroStyled } from '../Carro/CarrosStyled';


const Navbar = () => {

    const dispatch = useDispatch();
    const { carroItems } = useSelector(state => state.carro)
    const totalCartItem = useSelector(state => state.carro.carroItems).
        reduce((acc, item) => (acc += item.cantidad),
            0)




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
                <CarroStyled onClick={() => dispatch(toggleHiddenCarro())}>
                    <MdTrolley />
                   <SpanStyled>
                        {totalCartItem}
                     </SpanStyled>
                </CarroStyled>
                <IniciarSesion >
                    <BiSolidUser />
                    <p>INICIAR SESION</p>
                </IniciarSesion>
            </LogoContainer>
        </NavbarContainerStyled>
    )
}

export default Navbar