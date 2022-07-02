import React from "react";
import { Container, InputEmail } from "./styles";
import { FaEnvelope } from "react-icons/fa";
import { ButtonWhite } from "../ButtonWhite/";
export const PromotionsEmail = () => {
  return (
    <>
      <Container>
        <FaEnvelope color="#F5F5F5" size="5em" />
        <p>Receba nossas ofertas e lançamentos</p>
        <InputEmail placeholder="e-mail" />
        <ButtonWhite text="Enviar" />
      </Container>
    </>
  );
};
