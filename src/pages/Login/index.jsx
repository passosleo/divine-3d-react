import React from "react";
import { Link } from "react-router-dom";
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
import { ButtonComponent } from "../../components/Button";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Container>
      <Row>
        <Section>
          <Title>Cadastrar-se</Title>
          <InputComponent placeholder="Email" />
          <Link to="/cadastro">
            <ButtonComponent text="Cadastro" variation="red" />
          </Link>
        </Section>
        <Divider />
        <Section>
          <Title>Já possui cadastro?</Title>
          <div>
            <InputComponent placeholder="Email" />
            <InputComponent placeholder="Senha" />
          </div>
          <Link to="/">
            <ButtonComponent text="Login" variation="red" />
          </Link>
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
