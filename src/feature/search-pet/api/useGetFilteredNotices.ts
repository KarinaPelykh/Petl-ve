import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { getNotices } from "../../../shared/api/redux/notices/operations";

export const useGetFilteredNotices = ({ filter }) => {
  const dispatch = useAppDispatch();
  console.log(filter);

  useEffect(() => {
    const params = {
      page: 1,
      keyword: filter.keyword,
      sex: filter.sex,
      category: filter.category,
      species: filter.species,
      locationId: filter.location?.locationId || "",
      byPrice: filter.byPrice,
      byPopularity: filter.byPopularity,
    };

    dispatch(getNotices(params));
  }, [filter, dispatch]);
};
