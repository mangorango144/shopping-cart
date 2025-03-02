// useProducts.js
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectLoading,
  selectError,
} from "../redux/shopSelectors";

export const useProducts = () => {
  return {
    products: useSelector(selectProducts),
    loading: useSelector(selectLoading),
    error: useSelector(selectError),
  };
};
