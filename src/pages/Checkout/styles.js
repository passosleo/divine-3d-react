import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const ScrollContainer = styled.div`
  max-height: 255px;
  overflow-y: auto;
  padding: 0 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #d7d7d7;
    transition: 300ms;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
    transition: 300ms;
  }
`;

export const ContainerInput = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export const RowBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonCard = styled.div`
  display: flex;
  height: 31px;
  width: 170px;
  border-radius: 3px;
  background-color: #f5f5f5;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ButtonRed = styled.div`
  display: flex;
  height: 40px;
  color: #fff;
  font-size: 0.8em;
  border-radius: 3px;
  background-color: #950101;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
