import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { getNotices } from "../../../shared/api/redux/notices/operations";
import type { Filter } from "../types/select.type";

export const useGetFilteredNotices = ({ filter }: { filter: Filter }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = {
      page: filter.page,
      keyword: filter.keyword,
      sex: filter.sex,
      category: filter.category,
      species: filter.species,
      locationId: filter.locationId,
      byPrice: filter.byPrice,
      byPopularity: filter.byPopularity,
    };

    dispatch(getNotices(params));
  }, [filter, dispatch]);
};
