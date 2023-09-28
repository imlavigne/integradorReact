import styled from "styled-components";

export const NavbarContainerStyled =styled.div`
 background-color:var(--azul);
  font-size: 1.5rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items:center;

  position: sticky;
  width:100%;
  top:0px;
  z-index: 10;
  padding: 2rem;
  
`;


 export const LogoImg= styled.div`
 margin-top: 8px;
   width:50px ;
   /* background-color:red; */

   img{
    width :80px ;
    cursor: pointer;
   }

 `;

 export const LogoContainer =styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
 color:white;

 gap:2rem;
 font-size:50px;
 margin:5rem;
 /* background-color:red; */
 :last-child{
 cursor: pointer;
 }

 :first-child{
    cursor: pointer;
 }
 `;
 export const IniciarSesion =styled.div`
 display:flex;
 flex-direction:row;
 align-items: center;
 justify-content:center;
 p{
    font-size:0.8rem;
 }
 `;

 export const BuscarContainer= styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 gap:1rem;
 input{
    width:500px;
    height:2rem;
    border-radius:30px;
 }
 
 :last-child{
    cursor: pointer;
 }
 `;
 