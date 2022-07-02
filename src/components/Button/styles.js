import styled from "styled-components";

export const Button = styled.div`
  height: 45px;
  width: 100%;
  font-family: "Souce Sans Pro", sans-serif;
  background-color: ${(props) =>
    props.variation === "red" ? "#950101" : "#FFFFFF"};
  color: ${(props) => (props.variation === "red" ? "#F5F5F5" : "#950101")};
  border: 3px solid #950101;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
`;
