import OrderCard from "./OrderCard";

export default function Order() {
  return (
    <>
      <p className="inline-block mb-4 font-medium text-2xl">Order</p>
      <section className="space-y-6 bg-white shadow-md p-9 rounded-2xl w-[850px] h-fit">
        <OrderCard />
        <hr />
        <OrderCard />
        <hr />
        <OrderCard />
      </section>
    </>
  );
}
