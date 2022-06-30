import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center
`;

export const Label = styled.label`
    width: 20px;
    height: 20px;
    background-color: #950101;
    color: white;
    border-radius: 3px;
    text-align:center
`

export const Input = styled.input`
    max-width: 500px;
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 2px solid #950101;
    margin-left: 10px;

   :focus{
        outline: none;
    }
`