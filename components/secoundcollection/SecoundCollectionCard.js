import Link from "next/link";
import Image from "next/image";
import { formatter } from "/utils/helpers";

const SecoundCollectionCard = ({ earring }) => {
  const { handle, title } = earring.node;

  const { altText, originalSrc } = earring.node.images.edges[0].node;

  const price = earring.node.priceRange.minVariantPrice.amount;
  const compare = earring.node.compareAtPriceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <a className="group pb-8">
        <div className="w-full bg-gray-900 rounded-2xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-56">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900 uppercase">
          {title}
        </h3>
        <div className="flex ">
          <p className="mt-1 pr-2 text-sm text-red-700 line-through">
            {formatter.format(compare)}
          </p>
          <p className="mt-1 text-sm text-gray-900">
            {formatter.format(price)}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default SecoundCollectionCard;
