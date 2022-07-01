import styled from 'styled-components'

export const Container = styled.div`    
    display:flex;
    flex-direction:column;
    align-items:center;   
`   

export const Title = styled.h1`
    font-family:"Souce Sans Pro", sans-serif;
    color: #950101;
    
`

export const Termos = styled.div`
    display:flex;
    p {
        color:#222;  
        font-family:"Souce Sans Pro", sans-serif;
        margin-left: 5px;
        font-size:14px
    }
`

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    accent-color: #950101;
    
`;
 
