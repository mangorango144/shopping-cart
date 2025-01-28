import { createContext, useContext } from "react";
import { useFetchProducts } from "../../../hooks";

export const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export default function ShopProvider({ children }) {
  const { products, loading, error } = useFetchProducts();

  return (
    <ShopContext.Provider value={{ products, loading, error }}>
      {children}
    </ShopContext.Provider>
  );
}
