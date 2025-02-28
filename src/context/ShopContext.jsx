import { createContext } from "react";
import {
  useCart,
  useCartQuantities,
  useDelivery,
  useFetchProducts,
  useSelectedServices,
} from "../hooks";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const values = {
    ...useFetchProducts(),
    ...useCart(),
    ...useCartQuantities(),
    ...useDelivery(),
    ...useSelectedServices(),
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
