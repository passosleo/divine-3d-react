import styled from "styled-components";

const bg = "#950101";
const white = "#F5F5F5";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px;
`;

export const ProductContainer = styled.div`
  display: flex;
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

export const PricingContainer = styled.div`
  width: 500px;
  padding-left: 60px;
`;

export const ProductTitle = styled.h2`
  font-size: 28px;
`;

export const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const RatingText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
