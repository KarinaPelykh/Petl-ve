import { toastNotification } from "../../../shared/api/lib/toast";
import { deleteFavorite } from "../../../shared/api/redux/user/operations";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";

export const useRemoveFavorite = () => {
  const dispatch = useAppDispatch();

  const deleteFromFavorite = (id: string) => {
    dispatch(deleteFavorite(id)).unwrap();
    toastNotification("info", "Delete from favorite");
  };
  return deleteFromFavorite;
};
