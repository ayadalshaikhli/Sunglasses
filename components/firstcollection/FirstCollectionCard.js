import Link from "next/link";
import Image from "next/image";
import { formatter } from "/utils/helpers";
import React, { useEffect, useState } from "react";
const FirstCollectionCard = ({ ring }) => {
  const { handle, title } = ring.node;

  const { altText, originalSrc } = ring.node.images.edges[0].node;

  const price = ring.node.priceRange.minVariantPrice.amount;
  const compare = ring.node.compareAtPriceRange.minVariantPrice.amount;

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link href={`/products/${handle}`}>
      <a className="group pb-8 ">
        <div
          className="w-full bg-gray-900 rounded-t-2xl overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative group-hover:opacity-75 h-56">
            {isHovering ? (
              <Image
                src={ring.node.images.edges[1].node.originalSrc}
                alt={ring.node.images.edges[1].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <Image
                src={ring.node.images.edges[0].node.originalSrc}
                alt={ring.node.images.edges[0].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="bg-white rounded-b-2xl pt-2 pl-2 h-1/3 flex flex-col justify-center">
          <h3 className="mt-4 text-lg font-medium text-gray-900 uppercase">
            {title}
          </h3>
          <div className="flex text-sm mt-1 ">
            <p className=" pr-2 text-red-700 line-through">
              {formatter.format(compare)}
            </p>
            <p className=" text-gray-900">{formatter.format(price)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FirstCollectionCard;
