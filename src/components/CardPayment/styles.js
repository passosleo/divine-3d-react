import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 63px;
  width: 82px;
  border-radius: 6px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;

  p {
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 5px;
  }
`;
