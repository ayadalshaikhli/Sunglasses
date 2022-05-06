import ProductList from "../components/ProductList";
import {
  getProductsEarringsCollection,
  getProductsInCollection,
  getProductsNecklacesCollection,
  getProductsRingCollection,
} from "../lib/shopify";
import { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import Head from "next/head";
import FrontPage from "../components/FrontPage";
import { motion } from "framer-motion";
import FirstCollectionList from "../components/firstcollection/FirstCollectionList";
import SecoundCollectionList from "../components/secoundcollection/SecoundCollectionList";
import ThirdCollectionList from "../components/thirdcollection/ThirdCollectionList";
import { gsap, Expo } from "gsap/dist/gsap";

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
export default function Home({ products, rings, earrings, necklaces }) {
  useEffect(() => {
    tl.from(".late-text", 4, {
      x: 100,
      opacity: 0,
      stagger: 0.15,
      scale: ".8",
      ease: Expo.easeInOut,
    });
    gsap.from(".navbar", 3, {
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut,
    });
    gsap.from(".omo", 3, {
      y: 500,
      ease: Expo.easeInOut,
    });
  });

  return (
    <div className="relative body">
      <Head>
        <title>Tataroski</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:title" content="Tataroski" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildnextshop.com" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Tataroski" />

        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="wrap"
      >
        <FrontPage />
        <ProductList products={products} />
        <FirstCollectionList rings={rings} />
        <SecoundCollectionList earrings={earrings} />
        <ThirdCollectionList necklaces={necklaces} />
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  const rings = await getProductsRingCollection();
  const earrings = await getProductsEarringsCollection();
  const necklaces = await getProductsNecklacesCollection();

  return {
    props: { products, rings, earrings, necklaces },
    // will be passed to the page component as props
  };
}
