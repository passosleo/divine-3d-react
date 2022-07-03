import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 12px;
  margin-bottom: 15px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  div {
    p:first-child {
      font-weight: 600;
    }
  }

  p:nth-child(3) {
    font-size: 12px;
    color: #8f8f8f;
    margin-left: auto;
    align-self: flex-start;
  }
`;
