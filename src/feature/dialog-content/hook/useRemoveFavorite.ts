import { deleteFavorite } from "../../../shared/api/redux/notices/operations";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";

export const useRemoveFavorite = () => {
  const dispatch = useAppDispatch();

  const deleteFromFavorite = (id: string) => {
    dispatch(deleteFavorite(id));
  };
  return deleteFromFavorite;
};
