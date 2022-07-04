import React from "react";
import { Container, Card } from "./styles";
import { FaCreditCard, FaBarcode } from "react-icons/fa";
import pix from "../../assets/images/pix.svg";

export const CardPaymentComponent = () => {
  return (
    <>
      <Container>
        <Card>
          <FaCreditCard color="#950101" size="2em" />
          <p>Crédito</p>
        </Card>
        <Card>
          <FaCreditCard color="#950101" size="2em" />
          <p>Boleto</p>
        </Card>
        <Card>
          <FaBarcode color="#950101" size="2em" />
          <p>Boleto</p>
        </Card>
        <Card>
          <img src={pix} alt="pix" />
          <p>Pix</p>
        </Card>
      </Container>
    </>
  );
};
