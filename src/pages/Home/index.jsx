import React from "react";
import { Image, ContainerCarousel } from "./styles.js";
import { PromotionsEmail } from "../../components/PromotionsEmail/";
import banner from "../../assets/images/banner/cropped.16_to_9.png";
import { CarouselComponent } from "../../components/Carousel/";
import { FooterComponent } from "../../components/Footer/";
import { SectionTitleComponent } from "../../components/SectionTitle/index.jsx";

const Home = () => {
  return (
    <div>
      <Image src={banner} alt="" />

      <SectionTitleComponent text="Destaque" variation="center" />

      <ContainerCarousel>
        <CarouselComponent />
      </ContainerCarousel>

      <SectionTitleComponent text="Promoções" variation="center" />

      <ContainerCarousel>
        <CarouselComponent />
      </ContainerCarousel>

      <PromotionsEmail />

      <SectionTitleComponent text="Categorias" variation="center" />

      <ContainerCarousel>
        <CarouselComponent isCategory={true} />
      </ContainerCarousel>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
