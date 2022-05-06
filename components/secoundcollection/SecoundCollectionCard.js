import Link from "next/link";
import Image from "next/image";
import { formatter } from "/utils/helpers";
import React, { useEffect, useState } from "react";
const SecoundCollectionCard = ({ earring }) => {
  const { handle, title } = earring.node;

  const { altText, originalSrc } = earring.node.images.edges[0].node;

  const price = earring.node.priceRange.minVariantPrice.amount;
  const compare = earring.node.compareAtPriceRange.minVariantPrice.amount;
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link href={`/products/${handle}`}>
      <a className="group pb-8">
        <div
          className="w-full bg-gray-900 rounded-t-2xl overflow-hidden"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative group-hover:opacity-75 h-56">
            {isHovering ? (
              <Image
                src={earring.node.images.edges[1].node.originalSrc}
                alt={earring.node.images.edges[1].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <Image
                src={earring.node.images.edges[0].node.originalSrc}
                alt={earring.node.images.edges[0].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="bg-white rounded-b-2xl pt-2 h-1/3 flex flex-col justify-start">
          <h3 className="mt-4 text-lg font-medium text-gray-900 uppercase">
            {title}
          </h3>
          <div className="flex text-sm mt-1 px-2">
            <p className=" pr-2 text-red-700 line-through">
              {formatter.format(compare)}
            </p>
            <p className="  text-gray-900">{formatter.format(price)}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SecoundCollectionCard;
