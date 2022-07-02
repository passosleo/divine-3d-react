import { Button } from "./styles.js";

export const ButtonComponent = (props) => {
  const { text, variation, onClick } = props;
  return (
    <Button variation={variation} onClick={onClick}>
      {text}
    </Button>
  );
};
