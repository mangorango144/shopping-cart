import { Fragment } from "react";
import OrderCard from "./OrderCard";
import { useShop } from "../../../hooks";

export default function Order() {
  const { cart } = useShop();

  return (
    <div>
      <span className="block mb-5 font-medium text-2xl">Order</span>
      <div className="items-center gap-5 grid grid-cols-[1fr_3fr_0.5fr_2fr] bg-white shadow-md p-9 rounded-xl">
        {cart.map((product) => (
          <Fragment key={product.id}>
            <OrderCard product={product} />
            <hr className="col-span-4" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
