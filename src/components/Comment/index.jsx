import { CommentContainer } from "./styles.js";
import { FaStar } from "react-icons/fa";

export const CommentComponent = (props) => {
  const { userName, text, rating, date, photo } = props;

  const stars = [...Array(rating).keys()].map((i) => i + 1);
  return (
    <CommentContainer>
      <img src={photo} alt="Foto de Perfil do Usuário" />
      <div>
        <p>{userName}</p>
        {stars.map((i) => (
          <FaStar
            key={i}
            color="#950101"
            size="0.6em"
            style={{ marginRight: 4 }}
          />
        ))}
        <p>{text}</p>
      </div>
      <p>{date}</p>
    </CommentContainer>
  );
};
