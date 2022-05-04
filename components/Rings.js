import React from "react";
import { getProductsEarringsCollection } from "../lib/shopify";
import SecoundCollectionCard from "./secoundcollection/SecoundCollectionCard";
import SecoundCollectionList from "./secoundcollection/SecoundCollectionList";

export default function Rings({ earrings }) {
  return <div className="text-white"></div>;
}
export async function getStaticProps() {
  const earrings = await getProductsEarringsCollection();

  return {
    props: { earrings },
    // will be passed to the page component as props
  };
}
