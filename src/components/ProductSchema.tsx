import { Product } from "@/types";

interface Props {
  product: Product;
}

const ProductSchema = ({ product }: Props) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.imageUrls,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "CivilCore"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://civilcore.com/products/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": product.stockQuantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;
