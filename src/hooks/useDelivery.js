// useDelivery.js
import { useDispatch, useSelector } from "react-redux";
import { selectDelivery } from "../redux/shopSelectors";
import { setDelivery } from "../redux/shopSlice";

export const useDelivery = () => {
  const dispatch = useDispatch();

  return {
    delivery: useSelector(selectDelivery),
    setDelivery: (data) => dispatch(setDelivery(data)),
  };
};
