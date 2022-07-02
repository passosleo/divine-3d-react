import styled from "styled-components";

const bg = "#950101";
const white = "#F5F5F5";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px;
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

export const ProductContainer = styled.div`
  width: 500px;
  padding-left: 60px;
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SpacedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoldText = styled.p`
  font-weight: 600;
`;

export const OldPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const OldPrice = styled.p`
  font-size: 34px;
  margin-bottom: 2px;
  font-weight: 600;
  opacity: 0.4;
  text-decoration: line-through;
  margin-left: 10px;
`;

export const Price = styled.p`
  font-size: 54px;
  font-weight: 600;
`;

export const Conditions = styled.p`
  font-style: italic;
  text-align: right;
  margin-top: -10px;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div {
    display: flex;
    margin-top: 5px;
  }
`;

export const ColorBox = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 3px;
  margin: 0 3px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
