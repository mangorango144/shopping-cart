import { useContext } from "react";
import { ShopContext } from "../routes/Shop/context";

export const useShop = () => useContext(ShopContext);
