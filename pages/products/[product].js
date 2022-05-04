import ProductPageContent from "../../components/ProductPageContent";
import {
  getAllProducts,
  getProduct,
  recursiveCatalog,
  getAllCollections,
} from "../../lib/shopify";
import { motion } from "framer-motion";
export default function ProductPage({ product }) {
  // const realId = Buffer.from(product.id, 'base64').toString('utf8').split("/").pop()
  // console.log(realId)

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="h-full w-full relative   colornav"
    >
      <ProductPageContent product={product} />
    </motion.div>
  );
}

export async function getStaticPaths() {
  const products = await recursiveCatalog();

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
