import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex space-x-5 bg-gray-800 p-4 font-medium text-white">
      <Link to="/">Home</Link>
      <Link to="shop/products">Products</Link>
    </nav>
  );
}
