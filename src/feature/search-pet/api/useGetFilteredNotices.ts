import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { getNotices } from "../../../shared/api/redux/notices/operations";
import type { Filter } from "../types/select.type";

export const useGetFilteredNotices = (filter: Filter) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotices({ ...filter }));
  }, [filter, dispatch]);
};
