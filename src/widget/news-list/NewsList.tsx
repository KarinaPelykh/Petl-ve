import type { New } from "../../shared/api/redux/news/types";
import { NewsCard } from "./NewsCard";

type NewsListProps = {
  newsData: New[];
};

export const NewsList = ({ newsData }: NewsListProps) => {
  return (
    <ul className="tablet-l:gap-x-6 tablet-l:gap-y-8 tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-y-10 desktop-l:gap-x-8.75 grid gap-6">
      {newsData?.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </ul>
  );
};
