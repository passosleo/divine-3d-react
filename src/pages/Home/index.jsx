import React from "react";
import { Divider, Image } from "./styles.js";
import { PromotionsEmail } from "../../components/PromotionsEmail/";
import banner from "../../assets/images/banner/cropped.16_to_9.png";
import { Carousel } from "react-responsive-carousel";
import { FooterComponent } from "../../components/Footer/";
import { products } from "../../assets/images/products.js";
const Home = () => {
  return (
    <div>
      <Image src={banner} alt="" />
      <Divider>
        <div>Destaque</div>
        <Carousel>
          {/* <div>
            {products.map((item) => (
              <>
                <img src={item.image1} />
              </>
            ))}
          </div> */}
        </Carousel>
      </Divider>
      <Divider>
        <div>Lançamentos</div>
      </Divider>
      <PromotionsEmail />
      <Divider>
        <div>Categorias</div>
      </Divider>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
