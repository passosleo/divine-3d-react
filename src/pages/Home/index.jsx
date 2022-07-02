import React from "react";
import { Divider, Image, ContainerCarousel } from "./styles.js";
import { PromotionsEmail } from "../../components/PromotionsEmail/";
import banner from "../../assets/images/banner/cropped.16_to_9.png";
import { CarouselComponent } from "../../components/Carousel/";
import { FooterComponent } from "../../components/Footer/";

const Home = () => {
  const DividerComponent = ({ text }) => {
    return (
      <>
        <Divider>
          <div>{text}</div>
        </Divider>
      </>
    );
  };

  return (
    <div>
      <Image src={banner} alt="" />

      <DividerComponent text="Destaque" />

      <ContainerCarousel>
        <CarouselComponent />
      </ContainerCarousel>

      <DividerComponent text="Promoções" />

      <ContainerCarousel>
        <CarouselComponent />
      </ContainerCarousel>

      <PromotionsEmail />

      <DividerComponent text="Categorias" />

      <ContainerCarousel>
        <CarouselComponent isCategory={true} />
      </ContainerCarousel>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
