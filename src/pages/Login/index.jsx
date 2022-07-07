import React from "react";
import {
  Container,
  Row,
  Title,
  Divider,
  Section,
  Sociais,
  TitleSocial,
  Buttons,
  Facebook,
  Gmail,
} from "./styles";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/ButtonRed";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Container>
      <Row>
        <Section>
          <Title>Cadastrar-se</Title>
          <InputComponent placeholder="Email" />
          <ButtonComponent text="Cadastro" />
        </Section>
        <Divider />
        <Section>
          <Title>Já possui cadastro?</Title>
          <div>
            <InputComponent placeholder="Email" />
            <InputComponent placeholder="Senha" />
          </div>
          <ButtonComponent text="Login" />
        </Section>
      </Row>
      <Sociais>
        <TitleSocial>Entrar com as redes sociais</TitleSocial>
        <Buttons>
          <Facebook>
            <FaFacebookSquare color="#1b74e4" size="1.5em" />
            <p> Facebook</p>
          </Facebook>
          <Gmail>
            <FaGoogle color="#ea4335" size="1.5em" />
            <p> Gmail</p>
          </Gmail>
        </Buttons>
      </Sociais>
    </Container>
  );
};

export default Login;
