import { createContext } from "react";
import { useCart, useFetchProducts } from "../hooks";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { products, loading, error } = useFetchProducts();
  const { cart, setCart } = useCart();

  return (
    <ShopContext.Provider value={{ products, loading, error, cart, setCart }}>
      {children}
    </ShopContext.Provider>
  );
}
