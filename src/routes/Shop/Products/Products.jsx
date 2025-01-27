import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsLoader } from "../../../components";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      setTimeout(async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json);
        setIsLoading(false);
      }, 500);
    };

    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <ProductsLoader />
      ) : (
        <section className="gap-x-12 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-auto w-[95%] xl:w-8/12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
