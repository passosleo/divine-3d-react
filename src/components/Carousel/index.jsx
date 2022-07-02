import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContainerCarousel } from "./styles.js";
import produto from "../../assets/images/vasos/2.jpg";
import produto2 from "../../assets/images/utilidades/porta-guardanapo1.jpg";
import produto3 from "../../assets/images/utilidades/homenzinho-suporte-garrafa-vinho.jpg";
import { products } from "../../mock/products";

export const CarouselComponent = () => {
  return (
    <>
      <Carousel>
        <ContainerCarousel>
          {/* {images.map((image, index) => (
            <>
              <img src={image} alt="" />
            </>
          ))} */}

          {products.map((product, index) => (
            <>
              <img src={product.image} alt="" />
            </>
          ))}
        </ContainerCarousel>
      </Carousel>
    </>
  );
};
