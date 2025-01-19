import OrderCard from "./OrderCard";

export default function Order() {
  return (
    <div>
      <span className="block mb-5 font-medium text-2xl">Order</span>
      <div className="items-center gap-5 grid grid-cols-[1fr_3fr_0.5fr_2fr] bg-white shadow-md p-9 rounded-xl">
        <OrderCard />
        <hr className="col-span-4" />
        <OrderCard />
        <hr className="col-span-4" />
        <OrderCard />
      </div>
    </div>
  );
}
