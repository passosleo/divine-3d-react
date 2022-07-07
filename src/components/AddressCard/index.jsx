import { Card } from "./styles.js";
import { AiFillHome } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { useState } from "react";

export const AddressCardComponent = (props) => {
  const { address, city, cep, style } = props;
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Card style={style}>
        <div>
          <AiFillHome
            color="#950101"
            size="1.5em"
            style={{ marginRight: 10 }}
          />

          <div>
            <p>{address}</p>
            <p>{city}</p>
            <p>{cep}</p>
          </div>
        </div>
        <button onClick={() => setSelected(!selected)}>
          {selected ? (
            <GiCheckMark color="#F5F5F5" size="1.2em" />
          ) : (
            "Selecionar"
          )}
        </button>
      </Card>
    </>
  );
};
