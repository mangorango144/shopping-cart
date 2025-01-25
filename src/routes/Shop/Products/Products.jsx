import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-96">
            <div className="border-4 mr-4 border-t-transparent border-teal-500 rounded-full w-12 h-12 animate-spin"></div>
            <p className="bg-clip-text bg-gradient-to-b from-teal-300 to-teal-600 font-bold text-2xl text-center text-transparent">
              Loading...
            </p>
          </div>
        </>
      ) : (
        <section className="gap-x-12 gap-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-auto w-[95%] xl:w-8/12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      )}
    </>
  );
}
