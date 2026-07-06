import { getNews } from "../../shared/api/redux/news/operations";
import { news } from "../../shared/api/redux/news/selectors";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";
import { Pagination } from "../../shared/ui/Pagination";
import { NewsFallback } from "./NewsFallback";
import { NewsList } from "./NewsList";

export const NewsListContent = () => {
  const data = useAppSelector(news);
  const dispatch = useAppDispatch();

  return (
    <>
      {data?.results?.length ? (
        <>
          <NewsList newsData={data.results} />
          <div className="mt-15 flex w-full justify-center">
            <Pagination
              data={data}
              onPageChange={(page) => dispatch(getNews({ page }))}
            />
          </div>
        </>
      ) : (
        <NewsFallback />
      )}
    </>
  );
};
