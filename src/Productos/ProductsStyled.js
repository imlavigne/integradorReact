import styled from "styled-components";

export const ProductsContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color:white;    
  border-radius: 16px;
  width: 100%;

`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 1rem;
  /* background-color: #168236; */
  padding-bottom: 1.5rem;
`;

export const ProductoContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;    
  border-radius: 8px;
  max-width:200px;
  height:400px;
  gap: 0.1rem;
  background-color: #eef3f7;
`;
export const ProductoImgStyled = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
   img{
    max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  }


  `;
export const PProductStyled=styled.div`
  font-size: 16px;
  text-align: center;
  min-height: 5rem;
  color: #333;
  font-weight: 100;
`;

export const ProductoPrecio = styled.div`
  font-size: 20px;    
  color: #333;
  font-weight: 700;
  `;

export const AgregarButon = styled.button`
background:var(--azul);
border-radius:10px;
color:white;
cursor: pointer;
padding:0.5rem;
  
  `;

export const PieCardStyled=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:1rem;
`;
export const CabezalStyled = styled.h3`
  font-size: 19px;
   padding: 10px;
   `;