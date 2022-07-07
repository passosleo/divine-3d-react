import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContainerCarousel } from "./styles.js";
import { products } from "../../mock/products";
import { Link } from "react-router-dom";
import { categories } from "../../mock/categories";

export const CarouselComponent = ({ isCategory }) => {
  const randomProducts = (amount) => {
    const productsRandom = [];
    for (let i = 0; i < amount; i++) {
      const random = Math.floor(Math.random() * products.length);
      productsRandom.push(products[random]);
    }
    return productsRandom;
  };
  return (
    <>
      <Carousel autoFocus showStatus={false} showIndicators={false}>
        <ContainerCarousel>
          {isCategory
            ? categories.map((item) => (
                <>
                  <img src={item.image} alt={item.name}/>
                </>
              ))
            : randomProducts(6).map((item, index) => (
                <>
                  <Link to="produto">
                    <img src={item.image} alt={item.name} />
                  </Link>
                </>
              ))}
        </ContainerCarousel>
      </Carousel>
    </>
  );
};
