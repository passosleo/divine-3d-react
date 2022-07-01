import styled from "styled-components";

const bg = "#950101";
const white = "#F5F5F5";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  padding: 60px;
`;

export const ProductContainer = styled.div`
  display: flex;

  div {
    width: 500px;
    padding-left: 60px;
  }
`;

export const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 24px;
  cursor: pointer;
  transition: 300ms;

  :hover {
    transform: scale(1.05);
    transition: 300ms;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
`;
