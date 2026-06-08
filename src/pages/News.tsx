import { useEffect, useState } from "react";
import { SearchForm } from "../feature/search-form/SearchForm";

import { Heading } from "../shared/ui/Heading";
import { NewsList } from "../widget/news-list/NewsList";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
import { getNews } from "../shared/api/redux/news/operations";
import { news } from "../shared/api/redux/news/selectors";

export const News = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();
  const data = useAppSelector(news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <section className="pt-15 pb-11">
      <div className="container mx-auto!">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading as="h1" variant="first" className="mb-5  tablet-l:mb-0">
            News
          </Heading>
          <SearchForm search={search} setSearch={setSearch} />
        </div>
        <NewsList newsData={data} />
      </div>
    </section>
  );
};
