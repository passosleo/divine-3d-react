import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px;
  align-items: center;
  margin-bottom: 15px;

  input {
    accent-color: #950101;
    margin-right: 15px;
  }
`;

export const Utils = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Text = styled.p`
  font-size: 1.2em;
  font-weight: 600;
`;

export const Preço = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
`;
