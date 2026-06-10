import { getNews } from "../api/redux/news/operations";
import type { Data } from "../api/redux/news/types";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../hooks/reduxHooks";

const ReactPaginateComponent = (ReactPaginate as any).default || ReactPaginate;

export function Pagination({ data }: { data: Data }) {
  const dispatch = useAppDispatch();

  const handlePageClick = (event) => {
    dispatch(getNews(event.selected + 1));
  };

  return (
    <ReactPaginateComponent
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={data.totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      className="flex"
      breakClassName="bg-transparent border border-black/20 rounded-[50%] size-[44px] mr-2.5  flex justify-center items-center "
      previousLinkClassName="bg-transparent border border-black/20 rounded-[50%] size-[44px] mr-2.5 flex justify-center items-center "
      nextClassName="bg-transparent border border-black/20 rounded-[50%] size-[44px]  flex justify-center items-center "
      activeLinkClassName="border-0 bg-yellow  rounded-[50%] text-white size-[44px]  mr-2.5"
      pageLinkClassName="bg-transparent border mr-2.5 border-black/20 rounded-[50%] size-[44px]  flex justify-center items-center "
    />
  );
}
