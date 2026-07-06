import { useEffect } from "react";
import { SearchNews } from "../feature/search-news/SearchNews";

import { Heading } from "../shared/ui/Heading";

import { useAppDispatch } from "../shared/hooks/reduxHooks";
import { getNews } from "../shared/api/redux/news/operations";
import { NewsListContent } from "../widget/news-list/NewsListContent";

export const News = () => {
  const dispatch = useAppDispatch();

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
        <NewsListContent />
      </div>
    </section>
  );
};
