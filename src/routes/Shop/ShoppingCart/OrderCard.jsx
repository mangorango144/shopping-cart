import { useShop } from "../../../hooks";

export default function OrderCard({ product }) {
  const { cart } = useShop();
  return (
    <>
      <img src={product.image} alt={product.title} className="" />
      <p className="font-medium text-[8px] text-slate-600 sm:text-sm">
        {product.title}
      </p>
      <p className="font-bold text-[8px] sm:text-base">${product.price}</p>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[8px] text-slate-400 sm:text-sm">Quantity:</p>
        <input
          type="number"
          name="quantity"
          defaultValue="1"
          className="border rounded-lg w-10 text-center"
        />
      </div>
    </>
  );
}
