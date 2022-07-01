import React from "react";
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
} from "./styles";
import product from "../../assets/images/vasos/product.jpg";

const Product = () => {
  return (
    <Container>
      <ProductContainer>
        <ProductImage src={product} />
        <div>
          <ProductTitle>Vaso de Plantas Rob Plant Sentado</ProductTitle>
        </div>
      </ProductContainer>
    </Container>
  );
};

export default Product;
