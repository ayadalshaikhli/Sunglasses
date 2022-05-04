import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import React, { Suspense, useRef, useState, useEffect } from "react";
import RecommendedList from "./RecommendedList";
import ProductOptions from "./ProductOptions";
import ProductReviews from "./ProductReviews";
import Hero from "./Hero";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PageSpace from "./PageSpace";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
export default function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.originalSrc}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Mousewheel, Pagination]);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: ".product-list",
  //     start: "top 50%",
  //     end: "bottom 0%",

  //     onEnter: () => {
  //       gsap.to(".colormix", {
  //         duration: 1,
  //         color: "#000",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".colormix", {
  //         duration: 1,
  //         color: "#fff",
  //       });
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: ".product-list",
  //     start: "top 50%",
  //     end: "bottom 0%",

  //     onEnter: () => {
  //       gsap.to(".colornav", {
  //         duration: 1.0,
  //         color: "#000",
  //         backgroundColor: "#fff",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".colornav", {
  //         duration: 1.0,
  //         color: "#fff",
  //         backgroundColor: "#000",
  //       });
  //     },
  //   });
  // });

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <PageSpace />
      <motion.div
        className="relative colornav z-10 "
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto z-50">
          <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
            <div className="relative h-96 w-full product-lol">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#000",
                }}
                direction={"vertical"}
                pagination={{ clickable: true }}
                spaceBetween={30}
                mousewheel={{ mousewheel: true }}
                className="h-96 rounded-2xl "
                loop="true"
              >
                {images}
              </Swiper>
            </div>
          </div>
          <ProductForm product={product} />
        </div>
        <p
          style={{
            zIndex: 100,
          }}
          className=" mt-10 p-10 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl rounder-md border-2 w-11/12 mx-auto text-white z-50 colornav "
        >
          {product.description}
        </p>

        {/* <ProductReviews /> */}
        {/* <RecommendedList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      /> */}
      </motion.div>
    </>
  );
}
