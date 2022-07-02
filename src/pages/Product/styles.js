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
  width: 550px;
  height: 550px;
  border-radius: 24px;
  cursor: pointer;
  transition: 300ms;

  :hover {
    transform: scale(1.05);
    transition: 300ms;
  }
`;

export const ProductContainer = styled.div`
  width: 470px;
  padding-left: 60px;
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SpacedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
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

export const JustifyEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Colors = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const ColorBox = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 3px;
  margin: 0 3px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const SimulationInput = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Input = styled.input`
  border: 1px solid #d7d7d7;
  outline: none;
  padding: 0 10px;
  border-radius: 6px 0 0 6px;
  height: 28px;
`;

export const Button = styled.button`
  font-family: Source Sans Pro, sans-serif;
  height: 30px;
  background-color: ${bg};
  color: ${white};
  border-radius: 0 6px 6px 0;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const DeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
