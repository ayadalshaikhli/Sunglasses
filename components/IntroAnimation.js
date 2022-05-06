import React, { useEffect } from "react";
import { gsap, TweenMax, Expo } from "gsap/dist/gsap";

const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
export default function IntroAnimation() {
  useEffect(() => {
    gsap.to(".line", {
      xPercent: -100,
      duration: 2.0,
      delay: 1,
      stagger: 0.1,
      display: "none",
      ease: Expo.easeInOut,
    });
    gsap.to(".line-2", {
      xPercent: 100,
      duration: 2.0,
      delay: 1,
      stagger: 0.1,
      display: "none",
      ease: Expo.easeInOut,
    });
    gsap.to(".box", {
      duration: 2.0,
      delay: 1,
      display: "none",
      ease: Expo.easeInOut,
    });
  });

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
        className="box fixed text-white z-50"
      >
        <div className="grid grid-row-5 grid-flow-row min-h-screen ">
          <div
            style={{
              background: "#9ec3ce",
            }}
            className="line-2 "
          ></div>
          <div className="line bg-white text-white"></div>
          <div
            style={{
              background: "#9ec3ce",
            }}
            className="line-2  font-mono flex text-4xl justify-center items-center"
          >
            Tataroski
          </div>
          <div className="line bg-white text-white"></div>
          <div
            style={{
              background: "#9ec3ce",
            }}
            className="line-2 "
          ></div>
        </div>
      </div>
    </>
  );
}
