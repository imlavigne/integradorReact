import styled from "styled-components";

export const MarcasContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
color:var(--azul);
align-items:center;
justify-content:center;
gap:1rem;
`;

export const MarcaConteiner= styled.div`
background-color:#eef3f7;
  width: 100px;
  height:100px;
  border-radius: 100%;
  margin:1rem;
  cursor: pointer;
  img{
    background-position: center center;
  background-size: contain;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  border-radius: 100%;
  object-fit:contain;
  }
`;

