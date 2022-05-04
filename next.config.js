module.exports = {
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
  experimental: {
    urlImports: ["https://dist.pixotronics.com/webgi/runtime/bundle-0.2.81.js"],
  },
};
