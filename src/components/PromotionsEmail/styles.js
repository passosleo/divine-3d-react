import styled from "styled-components";
export const Container = styled.div`
  background-color: #950101;
  // height:150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  p {
    color: #f5f5f5;
    font-size: 20px;
    margin: 0 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputEmail = styled.input`
  max-width: 300px;
  width: 100%;
  height: 30px;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding-left: 6px;

  :focus {
    outline: none;
  }

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;
