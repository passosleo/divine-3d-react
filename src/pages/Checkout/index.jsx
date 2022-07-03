import React from "react";
import { Col, Container, Flex, ScrollContainer } from "./styles";
import { SectionTitleComponent } from "../../components/SectionTitle";
import { ProductCardComponent } from "../../components/ProductCard";
import product from "../../assets/images/vasos/product.jpg";

const Checkout = () => {
  return (
    <Container>
      <Flex>
        <Col>
          <SectionTitleComponent text="Carrinho" variation="left" />
          <ScrollContainer>
            <ProductCardComponent
              name="Vaso de Plantas Rob Plant Sentado"
              photo={product}
              price="R$ 49,90"
            />
            <ProductCardComponent
              name="Vaso de Plantas Rob Plant Sentado"
              photo={product}
              price="R$ 49,90"
            />
            <ProductCardComponent
              name="Vaso de Plantas Rob Plant Sentado"
              photo={product}
              price="R$ 49,90"
            />
          </ScrollContainer>
        </Col>
        <Col>
          <SectionTitleComponent text="Endereço de Entrega" variation="left" />
        </Col>
      </Flex>
      <Flex>
        <Col>
          <SectionTitleComponent text="Pagamento" variation="left" />
        </Col>
        <Col>
          <SectionTitleComponent
            text="Modalidade de Entrega"
            variation="left"
          />
        </Col>
      </Flex>
    </Container>
  );
};

export default Checkout;
