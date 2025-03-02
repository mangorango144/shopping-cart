import { useDispatch, useSelector } from "react-redux";
import { clearUserData, setUserData } from "../redux/userSlice";

export const useUser = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  return {
    userData,
    setUserData: (data) => dispatch(setUserData(data)),
    clearUserData: () => dispatch(clearUserData()),
  };
};
