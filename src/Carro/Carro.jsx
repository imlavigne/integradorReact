import React from 'react'
import { ButtonCarro, CarroCabezal, CarroContainer, CarroIconos, PieCarroContainer, TotalPrecio, VistaCarro } from './CarrosStyled'
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux'
import CarroCard from './CarroCard';

const Carro = () => {
    const Productos = useSelector(state => state.products.products)
     const pepe= Productos.slice(1,4)
     console.log(pepe)
    return (
        <CarroContainer>
            <CarroCabezal>
                <h2>TU CARRITO</h2>
                <CarroIconos>
                    <AiOutlineClose />
                </CarroIconos >
            </CarroCabezal>
            <hr />

            <VistaCarro>
                {
                    pepe.map(p=>(
                 <CarroCard key={p.id}{...p} />
                
               )) }

            </VistaCarro>
            <hr />
            <TotalPrecio>
                <p>TOTAL</p> <p>$ 5555</p>
            </TotalPrecio>
            <PieCarroContainer>
                <ButtonCarro>
                    COMPRAR
                </ButtonCarro>
                <ButtonCarro>
                    VACIAR CARRO
                </ButtonCarro>
            </PieCarroContainer>
        </CarroContainer>
    )
}

export default Carro