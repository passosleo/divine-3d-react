import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContainerCarousel } from "./styles.js";
import { products } from "../../mock/products";
import { categories } from "../../mock/categories";

import imgCategory from "../../assets/images/categories/1.svg";

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
                  <img src={imgCategory} alt="" />
                </>
              ))
            : randomProducts(6).map((item, index) => (
                <>
                  <img src={item.image} alt="" />
                </>
              ))}
        </ContainerCarousel>
      </Carousel>
    </>
  );
};
