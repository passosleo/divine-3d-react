import styled from "styled-components";

export const Image = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
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

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
`;
