// useCart.js
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectCartQuantities } from "../redux/shopSelectors";
import { setCart, setCartQuantities } from "../redux/shopSlice";

export const useCart = () => {
  const dispatch = useDispatch();

  return {
    cart: useSelector(selectCart),
    setCart: (data) => dispatch(setCart(data)),
    cartQuantities: useSelector(selectCartQuantities),
    setCartQuantities: (data) => dispatch(setCartQuantities(data)),
  };
};
