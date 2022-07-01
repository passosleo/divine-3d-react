import React from "react";
import {
  Container,
  PricingContainer,
  ProductContainer,
  ProductImage,
  ProductRating,
  ProductTitle,
  RatingText,
} from "./styles";
import product from "../../assets/images/vasos/product.jpg";
import { FaStar, FaHeart } from "react-icons/fa";

const Product = () => {
  return (
    <Container>
      <ProductContainer>
        <ProductImage src={product} />
        <PricingContainer>
          <ProductTitle>Vaso de Plantas Rob Plant Sentado</ProductTitle>
          <ProductRating>
            <div>
              <FaStar
                color="#950101"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
              <FaStar
                color="#950101"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
              <FaStar
                color="#950101"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
              <FaStar
                color="#950101"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
              <FaStar
                color="#D9D9D9"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
              <RatingText>22 avaliações</RatingText>
            </div>
            <FaHeart
              color="#950101"
              size="1.3em"
              style={{ marginRight: 4, cursor: "pointer" }}
            />
          </ProductRating>
        </PricingContainer>
      </ProductContainer>
    </Container>
  );
};

export default Product;
