import { useEffect, useState } from "react";
import { SearchForm } from "../feature/search-form/SearchForm";

import { Heading } from "../shared/ui/Heading";
import { NewsList } from "../widget/news-list/NewsList";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { getNews } from "../shared/api/redux/news/operations";
import { news } from "../shared/api/redux/news/selectors";
import { Pagination } from "../shared/ui/Pagination";

export const News = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const data = useAppSelector(news);

  const [filtered, setFiltered] = useState(data.results);

  useEffect(() => {
    dispatch(getNews(1));
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const filteredData = data.results?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );

    setFiltered(filteredData);
  };

  return (
    <section className="pt-15 pb-11">
      <div className="container mx-auto!">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading as="h1" variant="first" className="tablet-l:mb-0 mb-5">
            News
          </Heading>
          <SearchForm
            search={search}
            setSearch={setSearch}
            onSubmit={onSubmit}
          />
        </div>
        <NewsList newsData={filtered} />
        <div className="mt-15 flex w-full justify-center">
          <Pagination data={data} />
        </div>
      </div>
    </section>
  );
};
