import ReactPaginate from "react-paginate";
import { Button } from "./Button";
import { Icon } from "./Icon";
import clsx from "clsx";
import type {
  Filter,
  FilterKey,
} from "../../feature/search-pet/types/select.type";
import type { New, Data } from "../../pages/News";
import type { Notice } from "../api/redux/types";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactPaginateComponent = (ReactPaginate as any).default || ReactPaginate;

type T = Notice | New;

type PaginationProps = {
  data: Data<T>;
  onPageChange?: (val: number) => void;
  method?: {
    filter: Filter;
    onChangeInput: (key: FilterKey, val: Filter[FilterKey]) => void;
  };
};

export function Pagination({ method, data, onPageChange }: PaginationProps) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  const pageRange = windowSize > 768 ? 2 : 1;

  const isFirstPage = method?.filter.page === 1;

  const isLastPage = data.page === data.totalPages;

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    method?.onChangeInput("page", page);
    onPageChange?.(page);
  };

  const handelClikOnFirstPage = () => {
    if (isFirstPage) {
      return;
    }
    method?.onChangeInput("page", 1);
    onPageChange?.(1);
  };

  const handleLastPage = () => {
    if (isLastPage) {
      return;
    }
    method?.onChangeInput("page", data.totalPages);
    onPageChange?.(data.totalPages);
  };

  return (
    <>
      <Button
        onClick={handelClikOnFirstPage}
        className={clsx(
          "desktop-l:size-11 mr-2.5 flex size-10 cursor-pointer items-center justify-center rounded-[50%] border border-black/20 bg-transparent p-0! shadow-lg",
          isFirstPage && "pointer-events-none opacity-50",
        )}
      >
        <Icon name="slider" className="size-11 rotate-180" />
      </Button>
      <ReactPaginateComponent
        breakLabel="..."
        nextLabel={<Icon name="slider-1" className="size-11" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRange}
        marginPagesDisplayed={0}
        forcePage={data.page - 1}
        pageCount={data.totalPages}
        previousLabel={<Icon name="slider-1" className="size-11 rotate-180" />}
        renderOnZeroPageCount={null}
        className="mr-2.5 flex"
        breakClassName=" shadow-lg border border-black/20 rounded-[50%] desktop-l:size-11 size-10 mr-2.5 flex justify-center items-center"
        previousClassName={clsx(
          " border border-black/20 rounded-[50%] shadow-lg  desktop-l:size-11 size-10 mr-2.5 flex justify-center items-center cursor-pointer",
          isFirstPage && "opacity-50 pointer-events-none",
        )}
        nextClassName={clsx(
          isLastPage && "opacity-50 pointer-events-none",
          "border border-black/20  shadow-lg rounded-[50%] desktop-l:size-11 size-10 flex justify-center items-center cursor-pointer",
        )}
        activeClassName="border-0 bg-yellow shadow-lg rounded-[50%] text-white desktop-l:size-11 size-10 mr-2.5  flex justify-center items-center"
        pageClassName="border  shadow-lg mr-2.5 border-black/20 rounded-[50%] desktop-l:size-11 size-10 flex justify-center items-center cursor-pointer"
      />
      <Button
        onClick={handleLastPage}
        className={clsx(
          "desktop-l:size-11 mr-2.5 flex size-10 cursor-pointer items-center justify-center rounded-[50%] border border-black/20 bg-transparent p-0! shadow-lg",
          isLastPage && "pointer-events-none opacity-50",
        )}
      >
        <Icon name="slider" className="size-11" />
      </Button>
    </>
  );
}
