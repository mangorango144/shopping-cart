import { useShop } from "../../../hooks";
import { TbTrashOff } from "react-icons/tb";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function OrderCard({ product, updateQuantities }) {
  const { cart, setCart } = useShop();
  const navigate = useNavigate();

  const handleRemove = () => {
    setCart(cart.filter((curr) => curr.id != product.id));
    toast("Removed from cart", { icon: "❌" });
  };

  const handleInput = (e) => {
    e.target.value = Math.max(1, Number(e.target.value) || 1);
    updateQuantities((prev) => ({ ...prev, [product.id]: e.target.value }));
  };

  return (
    <>
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/shop/products/${product.id}`)}
        className="cursor-pointer"
      />
      <p
        className="font-medium text-[8px] text-slate-600 sm:text-sm cursor-pointer"
        onClick={() => navigate(`/shop/products/${product.id}`)}
      >
        {product.title}
      </p>
      <p className="font-bold text-[8px] sm:text-base">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex justify-center items-center">
        <p className="text-[8px] text-slate-400 sm:text-sm">Quantity:</p>
        <input
          type="number"
          name="quantity"
          min="1"
          defaultValue="1"
          onInput={handleInput}
          className="ml-1 border rounded-lg show-spinner w-10 text-center"
        />
        <div
          onClick={handleRemove}
          className="flex justify-center hover:bg-red-100 ml-2 sm:ml-6 hover:border-2 border-red-200 rounded-lg w-8 cursor-pointer"
        >
          <TbTrashOff className="text-red-600 text-sm md:text-xl" />
        </div>
      </div>
    </>
  );
}
