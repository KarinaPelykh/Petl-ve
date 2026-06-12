import { getNews } from "../api/redux/news/operations";
import type { Data } from "../api/redux/news/types";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../hooks/reduxHooks";
import { Button } from "./Button";
import { Icon } from "./Icon";
import clsx from "clsx";

const ReactPaginateComponent = (ReactPaginate as any).default || ReactPaginate;

export function Pagination({ data }: { data: Data }) {
  const isFirstPage = data.page === 1;
  const isLastPage = data.page === data.totalPages;

  const dispatch = useAppDispatch();

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    dispatch(getNews({ page }));
  };

  const handelClikOnFirstPage = () => {
    if (isFirstPage) {
      return;
    }
    dispatch(getNews({ page: 1 }));
  };

  const handleLastPage = () => {
    if (isLastPage) {
      return;
    }
    dispatch(getNews({ page: data.totalPages }));
  };

  return (
    <>
      <Button
        onClick={handelClikOnFirstPage}
        className={clsx(
          "mr-2.5 flex size-11 cursor-pointer items-center justify-center rounded-[50%] border border-black/20 bg-transparent p-0! shadow-lg",
          isFirstPage && "pointer-events-none opacity-50",
        )}
      >
        <Icon name="slider" className="size-11 rotate-180" />
      </Button>
      <ReactPaginateComponent
        breakLabel="..."
        nextLabel={<Icon name="slider-1" className="size-11" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        forcePage={data.page - 1}
        pageCount={data.totalPages}
        previousLabel={<Icon name="slider-1" className="size-11 rotate-180" />}
        renderOnZeroPageCount={null}
        className="mr-2.5 flex"
        breakClassName=" shadow-lg border border-black/20 rounded-[50%] size-11 mr-2.5 flex justify-center items-center"
        previousClassName={clsx(
          " border border-black/20 rounded-[50%] shadow-lg  size-11 mr-2.5 flex justify-center items-center cursor-pointer",
          isFirstPage && "opacity-50 pointer-events-none",
        )}
        nextClassName={clsx(
          isLastPage && "opacity-50 pointer-events-none",
          "border border-black/20  shadow-lg rounded-[50%] size-11 flex justify-center items-center cursor-pointer",
        )}
        activeClassName="border-0 bg-yellow shadow-lg rounded-[50%] text-white size-11 mr-2.5  flex justify-center items-center"
        pageClassName="border  shadow-lg mr-2.5 border-black/20 rounded-[50%] size-11 flex justify-center items-center cursor-pointer"
      />
      <Button
        onClick={handleLastPage}
        className={clsx(
          "mr-2.5 flex size-11 cursor-pointer items-center justify-center rounded-[50%] border border-black/20 bg-transparent p-0! shadow-lg",
          isLastPage && "pointer-events-none opacity-50",
        )}
      >
        <Icon name="slider" className="size-11" />
      </Button>
    </>
  );
}
