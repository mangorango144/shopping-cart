import ProductCard from "./ProductCard";

export default function Products() {
  return (
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
  );
}
