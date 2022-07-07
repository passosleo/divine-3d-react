import React from "react";
import { Container, Label, Input } from "./styles.js";

export const InputComponent = ({ number, placeholder }) => {
  return (
    <Container>
      <Label>{number}</Label>
      <Input placeholder={placeholder} />
    </Container>
  );
};
