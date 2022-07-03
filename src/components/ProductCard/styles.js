import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 12px;
  background-color: #f5f5f5;
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }
`;

export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;

  p {
    font-size: 18px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Button = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  background-color: #950101;
  margin: 0 8px;
  cursor: pointer;
  border: none;
  outline: none;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;
