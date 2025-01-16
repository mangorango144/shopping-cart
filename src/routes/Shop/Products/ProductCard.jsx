import { FaCartPlus } from "react-icons/fa";

export default function ProductCard() {
  return (
    <section className="flex flex-wrap justify-center bg-white shadow-md m-auto mb-11 rounded-2xl w-[250px] h-[350px]">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        className="mt-8 w-[160px] h-[160px]"
      />
      <p className="px-4 text-center text-xs">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <p className="mt-2">
        Price: <b className="text-slate-500">$109.95</b>
      </p>
      <button className="bg-green-600 hover:bg-green-500 m-4 rounded-xl w-full font-medium text-lg text-white">
        <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
      </button>
    </section>
  );
}
