import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";
import { motion } from "framer-motion";
const ProductCard = ({ product }) => {
  const { handle, title } = product.node;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;
  const compare = product.node.compareAtPriceRange.minVariantPrice.amount;

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
    <Link href={`/products/${handle}`}>
      <motion.div
        variants={stagger}
        transition={{ delay: 1.2 }}
        initial="initial"
        animate="animate"
      >
        <a className="group pb-8">
          <motion.div
            variants={fadeInUp}
            className="w-full bg-gray-900 rounded-2xl overflow-hidden"
          >
            <div className="relative group-hover:opacity-75 h-56">
              <Image
                src={originalSrc}
                alt={altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
          <motion.h3
            variants={fadeInUp}
            className="mt-4 text-lg font-medium text-gray-900 uppercase"
          >
            {title}
          </motion.h3>
          <div className="flex ">
            <motion.p
              variants={fadeInUp}
              className="mt-1 pr-2 text-sm text-red-700 line-through"
            >
              {formatter.format(compare)}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-1 text-sm text-gray-900"
            >
              {formatter.format(price)}
            </motion.p>
          </div>
        </a>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
