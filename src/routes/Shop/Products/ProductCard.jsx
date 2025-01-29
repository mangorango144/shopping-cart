import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShop } from "../../../hooks";

export default function ProductCard({ product }) {
  const { setCart } = useShop();

  const handleClick = (cardProduct) => () => {
    setCart((prev) => [...prev, cardProduct]);
  };

  return (
    <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-3xl h-[460px]">
      <Link
        className="flex items-center m-auto w-[60%] h-auto max-h-[50%]"
        to={`${product.id}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-full object-contain"
        />
      </Link>
      <div className="flex flex-col gap-4 mt-10">
        <Link to={`${product.id}`}>
          <p className="text-center text-sm">{product.title}</p>
        </Link>
        <p className="mx-auto font-bold">
          <span className="font-normal text-slate-500">Price: </span>$
          {product.price}
        </p>
        <button
          onClick={handleClick(product)}
          className="bg-green-600 hover:bg-green-500 p-3 rounded-2xl h-auto font-medium text-lg text-white"
        >
          <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
        </button>
      </div>
    </div>
  );
}
