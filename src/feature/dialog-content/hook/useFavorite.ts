import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { addFavorite } from "../../../shared/api/redux/user/operations";
import { toastNotification } from "../../../shared/api/lib/toast";

export const useFavorite = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handelAddFavorite = (id: string) => {
    dispatch(addFavorite(id)).unwrap();
    toastNotification("success", "Add to favorite");
    navigate("/profile");
  };
  return handelAddFavorite;
};
