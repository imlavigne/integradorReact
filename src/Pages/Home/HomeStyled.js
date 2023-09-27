import styled from "styled-components";

export const HomeContainer=styled.div`
display:flex;
flex-direction:column;

color:var(--azul);
align-items:center;
justify-content:center;

`;

export const Button =styled.button`
background-color:var(--azul);
border-radius:15px;
width:150px;
color:white;
margin:2rem;
padding:1rem;
cursor: pointer;
&:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;