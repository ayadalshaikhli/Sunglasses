import React, { Suspense, useRef, useState, useEffect } from "react";
import img1 from "../public/picture/img1.png";
import img2 from "../public/picture/img2.png";
import img3 from "../public/picture/img3.png";
import img4 from "../public/picture/img4.png";
import img5 from "../public/picture/img5.png";
import Image from "next/image";

import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function PageContent() {
  useEffect((state) => {
    ScrollTrigger.create({
      trigger: ".product-list",
      start: "top 50%",
      end: "bottom 0%",

      onEnter: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#fff",
        });
      },

      onLeaveBack: () => {
        gsap.to(".body", {
          duration: 1.0,
          backgroundColor: "#000",
        });
      },
    });

    gsap.from(".product-left", 1, {
      scrollTrigger: {
        trigger: ".tato",
        toggleActions: "play reset play reset",
        start: "top 50%",
        end: "bottom 0",
      },
      x: -400,
      opacity: 0,
    });
    gsap.from(".product-right", 1, {
      scrollTrigger: {
        trigger: ".tato",
        toggleActions: "play reset play reset",
        start: "top 50%",
      },
      x: 400,
      opacity: 0,
    });
    gsap.from(".product-left2", 1, {
      scrollTrigger: {
        trigger: ".tato2",
        toggleActions: "play reset play reset",
        start: "top 50%",
      },
      x: -400,
      opacity: 0,
    });
    gsap.from(".product-right2", 1, {
      scrollTrigger: {
        trigger: ".tato2",
        toggleActions: "play reset play reset",
        start: "top 50%",
      },
      x: 400,
      opacity: 0,
    });

    // ScrollTrigger.create({
    //   trigger: ".product-picture",

    //   scrub: 5,
    //   start: "top top",
    //   end: "bottom bottom",
    //   onUpdate: (self) => {
    //     cup.current.rotation.x = -1 * Math.PI * self.progress;
    //     cup.current.rotation.y = -1 * Math.PI * self.progress;
    //     // cam.current.position.z = 25 * self.progress;

    //     // cup.current.rotation.z = -2 * Math.PI * self.progress;
    //     // cup.current.position.y = -17 * self.progress;
    //     // cup.current.position.y = -2 * self.progress;
    //   },
    // });
  });
  return (
    <div
      style={{ height: "200vh" }}
      className="flex flex-col px-20 overflow-hidden"
    >
      <div
        style={{ height: "100vh" }}
        className="product-picture flex justify-around"
      >
        <div className="product-left overflow-hidden  ">
          <h1>Hello</h1>
          <h1>Image</h1>
          <div className="max-h-xl py-4 max-w-xl  rounded-2xl overflow-hidden">
            <Image
              src={img1}
              alt="payment methods"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
        <div className="product-right overflow-hidden">
          <h1>Hello</h1>
          <h1>Image</h1>
          <div className="max-h-94 max-w-94 py-4  tato">
            <Image
              src={img2}
              alt="payment methods"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </div>
      </div>

      <div style={{ height: "100vh" }} className=" flex justify-between">
        <div className="">
          <div className="product-left2 ">
            <h1>Hello</h1>
            <h1>Image</h1>
            <div className="max-h-94 max-w-94 py-4">
              <Image
                src={img3}
                alt="payment methods"
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="product-picture">
          <div className="product-right2">
            <h1>Hello</h1>
            <h1>Image</h1>
            <div className="max-h-94 max-w-94 py-4 tato2">
              <Image
                src={img4}
                alt="payment methods"
                width={300}
                height={300}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
