export default function OrderCard() {
  return (
    <>
      <div className="w-fit">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          className="inline w-[100px] h-[100px]"
        />
        <p className="inline mx-4 font-semibold text-slate-500 text-sm">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="inline ml-20 font-semibold text-base">$109.95</p>
        <label
          htmlFor="quantity"
          className="ml-14 font-semibold text-slate-400 text-xs"
        >
          Quantity:
        </label>
        <input
          type="number"
          name="quantity"
          defaultValue="1"
          className="border-2 my-auto ml-2 rounded-lg w-[50px] text-bold text-center outline-none"
        />
      </div>
    </>
  );
}
