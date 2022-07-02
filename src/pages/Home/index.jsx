import React from "react";
import { Divider, Image, ContainerCarousel } from "./styles.js";
import { PromotionsEmail } from "../../components/PromotionsEmail/";
import banner from "../../assets/images/banner/cropped.16_to_9.png";
import { CarouselComponent } from "../../components/Carousel/";
import { FooterComponent } from "../../components/Footer/";

const Home = () => {
  return (
    <div>
      <Image src={banner} alt="" />
      <Divider>
        <div>Destaque</div>
      </Divider>
      <CarouselComponent />
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
