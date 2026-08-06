import { useEffect, useState } from "react";
import { SearchNews } from "../feature/search-news/SearchNews";

import { Heading } from "../shared/ui/Heading";

import { NewsListContent } from "../widget/news-list/NewsListContent";
import { getNews } from "../shared/api/services";

export type New = {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
};

export type Data<T> = {
  page: number;
  perPage: number;
  totalPages: number;
  results: T[];
};

export const News = () => {
  const [news, setNews] = useState<Data<New> | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const result = await getNews({ page: 1 });
        setNews(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);

  const onSearch = async (search: string) => {
    if (!news?.page) return;
    try {
      const res = await getNews({ page: news?.page, search });
      setNews(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="pt-15 pb-11">
      <div className="container mx-auto!">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading as="h1" variant="first" className="tablet-l:mb-0 mb-5">
            News
          </Heading>
          <SearchNews onSearch={onSearch} />
        </div>
        <NewsListContent news={news} setNews={setNews} />
      </div>
    </section>
  );
};
