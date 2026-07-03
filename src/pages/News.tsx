import { useEffect } from "react";
import { SearchNews } from "../feature/search-news/SearchNews";

import { Heading } from "../shared/ui/Heading";
import { NewsList } from "../widget/news-list/NewsList";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { getNews } from "../shared/api/redux/news/operations";
import { news } from "../shared/api/redux/news/selectors";
import { Pagination } from "../shared/ui/Pagination";

export const News = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(news);

  useEffect(() => {
    dispatch(getNews({ page: 1 }));
  }, [dispatch]);

  return (
    <section className="pt-15 pb-11">
      <div className="container mx-auto!">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading as="h1" variant="first" className="tablet-l:mb-0 mb-5">
            News
          </Heading>
          <SearchNews />
        </div>
        <NewsList newsData={data.results} />
        {data?.results?.length !== 0 ? (
          <div className="mt-15 flex w-full justify-center">
            <Pagination
              data={data}
              onPageChange={(page) => dispatch(getNews({ page }))}
            />
          </div>
        ) : (
          <div className="relative flex flex-col items-center justify-center overflow-hidden py-20">
            <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"></div>
            <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

            <div className="relative z-10 max-w-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800"
                alt="Happy dog"
                className="mx-auto h-64 w-64 rounded-full object-cover shadow-xl ring-8 ring-white"
              />

              <h2 className="mt-8 text-4xl font-bold text-gray-900">
                No news found
              </h2>

              <p className="mt-4 text-gray-600">
                Looks like this little friend couldn't find any matching
                articles. Try searching with different keywords.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
