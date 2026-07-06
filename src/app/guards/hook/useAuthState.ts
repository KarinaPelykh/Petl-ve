import { useLocation } from "react-router";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import { auth } from "../../../shared/api/redux/user/selectors";

export const useAuthState = () => {
  const { isLoggedIn } = useAppSelector(auth);

  const location = useLocation();

  return { isLoggedIn, location };
};
