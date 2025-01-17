import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-start space-x-5 bg-white shadow-md mx-auto my-4 px-8 py-4 rounded-full w-[95%] xl:w-10/12 font-medium text-black">
      <Link to="/">Home</Link>
      <Link to="shop/products">Products</Link>
    </nav>
  );
}
