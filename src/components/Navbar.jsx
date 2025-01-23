import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center bg-white shadow-md mx-auto mt-4 px-14 rounded-full w-[95%] xl:w-8/12 h-[56px] font-medium text-black">
      <Link to="/">Home</Link>
      <Link to="shop/products" className="ml-5">
        Products
      </Link>
      <Link
        to="shop/shopping-cart"
        className="flex items-center hover:bg-lime-200 ml-auto px-4 py-1 rounded-2xl transition duration-500"
      >
        <BsCart4 className="mr-2 w-auto h-6" />
        <span className="flex flex-col text-xs">
          My Cart
          <span className="text-slate-400">3 Items</span>
        </span>
      </Link>
    </nav>
  );
}
