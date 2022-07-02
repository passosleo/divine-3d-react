import styled from "styled-components";

export const Button = styled.div`
  font-family: "Souce Sans Pro", sans-serif;
  background-color: #f5f5f5;
  color: #950101;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 40px;
  padding: 8px 30px;
  border-radius: 4px;
  :hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
