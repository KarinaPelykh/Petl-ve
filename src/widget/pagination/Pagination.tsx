import type { PetFilterControl } from "../../feature/search-pet/hook/usePetsFilter";

import { notices } from "../../shared/api/redux/notices/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { Pagination } from "../../shared/ui/Pagination";

type PaginationWrapProps = {
  method: PetFilterControl;
};

export const PaginationWrap = ({ method }: PaginationWrapProps) => {
  const data = useAppSelector(notices);

  return (
    <div className="desktop-l:mt-15 flex justify-center">
      <Pagination method={method} data={data} />
    </div>
  );
};
