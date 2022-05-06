import { useState, useEffect, useContext } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import axios from "axios";
import useSWR from "swr";
import payment from "../public/payments.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaStopwatch20,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import Hero from "./Hero";
var random = Math.floor(Math.random() * 20 + 10);
var round = Math.round(random);
// setup inventory fetcher
const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

export default function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ["/api/available", product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  );

  const [available, setAvailable] = useState(true);

  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  const price = product.variants.edges[0].node.priceV2.amount;
  const compare = product.variants.edges[0].node.compareAtPriceV2.amount;
  const priceSaving = compare - price;
  const saving = ((compare - price) / compare) * 100;
  const roundv2 = Math.round(saving);

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
      <motion.div
        className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3 bg-white text-black z-10"
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={fadeInUp}
          className="text-sm font-thin flex align-bottom"
        >
          {round} sales |
          <div className="flex align-bottom pt-1 pl-2">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
          </div>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="text-2xl font-bold uppercase">
          {product.title}
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="flex pt-2 text-xl justify-between"
        >
          <div>
            <span className="pb-3 pr-5 line-through text-red-700">
              {formatter.format(
                product.variants.edges[0].node.compareAtPriceV2.amount
              )}
            </span>
            <span className="pb-3">
              {formatter.format(product.variants.edges[0].node.priceV2.amount)}
            </span>
          </div>
          <div className="text-md text-red-600">
            <span>Low in stock</span>
          </div>
        </motion.div>
        <motion.span variants={fadeInUp} className="text-green-500 text-sm">
          You save {formatter.format(priceSaving)} %{roundv2}
        </motion.span>

        {product.options.map(({ name, values }) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            selectedVariant={selectedVariant}
            productInventory={productInventory}
            available={available}
          />
        ))}

        {available ? (
          <button
            style={{
              zIndex: "50",
            }}
            onClick={() => {
              addToCart(selectedVariant);
            }}
            className="flex bg-black w-full  justify-center mt-3  py-5 text-center  rounded-lg z-50   text-white sm:px-2 sm:py-3 sm:mt-3 hover:bg-green-800"
          >
            Add To Card
          </button>
        ) : (
          <button className="rounded-lg text-white px-2 py-3 mt-3 bg-gray-800 cursor-not-allowed">
            Sold out!
          </button>
        )}
        <div className="max-h-94 max-w-94 py-4">
          <Image
            src={payment}
            alt="payment methods"
            height={100}
            weidth={10}
            quality={100}
          />
        </div>
        <div className="flex py-2">
          <FaStopwatch20 size="1.5rem" />
          <span className="pl-2">
            Selling fast! Only 8 left, and over 20 people have it in their
            carts.
          </span>
        </div>
        <div className="flex py-2">
          <FaTruckMoving size="1.5rem" />
          <span className="pl-2">Hooray! This item ships free to the US.</span>
        </div>
      </motion.div>
    </>
  );
}
