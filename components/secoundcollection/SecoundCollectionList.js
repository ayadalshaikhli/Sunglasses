import React, { Suspense, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SecoundCollectionCard from "./SecoundCollectionCard";
gsap.registerPlugin(ScrollTrigger);
const SecoundCollectionList = ({ earrings }) => {
  return (
    <div id="earrings" className="relative product-list">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold ">Earrings</h1>
        <div className="grid grid-cols-2 gap-y-50 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-4">
          {earrings.map((earring) => (
            <SecoundCollectionCard key={earring.node.id} earring={earring} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecoundCollectionList;
