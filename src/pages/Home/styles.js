import styled from "styled-components";

export const Image = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: center;
`;


export const Title = styled.p`
  font-size: 3rem; 
  color:#fff;
  margin-top: -365px;
  z-index:1;
  position:absolute;
  margin-left:240px;
  text-shadow: 10px 5px 5px black;
`