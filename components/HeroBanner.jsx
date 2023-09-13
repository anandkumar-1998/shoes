"use client";
import React from "react";
import slide from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroBanner = () => {
  return (
    <div className="text-white w-full text-center mx-auto my-2 w-max-[1350px]">
      <Carousel
        responsive={responsive}
        arrows={false}
        pauseOnHover={true}
        autoPlaySpeed={2000}
        infinite={true}
        autoPlay={true}
        showDots={true}
      >
        <div className="mx-2">
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover"
            src={slide}
            alt="No image"
            width={1000}
            height={1000}
          />
          <div
            className="px-[15px] md:px-[10px] py-[10px] md:py-[10px] font-oswald 
          bg-white absolute bottom-[25px] md:bottom-[30px] 
          left-0 text-black/[0.9] text-[15px] md:text-[20px] 
          uppercase font-medium cursor-pointer hover:opacity-90 "
          >
            Shop Now
          </div>
        </div>
        <div className="mx-2">
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover"
            src={slide2}
            alt="No image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mx-2">
          <Image
            className="aspect-[16/10] md:aspect-auto object-cover"
            src={slide3}
            alt="No image"
            width={1000}
            height={1000}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
