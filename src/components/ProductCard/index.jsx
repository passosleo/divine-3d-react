import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Flex } from "./styles.js";

export const ProductCardComponent = (props) => {
  const { photo, name, price } = props;
  const [quantity, setQuantity] = useState(1);
  return (
    <Card>
      <Link to="/produto">
        <img src={photo} alt={name} />
      </Link>
      <Col>
        <p>{name}</p>
        <Flex>
          <p>{price}</p>
          <Flex>
            <Button
              onClick={() => {
                quantity !== 1 && setQuantity(quantity - 1);
              }}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </Button>
          </Flex>
        </Flex>
      </Col>
    </Card>
  );
};
