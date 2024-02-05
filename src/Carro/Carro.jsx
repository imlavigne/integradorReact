import React from 'react'
import { ButtonCarro, CarroCabezal, CarroContainer, CarroIconos, PieCarroContainer, TotalPrecio, VerCarro, VistaCarro } from './CarrosStyled'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import CarroCard from './CarroCard';
import { clearCarro, toggleHiddenCarro, confirmarCompra } from '../redux/carro/carroSlice';
import './Carrocss.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { SubmitButton } from '../Pages/Login/LoginStyled';



const Carro = () => {


    const currentUser = useSelector(state => state.user.currentUser);

    const { carroItems, hidden: hiddenCart } = useSelector(state => state.carro)
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)
    const navigate = useNavigate()
    const TotalCarro = carroItems.reduce((acc, item) => (acc += item.cantidad * item.precio), 0)




    return (
        
        <CarroContainer className={hiddenCart ? 'VerCarro' : 'VerCarronot'}>
         
            <CarroCabezal>
                <h2>TU CARRITO</h2>
                <CarroIconos onClick={() => dispatch(toggleHiddenCarro())}>
                    <AiOutlineClose />
                </CarroIconos >
            </CarroCabezal>
            <hr />

            <VistaCarro>
                {
                    carroItems.map(p => (
                        <CarroCard key={p.id}{...p} />

                    ))}

            </VistaCarro>
            <hr />
            <TotalPrecio>
                <p>TOTAL</p> <p>$ {TotalCarro}</p>
            </TotalPrecio>
            <PieCarroContainer>

           
                <ButtonCarro onClick={currentUser ?  ()=>navigate('/despachar') : ()=>navigate('/login')}>
                   
                    COMPRAR
                    
                </ButtonCarro>
               


                <ButtonCarro onClick={() => dispatch(clearCarro())} >
                    VACIAR CARRO
                </ButtonCarro>
            </PieCarroContainer>
        </CarroContainer>

    )
}

export default Carro