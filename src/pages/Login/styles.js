import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Section = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 24px;
  border-bottom: 2px solid #950101;
  width: 300px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 1px;
  height: 215px;
  background-color: #000;
  opacity: 0.2;
`;

export const Sociais = styled.div`
  margin-top: 80px;
  padding: 0 70px;
`;
export const TitleSocial = styled.p`
  font-size: 24px;
  border-bottom: 2px solid #950101;
  max-width: 945px;
  width: 100%;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Facebook = styled.div`
  border: 2px solid #1b74e4;
  padding: 8px 80px;
  border-radius: 5px;
  color: #1b74e4;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-right: 20px;

  cursor: pointer;
  p {
    margin-left: 15px;
  }
`;

export const Gmail = styled.div`
  border: 2px solid #ea4335;
  padding: 8px 80px;
  border-radius: 5px;
  color: #ea4335;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin-left: 15px;
  }
`;
