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

export const WhatssapLogoStyled=styled.div`
 text-align: center;
 cursor: pointer;
  font-size: 3.5rem;
  position: fixed;
  right: 5px;
  bottom: 10px;
  color: white;
  background-color: #168236;
  /* animation: shakeY;
  animation-duration: 10s; */
  /* color: blue; */
  /* animation-iteration-count: infinite; */
  border-radius: 50%;
  height: 80px;
  width: 80px;
  `;