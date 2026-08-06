import type { Data, New } from "../../pages/News";
import { getNews } from "../../shared/api/services";
import { Pagination } from "../../shared/ui/Pagination";
import { NewsFallback } from "./NewsFallback";
import { NewsList } from "./NewsList";

type NewsListContentProps = {
  news: Data<New> | null;
  setNews: (val: Data<New>) => void;
};

export const NewsListContent = ({ news, setNews }: NewsListContentProps) => {
  const handelPage = async (page: number) => {
    try {
      const res = await getNews({ page });
      setNews(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {news?.results?.length ? (
        <>
          <NewsList newsData={news?.results} />
          <div className="mt-15 flex w-full justify-center">
            <Pagination data={news} onPageChange={(page) => handelPage(page)} />
          </div>
        </>
      ) : (
        <NewsFallback />
      )}
    </>
  );
};
