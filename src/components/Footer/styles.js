import styled from "styled-components";

export const Footer = styled.div`
  background: #f5f5f5;
  padding:20px 100px  40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p:first-child {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  p {
    margin-left: 5px;
  }
`;

export const RedesSociais = styled.div`
  display: flex;

  div {
    width: 35px;
    height: 35px;
    background: #950101;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 10px;
  }
`;
