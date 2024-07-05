import React from "react";
import CarouselComponent from "./Carousel";
import { Popular } from "./Popular";

export const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Popular />
    </div>
  );
};
