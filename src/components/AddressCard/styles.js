import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 15px;
  border-radius: 12px;
  background-color: #f5f5f5;
  margin: 5px;

  div:first-child {
    display: flex;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    width: 80px;
    height: 30px;
    border-radius: 6px;
    background-color: #950101;
    border: none;
    outline: none;
    margin-top: 40px;
    width: 80%;
    color: #f5f5f5;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
