import { useShop } from "../../../hooks";
import { TbTrashOff } from "react-icons/tb";

export default function OrderCard({ product }) {
  const { cart, setCart } = useShop();

  const handleRemove = (productToRemove) => () => {
    setCart(cart.filter((curr) => curr.id != productToRemove.id));
  };

  return (
    <>
      <img src={product.image} alt={product.title} className="" />
      <p className="font-medium text-[8px] text-slate-600 sm:text-sm">
        {product.title}
      </p>
      <p className="font-bold text-[8px] sm:text-base">${product.price}</p>
      <div className="flex justify-center items-center">
        <p className="text-[8px] text-slate-400 sm:text-sm">Quantity:</p>
        <input
          type="number"
          name="quantity"
          defaultValue="1"
          className="ml-1 border rounded-lg w-10 text-center"
        />
        <div
          onClick={handleRemove(product)}
          className="flex justify-center hover:border-2 hover:bg-red-100 ml-6 border-red-200 rounded-lg w-8 cursor-pointer"
        >
          <TbTrashOff className="text-red-600 text-sm md:text-xl" />
        </div>
      </div>
    </>
  );
}
