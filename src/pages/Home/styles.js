import styled from 'styled-components'

export const Image = styled.img`
    height: 400px;
    width:100%;
    object-fit:cover 
`
export const Divider = styled.div`
    height: 2px;
    max-width:1200px;
    width:100%;
    background:#950101;
    display:flex;
    justify-content:center;
    margin: 25px auto; 

    div{
      z-index:1;
      margin-top:-10px;
      background-color: #fff;
      color: #222;
      font-size:18px;
      font-weight: bold; 
      padding:0 25px
    }
`
export const Email = styled.div`
  background-color: #950101;
  // height:150px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 30px ;
  
  p{
    color:#F5F5F5;
    font-size: 20px;
    margin: 0 40px;
    text-align:center
  }
`

export const InputEmail = styled.input`
  max-width: 300px;
  width:100%;
  height: 30px;
  background:#F5F5F5;
  border:none;
  border-radius: 4px;
  padding-left: 6px
`
