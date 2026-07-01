import { getNotices } from "../../shared/api/redux/notices/operations";
import { notices } from "../../shared/api/redux/notices/selectors";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";
import { Pagination } from "../../shared/ui/Pagination";

export const PaginationWrap = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(notices);

  return (
    <div className="desktop-l:mt-15 flex justify-center">
      <Pagination
        data={data}
        onPageChange={(page) => dispatch(getNotices({ page }))}
      />
    </div>
  );
};
