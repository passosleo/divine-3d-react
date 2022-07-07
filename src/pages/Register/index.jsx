import React from "react";
import { InputComponent } from "../../components/InputCadastro";
import { ButtonComponent } from "../../components/ButtonRed";
import { Checkbox, Container, Termos, Title } from "./styles.js";

const Register = () => {
  return (
    <Container>
      <Title>Cadastro</Title>
      <InputComponent number={1} placeholder="Nome" />
      <InputComponent number={2} placeholder="CPF" />
      <InputComponent number={3} placeholder="Data de Nascimento" />
      <InputComponent number={4} placeholder="Número de celular" />
      <InputComponent number={5} placeholder="Endereço" />
      <InputComponent number={6} placeholder="Número" />
      <InputComponent number={7} placeholder="Bairro" />
      <InputComponent number={8} placeholder="Complemento" />
      <InputComponent number={9} placeholder="Cidade" />
      <InputComponent number={10} placeholder="Estado" />

      <Termos>
        <Checkbox />
        <p>Li e concordo com os termos de privacidade.</p>
      </Termos>
      <ButtonComponent text="Salvar" />
    </Container>
  );
};

export default Register;
