import { Footer, Row, RedesSociais } from "./styles.js";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
export const FooterComponent = () => {
  return (
    <Footer>
      <p >Fale conosco</p>
      <Row>
        <FaWhatsapp size="1em" color="#950101" />
        <p>51 99999-9999</p>
      </Row>
      <Row>
        <FaEnvelope size="1em" color="#950101 " />
        <p>email@email.com</p>
      </Row>
      <Row>
        <FaMapMarkerAlt size="1em" color="#950101" />
        <p>Av. Sebastião Amoretti, 2911 - Centro, Taquara - RS, 95600-000</p>
      </Row>
      <RedesSociais>
        <div>
          <FaFacebookF size="1em" color="#fff" />
        </div>
        <div>
          <FaInstagram size="1em" color="#fff" />
        </div>
        <div>
          <FaTwitter size="1em" color="#fff" />
        </div>
      </RedesSociais>
      <p>
        Todas as imagens e produtos foram retirados do site com a sua devida
        autorização
      </p>
      <p >
        <strong style={{color:"#950101"}}>https://www.vegras.com</strong>
      </p>
    </Footer>
  );
};
