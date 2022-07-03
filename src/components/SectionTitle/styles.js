import styled from "styled-components";

export const LineContainer = styled.div`
  border-bottom: 2px solid #950101;
  margin: 30px 0 15px 0;
`;

export const Title = styled.h3`
  font-size: 20px;
  padding-bottom: 5px;
`;

export const Divider = styled.div`
  height: 2px;
  width: 90%;
  background: #950101;
  display: flex;
  justify-content: center;
  margin: 50px auto;

  div {
    z-index: 1;
    margin-top: -10px;
    background-color: #fff;
    color: #222;
    font-size: 18px;
    font-weight: bold;
    padding: 0 25px;
  }
`;
