import ProductCard from "./ProductCard";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ProductList = ({ products }) => {
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

  return (
    <div id="body" className="relative product-list">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold ">Products</h1>
        <div className="grid grid-cols-2 gap-y-50 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-4">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
