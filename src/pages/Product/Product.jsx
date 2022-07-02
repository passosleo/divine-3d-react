import React from "react";
import {
  BoldText,
  Button,
  ColorBox,
  Colors,
  Conditions,
  Container,
  DeliveryContainer,
  Input,
  JustifyEndContainer,
  OldPrice,
  OldPriceContainer,
  Price,
  ProductContainer,
  ProductImage,
  ProductTitle,
  SimulationInput,
  SpacedContainer,
} from "./styles";
import product from "../../assets/images/vasos/product.jpg";
import { FaStar, FaHeart, FaTruck, FaShippingFast } from "react-icons/fa";
import { DiscountTagComponent } from "../../components/DiscountTag";
import { ButtonComponent } from "../../components/Button";

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
          <JustifyEndContainer>
            <BoldText>Cores:</BoldText>
            <Colors>
              {colors.map((color, index) => (
                <ColorBox key={index} color={color} />
              ))}
            </Colors>
          </JustifyEndContainer>
          <div>
            <Price>R$49,90</Price>
            <Conditions>
              à vista
              <br />
              ou 3x de <strong>R$18,90</strong> no cartão
            </Conditions>
          </div>
        </SpacedContainer>
        <SpacedContainer>
          <JustifyEndContainer>
            <BoldText>Frete:</BoldText>
            <SimulationInput>
              <Input type="text" placeholder="00000-000" />
              <Button>Calcular</Button>
            </SimulationInput>
          </JustifyEndContainer>
          <div>
            <DeliveryContainer>
              <FaShippingFast
                color="#950101"
                size="1.2em"
                style={{ marginRight: 10 }}
              />
              <div>
                <p>Expresso:</p>
                <p>
                  3 dias úteis - <strong>R$15,90</strong>
                </p>
              </div>
            </DeliveryContainer>
            <DeliveryContainer>
              <FaTruck
                color="#950101"
                size="1.2em"
                style={{ marginRight: 10 }}
              />
              <div>
                <p>Normal:</p>
                <p>
                  7 dias úteis - <strong>R$9,90</strong>
                </p>
              </div>
            </DeliveryContainer>
          </div>
        </SpacedContainer>
        <JustifyEndContainer>
          <ButtonComponent variation="white" text="Adicionar ao carrinho" />
          <ButtonComponent variation="red" text="Comprar" />
        </JustifyEndContainer>
      </ProductContainer>
    </Container>
  );
};

export default Product;
