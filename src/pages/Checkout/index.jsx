import React from "react";
import {
  Col,
  Container,
  Flex,
  ScrollContainer,
  ContainerInput,
  RowBetween,
  ButtonCard,
  ButtonRed,
} from "./styles";
import { SectionTitleComponent } from "../../components/SectionTitle";
import { ProductCardComponent } from "../../components/ProductCard";
import { CardPaymentComponent } from "../../components/CardPayment";
import { InputComponent } from "../../components/Input";
import product from "../../assets/images/vasos/product.jpg";
import { ModalidadeEntrega } from "../../components/ModalidadeEntrega";
import { AddressCardComponent } from "../../components/AddressCard";

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
          <Flex>
            <AddressCardComponent
              address="Rua Sargento Silva, 122"
              city="Rolante - RS"
              cep="95690-000"
              style={{ marginRight: 25 }}
            />
            <AddressCardComponent
              address="Rua Marechal Frota, 431"
              city="Taquara - RS"
              cep="95600-000"
              style={{ marginLeft: 25 }}
            />
          </Flex>
        </Col>
      </Flex>
      <Flex>
        <Col>
          <SectionTitleComponent text="Pagamento" variation="left" />
          <CardPaymentComponent />
          <ContainerInput>
            <InputComponent placeholder="Nome Completo" />
            <InputComponent placeholder="Número do cartão" />
            <RowBetween>
              <InputComponent placeholder="Data de validade" />
              <InputComponent placeholder="CVV" />
            </RowBetween>
            <RowBetween>
              <ButtonCard>
                <p> 3 parcelas de R$59,80</p>
              </ButtonCard>
              <p style={{ marginTop: 25, fontWeight: "bold", fontSize: 20 }}>
                Total: R$59,80
              </p>
            </RowBetween>
            <ButtonRed>Finalizar Pedido</ButtonRed>
          </ContainerInput>
        </Col>
        <Col>
          <SectionTitleComponent
            text="Modalidade de Entrega"
            variation="left"
          />
          <ModalidadeEntrega></ModalidadeEntrega>
        </Col>
      </Flex>
    </Container>
  );
};

export default Checkout;
