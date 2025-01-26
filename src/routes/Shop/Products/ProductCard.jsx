import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-3xl h-[460px]">
      <img
        src={product.image}
        alt={product.title}
        className="m-auto w-[60%] h-auto max-h-[50%] object-contain"
      />
      <div className="flex flex-col gap-4 mt-10">
        <p className="text-center text-sm">{product.title}</p>
        <p className="mx-auto font-bold">
          <span className="font-normal text-slate-500">Price: </span>$
          {product.price}
        </p>
        <button className="bg-green-600 hover:bg-green-500 p-3 rounded-2xl h-auto font-medium text-lg text-white">
          <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
        </button>
      </div>
    </div>
  );
}
