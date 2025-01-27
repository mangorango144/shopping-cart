import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsLoader } from "../../../components";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = () => {
      setTimeout(async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          if (!res.ok) {
            throw new Error(`HTTP error: Status ${res.status}`);
          }
          const json = await res.json();
          setProducts(json);
          setError(null);
        } catch (err) {
          setError(err.message);
          setProducts(null);
        } finally {
          setLoading(false);
        }
      }, 500);
    };

    getProducts();
  }, []);

  return (
    <>
      {loading && <ProductsLoader />}
      {error && (
        <div className="flex justify-center my-auto font-semibold text-red-500 text-xl">
          {error}
        </div>
      )}
      {products && (
        <section className="gap-x-12 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-auto w-[95%] xl:w-8/12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
