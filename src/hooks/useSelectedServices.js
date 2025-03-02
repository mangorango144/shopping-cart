// useSelectedServices.js
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedServices } from "../redux/shopSelectors";
import { setSelectedServices } from "../redux/shopSlice";

export const useSelectedServices = () => {
  const dispatch = useDispatch();

  return {
    selectedServices: useSelector(selectSelectedServices),
    setSelectedServices: (data) => dispatch(setSelectedServices(data)),
  };
};
