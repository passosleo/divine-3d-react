import React from "react";
import { Container, Input } from "./styles.js";

export const InputComponent = ({ number, placeholder }) => {
  return (
    <Container>
      <Input placeholder={placeholder} />
    </Container>
  );
};
