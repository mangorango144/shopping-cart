import { FaCartPlus } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="space-y-5 grid grid-col-1 bg-white shadow-md p-6 rounded-3xl">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        className="mx-auto w-[70%] h-auto object-contain"
      />
      <p className="text-center text-sm">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <p className="mx-auto font-bold">
        <span className="font-normal text-slate-500">Price: </span>$109.95
      </p>
      <button className="bg-green-600 hover:bg-green-500 p-3 rounded-2xl font-medium text-lg text-white">
        <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
      </button>
    </div>
  );
}
