import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 80px;
  width: 100px;
  border-radius: 6px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;

  p {
    font-size: 1em;
    font-weight: 600;
    margin-top: 5px;
  }

  img {
    height: 2.5em;
  }
`;
