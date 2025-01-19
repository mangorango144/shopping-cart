export default function OrderCard() {
  return (
    <>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        className=""
      />
      <p className="font-medium text-[8px] text-slate-600 sm:text-sm">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
      <p className="font-bold text-[8px] sm:text-base">$109.95</p>
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
