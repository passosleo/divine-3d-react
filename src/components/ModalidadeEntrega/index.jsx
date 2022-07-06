import { Container, Utils, Text, Preço } from "./styles.js";
import { FaTruck } from "react-icons/fa";

export const ModalidadeEntrega = () => {
  return (
    <>
      <Container>
        <input type="radio" />
        <FaTruck color="#950101" size="2em" style={{ width: "20%" }} />
        <Utils>
          <Text>Expresso</Text>
          <p>3 dias úteis</p>
        </Utils>
        <Preço>
          <Text>R$15,90</Text>
        </Preço>
      </Container>
      <Container>
        <input type="radio" />
        <FaTruck color="#950101" size="2em" style={{ width: "20%" }} />
        <Utils>
          <Text>Normal</Text>
          <p>7 dias úteis</p>
        </Utils>
        <Preço>
          <Text>R$9,90</Text>
        </Preço>
      </Container>
    </>
  );
};
