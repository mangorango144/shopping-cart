import { Link } from "react-router-dom";
import { UserStatus } from "./UserStatus";
import { CartStatus } from "./CartStatus";

export default function Navbar() {
  return (
    <nav className="flex justify-start items-center bg-white shadow-md mx-auto lg:mt-4 px-4 sm:px-14 lg:px-7 lg:rounded-full w-full lg:w-8/12 h-[56px] font-medium text-black text-xs sm:text-base">
      <Link to="/">Home</Link>
      <Link to="shop/products" className="ml-5">
        Products
      </Link>

      <CartStatus />

      <div className="border-1 mr-2 sm:mr-6 ml-1 sm:ml-2 border-l h-7"></div>

      <UserStatus />
    </nav>
  );
}
