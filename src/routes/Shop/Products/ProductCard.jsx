import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks";
import toast from "react-hot-toast";

export function ProductCard({ product }) {
  const { cart, setCart } = useCart();

  const handleAdd = () => {
    if (!cart.some((item) => item.id == product.id)) {
      setCart([...cart, product]);
      toast.success("Added to cart");
    } else {
      toast.error("Already in the cart");
    }
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
          <p className="text-sm text-center">{product.title}</p>
        </Link>
        <p className="mx-auto font-bold">
          <span className="font-normal text-slate-500">Price: </span>$
          {product.price.toFixed(2)}
        </p>
        <button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-500 p-3 rounded-2xl h-auto font-medium text-white text-lg"
        >
          <FaCartPlus className="inline mr-1 mb-1" /> Add to cart
        </button>
      </div>
    </div>
  );
}
