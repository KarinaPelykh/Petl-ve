import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { addFavorite } from "../../../shared/api/redux/user/operations";

export const useFavorite = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handelAddFavorite = (id: string) => {
    dispatch(addFavorite(id));
    navigate("/profile");
  };
  return handelAddFavorite;
};
