import { useShop } from "../../../hooks";

export default function PaymentSummary({ cartQuantities, className }) {
  const { cart } = useShop();

  const orderSummary = cart
    .reduce(
      (accumulator, currItem) =>
        accumulator + currItem.price * (cartQuantities[currItem.id] || 1),
      0
    )
    .toFixed(2);

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">Payment Summary</span>
      <div className="gap-4 space-y-2 grid grid-cols-[2fr_1fr] bg-white shadow-md p-7 rounded-xl">
        <span className="col-span-2 bg-zinc-200 p-2 rounded-md font-semibold text-center text-gray-600 uppercase">
          unregistered account
        </span>

        <p className="font-medium text-gray-400 text-left">Transaction code</p>
        <p className="text-right font-semibold text-gray-600">VC11566S</p>

        <input
          type="text"
          placeholder="coupon code"
          name="coupon"
          className="border-2 p-2 rounded-md font-medium uppercase"
        />
        <button className="bg-sky-100 hover:bg-sky-200 rounded-md font-medium text-sky-500">
          Apply
        </button>

        <hr className="col-span-2 border-t-2 border-dashed" />

        <p className="font-medium text-gray-400 text-left">Order Summary</p>
        <p className="text-right font-semibold">${orderSummary}</p>

        <p className="font-medium text-gray-400 text-left">
          Additional Service
        </p>
        <p className="text-right font-semibold text-sky-500">$10</p>

        <p className="font-medium text-gray-400 text-left">Total Amount</p>
        <p className="text-right font-semibold">$132</p>

        <hr className="col-span-2 border-t-2 border-dashed" />

        <span className="col-span-2 bg-red-100 p-2 rounded-md font-semibold text-center text-gray-600 text-sm uppercase rounde-md">
          sale expiring in:{" "}
          <span className="font-bold text-red-500">21 hours, 31 minutes</span>
        </span>
      </div>
    </div>
  );
}
