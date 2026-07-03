import { useNavigate } from "react-router";
import { addFavorite } from "../../../shared/api/redux/notices/operations";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";

export const useFavorite = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handelAddFavorite = (id: string) => {
    dispatch(addFavorite(id));
    navigate("/profile");
  };
  return handelAddFavorite;
};
