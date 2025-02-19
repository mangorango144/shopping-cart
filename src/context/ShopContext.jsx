import { createContext } from "react";
import {
  useCart,
  useCartQuantities,
  useDelivery,
  useFetchProducts,
} from "../hooks";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const { products, loading, error } = useFetchProducts();
  const { cart, setCart } = useCart();
  const { cartQuantities, setCartQuantities } = useCartQuantities();
  const { delivery, setDelivery } = useDelivery();

  const values = {
    products,
    loading,
    error,
    cart,
    setCart,
    cartQuantities,
    setCartQuantities,
    delivery,
    setDelivery,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
