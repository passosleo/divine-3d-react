import React from "react";
import {
  BoldText,
  Button,
  ColorBox,
  Conditions,
  Container,
  DeliveryContainer,
  FlexContainer,
  Input,
  JustifyEndContainer,
  JustifyText,
  OldPrice,
  OldPriceContainer,
  Price,
  ProductContainer,
  ProductImage,
  ProductTitle,
  SectionsContainer,
  SpacedContainer,
  Table,
} from "./styles";
import product from "../../assets/images/vasos/product.jpg";
import person1 from "../../assets/images/users/person-1.jpg";
import person2 from "../../assets/images/users/person-2.jpg";
import { FaStar, FaHeart, FaTruck, FaShippingFast } from "react-icons/fa";
import { DiscountTagComponent } from "../../components/DiscountTag";
import { ButtonComponent } from "../../components/Button";
import { SectionTitleComponent } from "../../components/SectionTitle";
import { CommentComponent } from "../../components/Comment";

const stars = [...Array(5).keys()].map((i) => i + 1);
const colors = ["#1A4D2E", "#F15412", "#1363DF", "#F32424", "#FF7396"];

const Product = () => {
  return (
    <Container>
      <FlexContainer>
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
            <FaHeart
              color="#950101"
              size="1.3em"
              style={{ cursor: "pointer" }}
            />
          </SpacedContainer>
          <OldPriceContainer>
            <DiscountTagComponent ammount={29} />
            <OldPrice>R$69,90</OldPrice>
          </OldPriceContainer>
          <SpacedContainer>
            <JustifyEndContainer>
              <BoldText>Cores:</BoldText>
              <FlexContainer>
                {colors.map((color, index) => (
                  <ColorBox key={index} color={color} />
                ))}
              </FlexContainer>
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
              <FlexContainer>
                <Input type="text" placeholder="00000-000" />
                <Button>Calcular</Button>
              </FlexContainer>
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
      </FlexContainer>
      <SectionsContainer>
        <SectionTitleComponent text="Descrição" variation="left" />
        <JustifyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          nisl quis neque consectetur cursus. Vivamus non ipsum lorem. Duis
          pharetra massa a tempus dapibus. Suspendisse vitae leo congue, rhoncus
          justo in, dignissim turpis. Praesent sit amet aliquet elit, a pulvinar
          eros. Quisque luctus ante ut porttitor facilisis. Praesent eu ipsum
          non metus gravida porta. Ut quis tortor venenatis, pharetra odio sed,
          mattis enim. Fusce sed metus ac dolor ornare accumsan at in dolor.
        </JustifyText>
        <SectionTitleComponent text="Ficha Técnica" variation="left" />
        <Table>
          <tr>
            <td>Impressão</td>
            <td>FDM</td>
          </tr>
          <tr>
            <td>Material</td>
            <td>PLA</td>
          </tr>
          <tr>
            <td>Temperatura</td>
            <td>205°C</td>
          </tr>
          <tr>
            <td>Resolução</td>
            <td>0.2mm</td>
          </tr>
          <tr>
            <td>Altura</td>
            <td>6.5cm</td>
          </tr>
          <tr>
            <td>Largura</td>
            <td>12cm</td>
          </tr>
          <tr>
            <td>Profundidade</td>
            <td>8cm</td>
          </tr>
          <tr>
            <td>Peso</td>
            <td>140g</td>
          </tr>
        </Table>
        <SectionTitleComponent text="Avaliações" variation="left" />
        <CommentComponent
          userName="Luciana"
          text="Muito bom!"
          rating={5}
          date="22/01/22"
          photo={person1}
        />
        <CommentComponent
          userName="Fernando"
          text="Adorei o produto, muito bem feito. Recomendo!"
          rating={5}
          date="08/03/22"
          photo={person2}
        />
      </SectionsContainer>
    </Container>
  );
};

export default Product;
