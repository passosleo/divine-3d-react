import styled from 'styled-components'

export const Container = styled.div`
    display:flex; 
    justify-content:center;
    align-items:center
`;

export const Label = styled.label`
    width: 20px;
    height: 20px;
    background-color: #950101;
    color: white;
    border-radius: 3px;
    font-family:"Souce Sans Pro", sans-serif;
    font-weight:600;
    font-size:12px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center
    `

export const Input = styled.input`  
    height: 35px;
    width: 500px;
    border: none;
    border-bottom: 2px solid #950101;
    margin: 5px 10px;   
   :focus{
        outline: none;
    }
`

