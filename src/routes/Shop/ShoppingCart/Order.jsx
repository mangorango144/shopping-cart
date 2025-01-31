import { Fragment } from "react";
import OrderCard from "./OrderCard";
import { useShop } from "../../../hooks";

export default function Order({ updateQuantities }) {
  const { cart } = useShop();

  return (
    <div>
      <span className="block mb-5 font-medium text-2xl">Order</span>
      <div className="items-center gap-5 grid grid-cols-[1fr_3fr_0.5fr_2fr] bg-white shadow-md p-9 rounded-xl">
        {cart.map((product, index) => (
          <Fragment key={product.id}>
            <OrderCard product={product} updateQuantities={updateQuantities} />
            {index < cart.length - 1 && <hr className="col-span-4" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
