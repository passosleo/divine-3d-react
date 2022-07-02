import React from "react";
import {
  BoldText,
  ColorBox,
  Colors,
  Conditions,
  Container,
  OldPrice,
  OldPriceContainer,
  Price,
  ProductContainer,
  ProductImage,
  ProductTitle,
  SpacedContainer,
} from "./styles";
import product from "../../assets/images/vasos/product.jpg";
import { FaStar, FaHeart } from "react-icons/fa";
import { DiscountTagComponent } from "../../components/DiscountTag";

const stars = [...Array(5).keys()].map((i) => i + 1);
const colors = ["#1A4D2E", "#F15412", "#1363DF", "#F32424", "#FF7396"];

const Product = () => {
  return (
    <Container>
      <ProductImage src={product} />
      <ProductContainer>
        <ProductTitle>Vaso de Plantas Rob Plant Sentado</ProductTitle>
        <SpacedContainer>
          <div>
            {stars.map((i) => (
              <FaStar
                key={i}
                color="#950101"
                size="1.1em"
                style={{ marginRight: 4, cursor: "pointer" }}
              />
            ))}
            <BoldText>22 avaliações</BoldText>
          </div>
          <FaHeart color="#950101" size="1.3em" style={{ cursor: "pointer" }} />
        </SpacedContainer>
        <OldPriceContainer>
          <DiscountTagComponent ammount={29} />
          <OldPrice>R$69,90</OldPrice>
        </OldPriceContainer>
        <SpacedContainer>
          <Colors>
            <BoldText>Cores:</BoldText>
            <div>
              {colors.map((color, index) => (
                <ColorBox key={index} color={color} />
              ))}
            </div>
          </Colors>
          <div>
            <Price>R$49,90</Price>
            <Conditions>
              à vista
              <br />
              ou 3x de <strong>R$18,90</strong> no cartão
            </Conditions>
          </div>
        </SpacedContainer>
      </ProductContainer>
    </Container>
  );
};

export default Product;
