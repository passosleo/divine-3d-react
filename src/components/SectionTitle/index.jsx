import { Divider, LineContainer, Title } from "./styles.js";

export const SectionTitleComponent = (props) => {
  const { text, variation } = props;
  return (
    <>
      {variation === "left" ? (
        <LineContainer>
          <Title>{text}</Title>
        </LineContainer>
      ) : (
        <Divider>
          <div>{text}</div>
        </Divider>
      )}
    </>
  );
};
