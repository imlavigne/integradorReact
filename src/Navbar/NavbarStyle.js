import styled from "styled-components";

export const NavbarContainerStyled =styled.div`
 background-color:var(--azul);
  font-size: 1.5rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items:center;

  position: sticky;
  width:100%;
  top:0px;
  z-index: 10;
  padding: 2rem;
  max-width:100vw;
  @media (max-width: 1000px) {
    width:100vw;
    /* background-color:red; */
    padding:0rem;
    height:100px;
 
  }
  
`;


 export const LogoImg= styled.div`
 margin-top: 8px;
   width:50px ;
   /* background-color:red; */

   img{
    width :80px ;
    cursor: pointer;
   }

   @media (max-width: 1000px) {
    margin:1rem;
 
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
 @media (max-width: 1000px) {
   gap:1rem;
 font-size:30px;
 margin:1rem;
 /* width:100%; */
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
 @media (max-width: 1000px) {
    p{
      display:none;
      /* background-color:red; */
    }
  }
 `;

 export const BuscarContainer= styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 display:none;
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
 export const SpanStyled=styled.div`
 /* background-color:yellow; */

  font-size:1.5rem;
 
  /* top:38px; */

  
/* border:solid ; */
/* border-radius:100%; */
 
 `;