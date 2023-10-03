import styled from "styled-components";

export const LoginStyledContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80%;
gap:0.5rem;
/* background-color:var(--azul); */
background-color:#eef3f7
 ; 
/* box-shadow: 2px 2px 1px gray;
    border: solid black;
    padding: 2rem;
    border-radius: 10px; */

`;


export const LoginStyledWraper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80%;
gap:0.5rem;
background-color:var(--azul);
box-shadow: 2px 2px 1px gray;
    border: solid black;
    padding: 2rem;
    border-radius: 10px;
margin:2rem;
`;


export const TiTularStyle = styled.h2`
align-items:center;
text-align:center;
`
    ;


export const SubmitButton = styled.button`
height:30px;
width:258px;
justify-content:center;
align-items:center;
margin-top:1rem;
background-color:#52ad7e;
`;

export const PieDeLoginStyles=styled.div`
display:flex;
flex-direction:column;
align-items:center; 
justify-content:center;
gap:0.1rem;
:last-child{
    cursor: pointer;
}
:first-child{
    cursor: pointer;
}

`;
