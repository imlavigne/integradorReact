import styled from "styled-components";

export const CarroContainer = styled.div`
    position: absolute;
    background-color:var(--azul) ;
    top:100px;
    right: 0px;
    /* height: 100vh; */
    width: 45%;
    z-index: 9999;
    color:white;
    /* max-height:calc(100vh-100px) */
    /* height:calc(100vh-5rem); */

    @media (max-width: 1000px) {
    width:100vw;
    /* background-color:red; */
  }
   
    
`;

export const CarroCabezal = styled.div`
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    font-size: 2rem;
    color:white;
    
    h2{
        font-size:1rem;
    }

`;
export const VerCarro1 = styled.div`
display:block;
`;

export const NoCarro1 = styled.div`
display:none;
`;

export const CarroIconos = styled.div`
color:white;
cursor: pointer;
`;
export const VistaCarro = styled.div`
display:flex;
flex-direction:column;
max-width:98%;
justify-content: space-between;
align-items: center;
/* background-color:red; */
margin:1rem;
/* overflow: scroll;

&::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  } */
`;

export const VistaCarroContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
height:inherit;
`;

export const ImgCarro = styled.div`
 /* width: 100px; */
  height: 150px;
  text-align: center;
   img{
    max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  @media (max-width: 1000px) {
    height:150px
  }
   
   
  }

`;

export const DescripcionStyled = styled.div`
/* background-color:red; */
width:300px;
align-items:center;
justify-content:center;
font-size:1rem;
@media (max-width: 1000px) {
    width:150px
  }
`;
export const CantidadProductCard = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:0.5rem;
margin:2rem;
@media (max-width: 1000px) {
   gap: 0,1rem;
   margin:0.5rem;
  }
`;

export const ButtonCantidad = styled.button`
width: 25px;
height:25px;
background-color:beige;
cursor: pointer;
`;

export const ItemPrecio = styled.div`
color:white;
font-size:2rem;
`;

export const TotalPrecio = styled.div`
max-width:90%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin:1rem;
font-size:2rem;
`;

export const PieCarroContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:2rem;
margin:2rem;
`;

export const ButtonCarro = styled.button`
width:200px;
height:40px;
border-radius:8px ;
background-color:#eef3f7;
color:var(--azul);
font-weight:900;
cursor: pointer;

`;
export const CarroStyled = styled.div`
/* background-color:red; */
display:flex;
flex-direction:row;
align-items:center;

`;

export const CarroResponsiv = styled.div`
  display:flex;
    flex-direction:row;
 @media (max-width: 1000px) {
    display:flex;
    flex-direction:column;
    gap:0;
  }
   
`;