import { createContext } from "react";
import { useCart, useCartQuantities, useFetchProducts } from "../hooks";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { products, loading, error } = useFetchProducts();
  const { cart, setCart } = useCart();
  const { cartQuantities, setCartQuantities } = useCartQuantities();

  const values = {
    products,
    loading,
    error,
    cart,
    setCart,
    cartQuantities,
    setCartQuantities,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
